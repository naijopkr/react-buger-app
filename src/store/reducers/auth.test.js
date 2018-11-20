import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })

  it('should return the token and userId', () => {
    const state = {
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }

    const action = {
      type: actionTypes.AUTH_SUCCESS,
      payload: {
        idToken: 'some-token',
        localId: 'some user ID'
      }
    }
    expect(reducer(state, action)).toEqual({
      token: 'some-token',
      userId: 'some user ID',
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })
})