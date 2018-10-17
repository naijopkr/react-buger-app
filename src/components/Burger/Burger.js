import React from 'react'

import './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import IngredientList from '../../store/IngredientList'

const burger = props => {
  const { ingredients } = props
  let ingredientsArray = []

  for (let key in ingredients) {
    for (let i = 0; i < ingredients[key]; i++) {
      ingredientsArray.push(
        <BurgerIngredient type={key} key={key + i} />
      )
    }
  }

  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please start adding ingredients!</p>
  }

  return (
    <div className='Burger'>
      <BurgerIngredient type={IngredientList.BREAD_TOP} />
      {ingredientsArray}
      <BurgerIngredient type={IngredientList.BREAD_BOTTOM} />
    </div>
  )
}

export default burger