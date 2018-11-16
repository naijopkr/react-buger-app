import React, { Component } from 'react'
import axios from '../../axios-orders'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'

import Order from './Order/Order'
import Spinner from '../UI/Spinner/Spinner'
import withErrorHandler from '../HOC/withErrorHandler/withErrorHandler'

import './Orders.css'

class Orders extends Component {

  componentDidMount = () => {
    this.props.fetchOrders(this.props.token)
  }

  renderOrders = () => {
    return this.props.orders.map(order => {
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
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = (
        <div className='Orders'>
          {this.renderOrders()}
        </div>
      )
    }
    return orders
  }
}

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: token => dispatch(actions.fetchOrders(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))