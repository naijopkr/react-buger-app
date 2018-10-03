import React from 'react'
import IngredientList from './IngredientList'
import './BurgerIngredient.css'

const burgerIngredient = props => {

  if (props.type === IngredientList.BREAD_TOP) {
    return (
      <div className={IngredientList.BREAD_TOP}>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
    )
  } else  {
    return <div className={props.type}></div>
  }

}

export default burgerIngredient