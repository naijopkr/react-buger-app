import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = props => {
  const { 
    ingredients, 
    purchaseCancel, 
    purchaseContinue,
    price 
  } = props

  const ingredientSummary = []
  for (let key in ingredients) {
    ingredientSummary.push(
      <li key={key}><span>{key}:</span> {ingredients[key]}</li>
    )
  }

  return (
    <>
      <h3>YOUR ORDER</h3>
      <p>A delicious burger! Check out your ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total price: ${(price/100).toFixed(2)}</strong></p>
      <p>Continue with checkout?</p>
      <Button 
       onClick={purchaseCancel}
       btnType='Danger'>
        CANCEL
       </Button>
      <Button
       onClick={purchaseContinue}
       btnType='Success'
      >
        CONTINUE
      </Button>
    </>
  )
}

export default orderSummary