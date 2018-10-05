import React from 'react'

const orderSummary = ({ ingredients }) => {
  const ingredientSummary = []
  for (let key in ingredients) {
    ingredientSummary.push(
      <li key={key}><span>{key}:</span>{ingredients[key]}</li>
    )
  }

  return (
    <>
      <h3>YOUR ORDER</h3>
      <p>A delicious burger! Check out your ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue with checkout?</p>
    </>
  )
}

export default orderSummary