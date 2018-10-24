import React, { Component } from 'react'
import { connect } from 'react-redux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import { IngredientPrice } from '../../store/IngredientList'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions'

class BurgerBuilder extends Component {
  state = {
    totalPrice: 400,
    checkout: false,
    loading: false
  }

  componentDidMount = () => {
    this.props.initIngredients();
  }

  checkoutHandler = () => {
    this.setState({ checkout: true })
  }

  puchaseCancelHandler = () => {
    this.setState({ checkout: false })
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  getPurchasable = () => {
    let sum = 0
    for (let key in this.props.ingredients) {
      sum += this.props.ingredients[key]
    }
    return sum > 0
  }

  addIngredientHandler = (ingredient) => {
    this.props.addIngredient(ingredient)
    let totalPrice = this.props.totalPrice + IngredientPrice[ingredient]
    this.setState({ totalPrice })
  }

  removeIngredientHandler = (ingredient) => {

    if (this.props.ingredients[ingredient] === 0) 
      return

    this.props.removeIngredient(ingredient)
    let totalPrice = this.props.totalPrice - IngredientPrice[ingredient]
    this.setState({ totalPrice })
  }

  render = () => {
    const disabledButtons = {...this.props.ingredients}
    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0
    }

    let orderSummary = 
      <OrderSummary 
        ingredients={this.props.ingredients} 
        purchaseCancel={this.puchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        price={this.props.totalPrice}
      />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      this.props.ingredients
      ? <>
        <Modal show={this.state.checkout} 
         modalClose={this.puchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls 
         onCheckout={this.checkoutHandler}
         onAdd={this.addIngredientHandler}
         onRemove={this.removeIngredientHandler} 
         disabledButtons={disabledButtons}
         purchasable={this.getPurchasable()}
         price={this.props.totalPrice} />
      </>
      : null
    )
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice
})

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredient => dispatch(actions.addIngredient(ingredient)),
  removeIngredient: ingredient => dispatch(actions.removeIngredient(ingredient)),
  initIngredients: () => dispatch(actions.initIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)