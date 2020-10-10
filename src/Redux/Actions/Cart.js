import * as actions from './ActionTypes'

export const addToCart = (cart, id) => {
  return {
    type: actions.ADD_TO_CART,
    cart: cart,
    id: id
  }
}
export const deleteCartItem = (index) => {
  return {
    type: actions.DELETE_CART_ITEM,
    index: index
  }
}
export const clearCart = () => {
  return {
    type: actions.CLEAR_CART,
    cart: []
  }
}
