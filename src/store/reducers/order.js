import * as actionTypes from '../actions/actionTypes'

const initialState = {
  orders: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.payload.orderData,
        id: action.payload.id
      }
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      }
    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false
      }
    case actionTypes.LOADING_ORDERS:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_ORDERS:
      const orders = []
      for (let key in action.payload) {
        orders.push({
          ...action.payload[key],
          id: key
        })
      }
      return {
        ...state,
        orders,
        loading: false 
      }
    default:
      return state
  }
}

export default reducer