import React, { Component } from 'react';
import './Signup.css'
import FirstStepForm from './Step1/FirstStepForm'
import SecondStepForm from './Step2/SecondStepForm'

class Signup extends Component {

  state = {
    step: 1,
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div className='signup'>
            <FirstStepForm nextStep={this.nextStep} />
          </div>
        )
      case 2:
        return (
          <div className='signup' >
            <SecondStepForm prevStep={this.prevStep} />
          </div>
        )
      default:
        break;
    }
  }
};

export default Signup;
