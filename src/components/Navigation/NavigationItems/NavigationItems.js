import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const navigationItems = props => {
  const auth = props.isAuth 
    ? <NavigationItem link='/logout'>Logout</NavigationItem>
    : <NavigationItem link='/auth'>Sign in</NavigationItem>

  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/'>Burger Builder</NavigationItem>
      {props.isAuth ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
      {auth}
    </ul>
  )
}

export default navigationItems