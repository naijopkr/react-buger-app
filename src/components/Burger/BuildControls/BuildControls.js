import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import IngredientList from '../../../store/IngredientList' 
import './BuildControls.css'

const buildControls = props => {
  const ingredientsArray = []
  for (let key in IngredientList) {
    if (key !== 'BREAD_TOP' && key !== 'BREAD_BOTTOM') {
      const label = IngredientList[key]
      ingredientsArray.push(
        <BuildControl 
         onAdd={props.onAdd} 
         onRemove={props.onRemove}
         label={label} 
         key={key}
         disabledButton={props.disabledButtons[label]} />
      )
    }
  }

  const orderButton = props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'

  return <div className='BuildControls'>
    <p>Current price: <strong>${(props.price/100).toFixed(2)}</strong></p>
    {ingredientsArray}
    <button 
     className='OrderButton'
     onClick={props.onCheckout}
     disabled={!props.purchasable}>{orderButton}</button>
  </div>
}

export default buildControls