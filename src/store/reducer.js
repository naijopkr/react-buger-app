import * as actionType from './actions'
import IngredientList, { IngredientPrice } from './IngredientList'

const initialState = {
  ingredients: {
    [IngredientList.SALAD]: 0,
    [IngredientList.MEAT]: 0,
    [IngredientList.CHEESE]: 0,
    [IngredientList.BACON]: 0
  },
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
    default:
      return state
  }
}

export default reducer