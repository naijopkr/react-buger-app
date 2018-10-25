import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Spinner/Spinner'
import Input from '../../UI/Input/Input'

import * as actions from '../../../store/actions'

import './ContactData.css'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
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
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        validation: {
          required: true
        },
        valid: false
      }
    },
    loading: false
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const { orderForm } = this.state
    const formData = {}
    for (let formElement in orderForm) {
      formData[formElement] = orderForm[formElement].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    }
    this.props.purchaseBurger(order, this.props.history)
  }

  validate = (value, rules) => {
    let isValid = false
    
    if (rules.required) {
      isValid = value.trim() !== ''
    }

    return isValid
  }

  inputChangedHandler = (event, inputId) => {
    const orderForm = { ...this.state.orderForm }
    const inputProps = { ...orderForm[inputId] }
    inputProps.value = event.target.value
    inputProps.valid = this.validate(inputProps.value, inputProps.validation)
    orderForm[inputId] = inputProps
    this.setState({ orderForm: orderForm })
  }
    

  renderFormElements = () => {
    const { orderForm } = this.state
    let formElementsArr = []
    for (let key in orderForm) {
      formElementsArr.push(
        <Input 
          key={key}
          elementType={orderForm[key].elementType} 
          elementConfig={orderForm[key].elementConfig}
          onChange={event => this.inputChangedHandler(event, key)} />
      )
    }
    return formElementsArr
  }

  render = () => {
    let form = (
      <form>
        {this.renderFormElements()}
        <Button btnType='Success' onClick={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.props.loading) {
      form = <Spinner />
    }

    return (
      <div className='ContactData'>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  ingredients: state.burgerBuilder.ingredients,
  totalPrice: state.burgerBuilder.totalPrice,
  loading: state.order.loading 
})

const mapDispatchToProps = dispatch => ({
  purchaseBurger: (orderData, history) => dispatch(actions.purchaseBurger(orderData, history))
})

ContactData = withRouter(ContactData)

export default connect(mapStateToProps, mapDispatchToProps)(ContactData)