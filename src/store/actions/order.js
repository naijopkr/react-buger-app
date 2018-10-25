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