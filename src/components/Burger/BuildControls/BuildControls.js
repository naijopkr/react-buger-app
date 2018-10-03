import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import IngredientList from '../BurgerIngredient/IngredientList' 
import './BuildControls.css'

const buildControls = props => {
  const ingredientsArray = []
  for (let key in IngredientList) {
    if (key !== 'BREAD_TOP' && key !== 'BREAD_BOTTOM') {
      ingredientsArray.push(
        <BuildControl onAdd={props.onAdd} label={IngredientList[key]} key={key} />
      )
    }
  }

  return <div className='BuildControls'>
    {ingredientsArray}
  </div>
}

export default buildControls