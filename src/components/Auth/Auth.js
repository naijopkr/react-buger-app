import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'

import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner'

import './Auth.css'

class Auth extends Component {
  state = {
    authForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    }
  }

  onSubmitHandler = isSignUp => {
    this.props.auth(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      isSignUp
    )
  }

  inputChangedHandler = (event, inputId) => {
    const authForm = { ...this.state.authForm }
    const inputProps = { ...authForm[inputId] }
    inputProps.value = event.target.value
    inputProps.valid = this.validate(inputProps.value, inputProps.validation)
    authForm[inputId] = inputProps
    this.setState({ authForm: authForm })
  }

  validate = (value, rules) => {
    let isValid = false
    
    if (rules.required) {
      isValid = value.trim() !== ''
    }

    return isValid
  }

  renderFormElements  = () => {
    const { authForm } = this.state
    let formElementsArray = []
    for (let key in authForm) {
      formElementsArray.push(
        <Input 
          key={key}
          elementType={authForm[key].elementType} 
          elementConfig={authForm[key].elementConfig}
          onChange={event => this.inputChangedHandler(event, key)} />
      )
    }

    return formElementsArray
  }

  render = () => {
    let form = (
      <form onSubmit={evt => evt.preventDefault()}>
        {this.renderFormElements()}
        <Button btnType='Success' onClick={() => this.onSubmitHandler(false)} >
          SIGN IN
        </Button>
        <Button btnType='Danger' onClick={() => this.onSubmitHandler(true)} >
          SIGN UP
        </Button>
      </form>
    )

    if (this.props.loading) {
      form = <Spinner />
    }
    
    return (
      <div className='Auth'>
        <h4>Enter your credentials</h4>
        {form}
      </div>
    )
  }
}

const mapDispatchToProps = {
  auth: actions.auth
}

export default connect(null, mapDispatchToProps)(Auth)