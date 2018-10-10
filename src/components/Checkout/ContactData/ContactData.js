import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../../../axios-orders'

import Button from '../../UI/Button/Button'

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

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingrendients: this.state.ingredients,
      price: 400,
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
    return (
      <div className='ContactData'>
        <h4>Enter your contact data</h4>
        <form>
          <input type='text' name='name' placeholder='Your name' />
          <input type='email' name='email' placeholder='Your e-mail' />
          <input type='text' name='street' placeholder='Street' />
          <input type='text' name='postal' placeholder='Postal code' />
          <Button btnType='Success' onClick={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(ContactData)