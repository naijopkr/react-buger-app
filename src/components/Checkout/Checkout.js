import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

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
         ingredients={this.props.ingredients}
         onCheckoutContinued={this.onCheckoutContinued}
         onCheckoutCancelled={this.onCheckoutCancelled} 
        />
        <Route 
         path={this.props.match.path + '/contact-data'} 
         component={ContactData}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export default connect(mapStateToProps)(Checkout)