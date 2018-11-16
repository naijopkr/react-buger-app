import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle'
import './Toolbar.css'

const toolbar = props => {
  return (
    <header className='Toolbar'>
      <DrawerToggle onClick={props.toggleSideDrawer} />
      <Logo className='ToolbarLogo' />
      <nav className='DesktopOnly'>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  )
}

export default toolbar