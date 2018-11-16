import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const authStart = (state) => {
  return {
    ...state,
    error: null,
    loading: true
  }
}

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.payload.idToken,
    userId: action.payload.localId,
    error: null,
    loading: false
  }
}

const authFail = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false
  }
}

const authLogout = (state) => {
  return {
    ...state,
    token: null,
    userId: null
  }
}

const setAuthRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.payload
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state)
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_FAILED:
      return authFail(state, action)
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state)
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action)
    default:
      return state
  }
}

export default reducer