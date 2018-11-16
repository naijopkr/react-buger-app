import * as actionType from '../actions/actionTypes'
import { IngredientPrice } from '../IngredientList'

const initialState = {
  ingredients: null,
  totalPrice: 400,
  building: false
}

const addIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.payload.ingredient]: state.ingredients[action.payload.ingredient] + 1
    },
    totalPrice: state.totalPrice + IngredientPrice[action.payload.ingredient],
    building: true
  }
}

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.payload.ingredient]: state.ingredients[action.payload.ingredient] - 1
    },
    totalPrice: state.totalPrice - IngredientPrice[action.payload.ingredient],
    building: true
  }
}

const initIngredients = (state, action) => {
  return {
    ...state,
    ingredients: action.payload,
    totalPrice: 400,
    building: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action)
    case actionType.REMOVE_INGREDIENT:
      return removeIngredient(state, action)
    case actionType.INIT_INGREDIENTS:
      return initIngredients(state, action)
    case actionType.INIT_INGREDIENTS_FAILED:
      alert(action.payload)
      break
    default:
      return state
  }
}

export default reducer