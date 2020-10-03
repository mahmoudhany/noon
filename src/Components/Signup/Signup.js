import React, { Component } from 'react';
// import './Signup.css'
import FirstStepForm from './Step1/FirstStepForm'
import SecondStepForm from './Step2/SecondStepForm'
class Signup extends Component {

  state = {
    step: 1,
    user: null
  }
  componentWillUnmount() {
    this.setState({
      step: 1,
      user: null
    })
  }
  nextStep = (user) => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      user: user
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
  rederSteps = () => {
    switch (this.state.step) {
      case 1:
        return (
          <FirstStepForm nextStep={this.nextStep} />
        )
      case 2:
        return (
          <SecondStepForm prevStep={this.prevStep} userObj={this.state.user} />
        )
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        {this.rederSteps()}
      </div>
    )
  }
};

export default Signup;
