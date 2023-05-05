import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    console.log('addToCart', product)
    setCart((previousCart) => [
      ...previousCart,
      {
        ...product,
        quantity: product.quantity + 1 || 1
      },
    ])
  }
  const removeFromCart = (product) => {
    setCart((previous) => previous.filter((item) => item.id !== product.id))
  }
  const clearCart = () => {
    setCart([])
  }
  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  const contextInitialValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isProductInCart,
  }
  return (
    <CartContext.Provider value={contextInitialValue}>
      {children}
    </CartContext.Provider>
  )
}
