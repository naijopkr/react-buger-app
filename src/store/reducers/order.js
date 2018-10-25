import * as actionTypes from '../actions/actionTypes'

const initialState = {
  orders: [],
  loading: false
}

const purchaseBurgerStart = (state, action) => {
  return {
    ...state,
    loading: true
  }
}
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.payload.orderData,
    id: action.payload.id
  }
  return {
    ...state,
    loading: false,
    orders: state.orders.concat(newOrder)
  } 
}
const purchaseBurgerFailed = (state, action) => {
  return {
    ...state,
    loading: false
  }
}
const loadingOrders = (state, action) => {
  return {
    ...state,
    loading: true
  }
}
const fetchOrders = (state, action) => {
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action)
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action)
    case actionTypes.PURCHASE_BURGER_FAILED:
      return purchaseBurgerFailed(state, action)
    case actionTypes.LOADING_ORDERS:
      return loadingOrders(state, action)
    case actionTypes.FETCH_ORDERS:
      return fetchOrders(state, action)
    default:
      return state
  }
}

export default reducer