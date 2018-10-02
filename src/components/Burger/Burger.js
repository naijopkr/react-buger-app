import React from 'react'
import './burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import ingredientType from './BurgerIngredient/IngredientType'

const burger = props => {
  return (
    <div className='burger'>
      <BurgerIngredient type={ingredientType.BREAD_TOP} />
      <BurgerIngredient type={ingredientType.CHEESE} />
      <BurgerIngredient type={ingredientType.MEAT} />
      <BurgerIngredient type={ingredientType.BREAD_BOTTOM} />
    </div>
  )
}

export default burger