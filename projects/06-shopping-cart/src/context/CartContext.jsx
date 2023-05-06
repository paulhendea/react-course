import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const {
    cart,
    addToCart,
    removeFromCart,
    addOneProduct,
    subtractOneProduct,
    clearCart,
    isProductInCart
  } = useCartReducer()

  const contextInitialValue = {
    cart,
    addToCart,
    removeFromCart,
    addOneProduct,
    subtractOneProduct,
    clearCart,
    isProductInCart,
  }
  return (
    <CartContext.Provider value={contextInitialValue}>
      {children}
    </CartContext.Provider>
  )
}
