import React, { Component } from 'react';
import Input from '../../UI/Input/Input'
import './SecondStepForm.css'
import { FormValidation } from '../../../Utility/FormValidation'

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
    isValid: false
  }
  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
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

    }
  }

  render() {
    const { fields } = this.state
    return (
      <div>
        <form className='form-inline"'>
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
          <div className='form-buttons'>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.back}
            >Back</button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >Submit</button>
          </div>
        </form>
      </div >
    );
  }
}

export default SecondStepForm;
