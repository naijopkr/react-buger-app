import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  state = {
    ingredients: null
  }

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1]
    }
    this.setState({ ingredients: ingredients })
  }

  onCheckoutContinued = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  onCheckoutCancelled = () => {
    this.props.history.goBack()
  }

  render = () => {
    return (
      <div>
        <CheckoutSummary 
         ingredients={this.state.ingredients}
         onCheckoutContinued={this.onCheckoutContinued}
         onCheckoutCancelled={this.onCheckoutCancelled} 
        />
        <Route 
         path={this.props.match.path + '/contact-data'} 
         render={() => <ContactData ingredients={this.state.ingredients} />} 
        />
      </div>
    )
  }
}

export default Checkout