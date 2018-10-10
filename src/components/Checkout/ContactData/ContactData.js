import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../../../axios-orders'

import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Spinner/Spinner'
import Input from '../../UI/Input/Input'
import { IngredientPrice } from '../../Burger/BurgerIngredient/IngredientList'

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

  getPrice = () => {
    let price = 400
    const { ingredients } = this.props
    for (let key in ingredients) {
      price += ingredients[key]*IngredientPrice[key]
    }
    return price
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
      price: this.getPrice(),
      orderData: formData
    }
    axios.post('/orders.json', order)
    .then(res => {
      this.setState({ loading: false })
      this.props.history.push('/')
    })
    .catch(err => {
      this.setState({ loading: false })
      console.log(err)
    })
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
    if (this.state.loading) {
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

export default withRouter(ContactData)