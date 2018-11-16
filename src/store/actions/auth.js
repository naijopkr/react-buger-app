import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
  return (
    { type: actionTypes.AUTH_START }
  )
}

export const logout = () => dispatch => {
  dispatch({ type: actionTypes.AUTH_LOGOUT })
}

export const checkAuthTimeout = (expirationTime) => dispatch => {
  setTimeout(() => {
    dispatch({ type: actionTypes.AUTH_LOGOUT })
  }, expirationTime * 1000)
}

export const auth = (email, password, isSignUp) => async dispatch => {
  dispatch(authStart())
  const authData = {
    email,
    password,
    returnSecureToken: true
  }
  
  let authMethod = isSignUp ? 'signupNewUser' : 'verifyPassword'

  let authAPI = 'https://www.googleapis.com/' + 
    `identitytoolkit/v3/relyingparty/${authMethod}` +
    '?key=' + process.env.REACT_APP_FIREBASE_API_KEY

  try {
    const res = await axios.post(authAPI, authData)
    dispatch({ type: actionTypes.AUTH_SUCCESS, payload: res.data })
    dispatch(checkAuthTimeout(res.data.expiresIn))
  } catch (err) {
    console.log(err)
    if (err.response) {
      const { error } = err.response.data
      dispatch({ type: actionTypes.AUTH_FAILED, payload: error })
    }
  }

}