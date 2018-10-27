import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
  return (
    { type: actionTypes.AUTH_START }
  )
}

export const auth = (email, password, isSignUp) => async dispatch => {
  dispatch(authStart())
  const authData = {
    email,
    password,
    returnSecureToken: true
  }
  console.log(isSignUp)
  let authMethod = isSignUp ? 'signupNewUser' : 'verifyPassword'

  let authAPI = 'https://www.googleapis.com/' + 
    `identitytoolkit/v3/relyingparty/${authMethod}` +
    '?key='

  try {
    const res = await axios.post(authAPI, authData)
    console.log(res)
    dispatch({ type: actionTypes.AUTH_SUCCESS, payload: res.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: actionTypes.AUTH_FAILED, payload: err })
  }

}