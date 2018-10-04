import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import IngredientList from '../BurgerIngredient/IngredientList' 
import './BuildControls.css'

const buildControls = props => {
  const ingredientsArray = []
  for (let key in IngredientList) {
    if (key !== 'BREAD_TOP' && key !== 'BREAD_BOTTOM') {
      const label = IngredientList[key]
      ingredientsArray.push(
        <BuildControl 
         onAdd={props.onAdd} 
         label={label} 
         key={key}
         disabledButton={props.disabledButtons[label]} />
      )
    }
  }

  return <div className='BuildControls'>
    <p>Current price: <strong>${(props.price/100).toFixed(2)}</strong></p>
    {ingredientsArray}
    <button 
     className='OrderButton'
     disabled={!props.purchasable}>ORDER NOW</button>
  </div>
}

export default buildControls