import React, { Component } from 'react'
import Modal from '../../UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return (
    class extends Component {
      state = {
        error: null
      }
      
      componentDidMount = () => {
        axios.interceptors.request.use(req => {
          this.setState({ error: null })
          return req
        })
        axios.interceptors.response.use(res => res, error => {
          this.setState({ error: error })
        })
      }

      errorConfirmedhandler = () => {
        this.setState({ error: null })
      }

      render() {
        return (
          <>
            <Modal 
             show={this.state.error}
             modalClose={this.errorConfirmedhandler} >
              {this.state.error.message}
            </Modal>
            <WrappedComponent {...this.props} />
          </>
        )
      }
  })
}

export default withErrorHandler