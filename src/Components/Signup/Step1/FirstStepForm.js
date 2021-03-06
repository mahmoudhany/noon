import React, { Component } from 'react';
import { auth } from '../../../Firebase'
import { Link } from 'react-router-dom'
import './FirstStepForm.css'

import Input from '../../UI/Input/Input'
import { FormValidation } from '../../../Utility/FormValidation';

class FirstStepForm extends Component {
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
      },
      {
        name: 'repeatPassword',
        label: 'Confirm password',
        placeholder: "Confirm password",
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
  continue = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    const { updatedFields, isValid } = FormValidation({ fields });
    this.setState({ fields: updatedFields });
    if (isValid) {
      this.setState({ isValid: true });
      const { email, password } = this.prepareData()

      this.signup(email, password)
    }
  }
  prepareData = () => {
    let formData = {}
    const data = this.state.fields.map((data) => data)
    for (const key in data) {
      if (key < 2) {
        formData = {
          ...formData, ...{ [data[key].name]: data[key].value }
        }
      }
    }
    return formData
  }
  signup = (email, password) => {
    this.setState({ loading: true })

    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({ loading: false })
        this.props.nextStep(response.user)
        console.log('first step', response.user);
      })
      .catch(error => {
        this.setState({ loading: false })
        alert(error.message)
      })
  }

  render() {
    const { fields } = this.state
    return (
      <div className='first-step'>
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
            onClick={this.continue}
            disabled={this.state.loading ? true : false}
          >Next</button>
        </form>
        <br />
        <p>Already have account, <Link to='/login'>Login</Link></p>
      </div >
    )
  }
}

export default FirstStepForm;
