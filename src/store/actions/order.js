import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurger = (orderData, history, token) => async dispatch => {
  dispatch(purchaseBurgerStart())
  try {
    const res = await axios.post('/orders.json?auth=' + token, orderData)
    dispatch({ 
      type: actionTypes.PURCHASE_BURGER_SUCCESS, 
      payload: { id: res.data.name, orderData } 
    })
    history.push('/')
  } catch (err) {
    console.log(err)
    dispatch({ type: actionTypes.PURCHASE_BURGER_FAILED, payload: err })
    history.push('/auth')
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const fetchOrders = (token, userId) => async dispatch => {
  dispatch({ type: actionTypes.LOADING_ORDERS })
  try {
    const res = await axios.get('/orders.json', {
      params: {
        auth: token,
        orderBy: '"userId"',
        equalTo: '"' + userId + '"'
      }
    })
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: res.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: actionTypes.FETCH_ORDERS })
  }
}