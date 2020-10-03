import React, { Component } from 'react';
import { auth } from '../../Firebase'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getUser } from '../../Redux/Actions/Auth'
import Input from '../UI/Input/Input'
import { FormValidation } from '../../Utility/FormValidation';
import './Login.css'
// log connect to render state
//from redux 








class Login extends Component {
  state = {
    fields: [
      {
        name: 'email',
        label: 'Enter an email address',
        placeholder: "Email address",
        inputType: 'text',
        type: 'email',
        error: null,
        errorMsg: 'email cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'password',
        label: 'Enter a password',
        placeholder: "Password",
        inputType: 'text',
        type: 'password',
        error: null,
        errorMsg: 'password cannot be blank',
        value: '',
        isRequired: true
      }
    ],
    loading: false,
    isValid: false
  }
  onChangeInput = (val, index) => {
    const { fields } = this.state;
    fields[index].value = val;
    this.setState({ fields });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    const { updatedFields, isValid } = FormValidation({ fields });
    this.setState({ fields: updatedFields });
    if (isValid) {
      this.setState({ isValid: true });
      const { email, password } = this.prepareData()

      this.login(email, password)
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
  login = (email, password) => {
    this.setState({ loading: true })
    auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('login', response.user);
        this.setState({ loading: false })
        this.props.onAuth(response.user)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
        alert(error.message)
      })
  }

  render() {
    const { fields } = this.state
    return (
      <div className='login'>
        <form>
          {fields.map((fld, index) => {
            return (
              <Input
                key={fld.name}
                {...fld}
                onChange={val => this.onChangeInput(val, index)}
              />
            )
          })
          }
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
            disabled={this.state.loading ? true : false}
          >{this.state.loading ? 'loading...' : 'Login'}</button>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAuth: (user) => dispatch(getUser(user))
  }
}
export default connect(null, mapDispatchToProps)(withRouter(Login));
