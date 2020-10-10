import * as actions from '../Actions/ActionTypes'

const initialState = {
  cart: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      let products = [...state.cart]
      let quantity = 0
      let alreadyInCart = false
      products.map(product => {
        if (action.id === product.id) {
          alreadyInCart = true
          products = products.filter(item => item.id !== action.id)
          quantity = product.quantity + action.cart.quantity
        }
      })
      if (alreadyInCart) {
        return { ...state, cart: [...products, { ...action.cart, quantity: quantity }] }
      } else {
        return { ...state, cart: [...state.cart, action.cart] }
      }
    case actions.DELETE_CART_ITEM:
      const cart = [...state.cart]
      const updatedCart = cart.filter((_, index) => index !== action.index)
      return { ...state, cart: [...updatedCart] }
    case actions.CLEAR_CART:
      alert('Order on its way!')
      return { ...state, cart: action.cart }
    default:
      state;
      break;
  }
  return state;
};

export default cartReducer;
