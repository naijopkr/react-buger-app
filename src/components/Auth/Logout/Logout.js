import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions'

class Logout extends Component {
  componentDidMount = () => {
    this.props.logout()
  }

  render = () => <Redirect to='/' />
}

const mapDispatchToProps = {
  logout: actions.logout
}

export default connect(null, mapDispatchToProps)(Logout)