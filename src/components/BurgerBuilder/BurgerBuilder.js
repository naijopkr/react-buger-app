import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import { IngredientPrice } from '../../components/Burger/BurgerIngredient/IngredientList'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../HOC/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 400,
    purchasable: false,
    checkout: false,
    loading: false
  }

  componentDidMount = async () => {
    const res = await axios.get('/ingredients.json')
    if (res && res.status === 200) {
      this.setState({ ingredients: res.data })
    } 
  }

  checkoutHandler = () => {
    this.setState({ checkout: true })
  }

  puchaseCancelHandler = () => {
    this.setState({ checkout: false })
  }

  purchaseContinueHandler = () => {
    let queryParams = []
    for (let key in this.state.ingredients) {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(this.state.ingredients[key])}`
      )
    }
    queryParams = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryParams}`
    })
  }

  updatePurchaseState = ingredients => {
    let sum = 0
    for (let key in ingredients) {
      sum += ingredients[key]
    }
    this.setState({ purchasable: sum > 0 })
  }

  ingredientsHandler = (ingredientKey, value) => {
    let ingredients = {...this.state.ingredients}

    if (value < 0 && ingredients[ingredientKey] === 0) 
      return

    ingredients[ingredientKey] += value
    let totalPrice = this.state.totalPrice + IngredientPrice[ingredientKey]*value
    this.setState({ ingredients, totalPrice })
    this.updatePurchaseState(ingredients)
  }

  render = () => {
    const disabledButtons = {...this.state.ingredients}
    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0
    }

    let orderSummary = 
      <OrderSummary 
        ingredients={this.state.ingredients} 
        purchaseCancel={this.puchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <>
        <Modal show={this.state.checkout} 
         modalClose={this.puchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
         onCheckout={this.checkoutHandler}
         onAdd={this.ingredientsHandler} 
         disabledButtons={disabledButtons}
         purchasable={this.state.purchasable}
         price={this.state.totalPrice} />
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)