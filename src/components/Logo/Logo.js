import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import './Logo.css'

const logo = props => {
  return (
    <div className={`Logo ${props.className}`}>
      <img src={burgerLogo} alt='Burger Builder' />
    </div>
  )
}

export default logo