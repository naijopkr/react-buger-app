import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurger = (orderData, history) => async dispatch => {
  dispatch(purchaseBurgerStart())
  try {
    const res = await axios.post('/orders.json', orderData)
    dispatch({ 
      type: actionTypes.PURCHASE_BURGER_SUCCESS, 
      payload: { id: res.data.name, orderData } 
    })
  } catch (err) {
    dispatch({ type: actionTypes.PURCHASE_BURGER_FAILED, payload: err })
  } finally {
    history.push('/')
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const fetchOrders = () => async dispatch => {
  dispatch({ type: actionTypes.LOADING_ORDERS })
  try {
    const res = await axios.get('/orders.json')
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: res.data })
  } catch (err) {
    alert(err)
  }
}