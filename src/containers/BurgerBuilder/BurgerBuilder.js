import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import IngredientList, { IngredientPrice } from '../../components/Burger/BurgerIngredient/IngredientList'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      [IngredientList.SALAD]: 0,
      [IngredientList.BACON]: 0,
      [IngredientList.CHEESE]: 0,
      [IngredientList.MEAT]: 0
    },
    totalPrice: 400,
    purchasable: false,
    checkout: false
  }

  checkoutHandler = () => {
    this.setState({ checkout: true })
  }

  puchaseCancelHandler = () => {
    this.setState({ checkout: false })
  }

  purchaseContinueHandler = () => {
    const order = {
      ingrendients: this.state.ingredients,
      price: this.state.totalPrice,
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
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
    return (
      <>
        <Modal show={this.state.checkout} 
         modalClose={this.puchaseCancelHandler}>
          <OrderSummary 
           ingredients={this.state.ingredients} 
           purchaseCancel={this.puchaseCancelHandler}
           purchaseContinue={this.purchaseContinueHandler}
           price={this.state.totalPrice}
          />
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

export default BurgerBuilder