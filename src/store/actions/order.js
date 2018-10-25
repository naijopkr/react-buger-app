import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurger = (orderData, history) => async dispatch => {
  dispatch(purchaseBurgerStart())
  try {
    const res = axios.post('/orders.json', orderData)
    history.push('/')
    dispatch({ type: actionTypes.PURCHASE_BURGER_SUCCESS, payload: res.data })
  } catch (err) {
    dispatch({ type: actionTypes.PURCHASE_BURGER_FAILED, payload: err })
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}