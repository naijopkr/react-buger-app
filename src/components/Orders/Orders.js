import React, { Component } from 'react'
import axios from '../../axios-orders'

import Order from './Order/Order'
import withErrorHandler from '../HOC/withErrorHandler/withErrorHandler'

import './Orders.css'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount = () => {
    axios.get('/orders.json')
    .then(res => {
      const ordersArr = []
      for (let key in res.data) {
        ordersArr.push({
          ...res.data[key],
          id: key
        })
      }
      this.setState({ loading: false, orders: ordersArr })
    })
    .catch(err => {
      this.setState({ loading: false })
    })
  }

  renderOrders = () => {
    return this.state.orders.map(order => {
      return (
        <Order 
          key={order.id} 
          ingredients={order.ingredients}
          price={order.price} 
        />
      )
    })
  }

  render = () => {
    return (
      <div className='Orders'>
        {this.renderOrders()}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)