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
  try {
    const res = await axios.get('/ingredients.json')
    dispatch({ type: actionTypes.INIT_INGREDIENTS, payload: res.data })
  } catch(err) {
    dispatch({ type: actionTypes.INIT_INGREDIENTS_FAILED, payload: err })
  }
}