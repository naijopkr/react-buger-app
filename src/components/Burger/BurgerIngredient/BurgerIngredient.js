import React from 'react'
import ingredientType from './IngredientType'
import './BurgerIngredient.css'

const burgerIngredient = props => {

  if (props.type === ingredientType.BREAD_TOP) {
    return (
      <div className={ingredientType.BREAD_TOP}>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
    )
  } else  {
    return <div className={props.type}></div>
  }

}

export default burgerIngredient