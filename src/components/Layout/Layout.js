import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import './Layout.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  
  toggleSideDrawerHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }))
  }
  
  render() {
    return (
      <>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer 
         open={this.state.showSideDrawer}
         onClose={this.closeSideDrawerHandler} />
        <main className='Content'>{this.props.children}</main>
      </>
    )
  }
}

export default Layout