import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = ingredient => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: { ingredient: ingredient }
  }
}

export const removeIngredient = ingredient => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: { ingredient: ingredient }
  }
}

export const initIngredients = () => async dispatch => {
  const res = await axios.get('/ingredients.json')
  if (res && res.status === 200) {
    dispatch({ type: actionTypes.INIT_INGREDIENTS, payload: res.data })
  }
}