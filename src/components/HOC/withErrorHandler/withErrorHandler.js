import React, { Component } from 'react'
import Modal from '../../UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return (
    class extends Component {
      constructor(props) {
        super(props)
        this.reqInterceptor = axios.interceptors.request.use(req => {
          this.setState({ error: null })
          return req
        })
        this.resInterceptor = axios.interceptors.response.use(res => res, error => {
          this.setState({ error: error })
        })
      }

      state = {
        error: null
      }

      componentWillUnmount = () => {
        axios.interceptors.request.eject(this.reqInterceptor)
        axios.interceptors.response.eject(this.resInterceptor)
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
              {this.state.error ? this.state.error.message : null}
            </Modal>
            <WrappedComponent {...this.props} />
          </>
        )
      }
  })
}

export default withErrorHandler