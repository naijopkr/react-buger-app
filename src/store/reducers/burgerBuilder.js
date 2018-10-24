import * as actionType from '../actions/actionTypes'
import { IngredientPrice } from '../IngredientList'

const initialState = {
  ingredients: null,
  totalPrice: 400
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]: state.ingredients[action.payload.ingredient] + 1
        },
        totalPrice: state.totalPrice + IngredientPrice[action.payload.ingredient]
      }
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]: state.ingredients[action.payload.ingredient] - 1
        },
        totalPrice: state.totalPrice - IngredientPrice[action.payload.ingredient]
      }
    case actionType.INIT_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      }
    default:
      return state
  }
}

export default reducer