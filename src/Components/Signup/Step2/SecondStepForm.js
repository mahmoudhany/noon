import React, { Component } from 'react';
import Input from '../../UI/Input/Input'
import './SecondStepForm.css'
import { FormValidation } from '../../../Utility/FormValidation'
import { firestore } from '../../../Firebase'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../../Redux/Actions/Auth'

class SecondStepForm extends Component {
  state = {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: "First Name",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'first name cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: "Last Name",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'last name cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'jobTitle',
        label: 'Job Title',
        placeholder: "Job Title",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'Job Title cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'gender',
        label: 'Gender',
        placeholder: "gender",
        inputType: 'select',
        type: 'select',
        error: null,
        options: ['male', 'female'],
        errorMsg: 'Gender cannot be blank',
        value: 'male',
        isRequired: true
      },
      {
        name: 'phone',
        label: 'Phone',
        placeholder: "Phone Number",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'phone cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'city',
        label: 'City',
        placeholder: "City",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'city cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'country',
        label: 'Country',
        placeholder: "Country",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'Country cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'address',
        label: 'Address',
        placeholder: "Address",
        inputType: 'text',
        type: 'text',
        error: null,
        value: '',
        isRequired: false
      }
    ],
    isValid: false,
    loading: false
  }
  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }
  onChangeInput = (val, index) => {
    const { fields } = this.state;
    fields[index].value = val;
    this.setState({ fields })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    const { updatedFields, isValid } = FormValidation({ fields });
    this.setState({ fields: updatedFields })

    if (isValid) {
      this.setState({ isValid: true });
      const formData = this.prepareData()

      this.submitUserData(formData, this.props.userObj)
    }
  }
  prepareData = () => {
    let formData = {}
    const data = this.state.fields.map((data) => data)
    for (const key in data) {
      formData = {
        ...formData, ...{ [data[key].name]: data[key].value }
      }
    }
    return formData
  }
  submitUserData = (data, user) => {
    this.setState({ loading: true })
    firestore.collection('users').doc(user.uid)
      .set(data)
      .then(() => {
        console.log("Document written with ID: ", user.uid);
        this.setState({ loading: false })
        this.props.onAuth(user)
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.error("Error adding document: ", error);
      });
  }
  render() {
    const { fields } = this.state
    return (
      <div className='container second-form'>
        <form>
          <div className='form-row'>
            {fields.map((fld, index) => {
              return (
                <div className={`form-group col-md-4`} key={fld.name} >
                  <Input
                    {...fld}
                    onChange={val => this.onChangeInput(val, index)}
                  />
                </div>
              )
            })
            }
          </div>
          <div className='form-buttons'>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.back}
              disabled={this.state.loading ? true : false}
            >Back</button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
              disabled={this.state.loading ? true : false}
            >{this.state.loading ? 'loading...' : 'Submit'}</button>
          </div>
        </form>
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (user) => dispatch(getUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SecondStepForm));
