import React, { Component } from 'react';
import axios from 'axios'
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
    const { nextStep } = this.props;
    const { updatedFields, isValid } = FormValidation({ fields });

    this.setState({ fields: updatedFields });
    console.log(isValid);
    if (isValid) {
      this.setState({ isValid: true });

      // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // ...
      // })

      nextStep();
    }
  }
  signup = (data) => {

  }

  render() {
    const { fields } = this.state
    return (
      <div>
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
          >Next</button>
        </form>
      </div >
    )
  }
}

export default FirstStepForm;
