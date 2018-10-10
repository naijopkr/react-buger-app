import React from 'react'

import './Order.css'

const order = props => {
  const { price, ingredients } = props
  let ingredientList = []
  for (let key in ingredients) {
    ingredientList.push(
      <li key={key}>{`${key}: ${ingredients[key]}`}</li>
    )
  }
  return (
    <div className='Order'>
      <p>Ingredients:</p>
      <ul>{ingredientList}</ul>
      <p>Price: <strong>{`$${(price/100).toFixed(2)}`}</strong></p>
    </div>
  )
}

export default order