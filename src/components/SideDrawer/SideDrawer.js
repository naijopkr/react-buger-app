import React from 'react'
import BackDrop from '../UI/Backdrop/Backdrop'
import Logo from '../Logo/Logo'
import NavigationItems from  '../Navigation/NavigationItems/NavigationItems'
import './SideDrawer.css'


const sideDrawer = props => {

  return (
    <>
      <BackDrop show={props.open} onClick={props.onClose} />
      <div className={`SideDrawer ${props.open ? 'Open' : 'Close'}`}>
        <Logo className='SideDrawerLogo' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default sideDrawer