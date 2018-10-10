import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../../../axios-orders'

import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Spinner/Spinner'
import { IngredientPrice } from '../../Burger/BurgerIngredient/IngredientList'

import './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  getPrice = () => {
    let price = 400
    const { ingredients } = this.state
    for (let key in ingredients) {
      price += ingredients[key]*IngredientPrice[key]
    }
    return price
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingrendients: this.state.ingredients,
      price: this.getPrice(),
      customer: {
        name: 'John Smith',
        address: {
          street: '1st Avenue',
          zipCode: '121523',
          country: 'Colombia'
        },
        email: 'jsmith@burger.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(res => {
      this.setState({ loading: false })
      this.props.history.push('/')
    })
    .catch(err => {
      this.setState({ loading: false, checkout: false })
      console.log(err)
    })
  }

  render = () => {
    let form = (
      <form>
        <input type='text' name='name' placeholder='Your name' />
        <input type='email' name='email' placeholder='Your e-mail' />
        <input type='text' name='street' placeholder='Street' />
        <input type='text' name='postal' placeholder='Postal code' />
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