import { useReducer } from 'react'
import { cartReducer, CART_TYPES } from '../reducers/cartRecuder'

export function useCartReducer () {
  const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({
      type: CART_TYPES.ADD_TO_CART,
      payload: product,
    })
  const removeFromCart = (product) =>
    dispatch({
      type: CART_TYPES.REMOVE_FROM_CART,
      payload: product,
    })
  const addOneProduct = (product) =>
    dispatch({
      type: CART_TYPES.ADD_ONE_PRODUCT,
      payload: product,
    })
  const subtractOneProduct = (product) =>
    dispatch({
      type: CART_TYPES.SUBTRACT_ONE_PRODUCT,
      payload: product,
    })
  const clearCart = () =>
    dispatch({
      type: CART_TYPES.CLEAR_CART,
    })

  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    addOneProduct,
    subtractOneProduct,
    clearCart,
    isProductInCart,
  }
}
