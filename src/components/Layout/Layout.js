import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} isAuth={this.props.isAuthenticated} />
        <SideDrawer 
         open={this.state.showSideDrawer}
         onClose={this.closeSideDrawerHandler}
         isAuth={this.props.isAuthenticated} />
        <main className='Content'>{this.props.children}</main>
      </>
    )
  }
}

const mapStateToProps = state => ({ isAuthenticated: state.auth.token != null })

export default connect(mapStateToProps)(Layout)