import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import IngredientList from '../../components/Burger/BurgerIngredient/IngredientList'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      [IngredientList.SALAD]: 0,
      [IngredientList.BACON]: 0,
      [IngredientList.CHEESE]: 0,
      [IngredientList.MEAT]: 0
    }
  }

  IngredientsHandler = (ingredientKey, value) => {
    let ingredients = {...this.state.ingredients}
    if (value < 0 && ingredients[ingredientKey] === 0) return
    ingredients[ingredientKey] = ingredients[ingredientKey] + value
    this.setState({ ingredients })
  }

  render = () => (
    <>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls onAdd={this.IngredientsHandler} />
    </>
  )
}

export default BurgerBuilder