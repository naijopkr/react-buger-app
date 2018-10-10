import React from 'react'

import './CheckoutSummary.css'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const checkoutSummary = props => {
  const { ingredients, onCheckoutContinued, onCheckoutCancelled } = props
  return (
    <div className='CheckoutSummary'>
      <h1>Enjoy it!</h1>
      <div className='CheckoutSummaryBurger'>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType='Danger' onClick={onCheckoutCancelled}>CANCEL</Button>
      <Button btnType='Success' onClick={onCheckoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary