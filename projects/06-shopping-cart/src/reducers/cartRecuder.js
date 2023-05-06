export const CART_TYPES = Object.freeze({
  ADD_TO_CART: Symbol('Add to cart recuder type'),
  REMOVE_FROM_CART: Symbol('Remove from cart reducer type'),
  ADD_ONE_PRODUCT: Symbol('Add one product reducer type'),
  SUBTRACT_ONE_PRODUCT: Symbol('Subtract one product reducer type'),
  CLEAR_CART: Symbol('Clear the cart reducer type')
})

function updateLocalStorage (state) {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case CART_TYPES.ADD_TO_CART: {
      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1
        },
      ]
      updateLocalStorage(newState)
      return newState
    }

    case CART_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== payload.id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_TYPES.ADD_ONE_PRODUCT: {
      const newState = structuredClone(state)
      const product = newState.find((item) => item.id === payload.id)
      product.quantity = product.quantity + 1 ?? 1
      updateLocalStorage(newState)
      return newState
    }

    case CART_TYPES.SUBTRACT_ONE_PRODUCT: {
      let newState = structuredClone(state)
      const product = newState.find((item) => item.id === payload.id)
      product.quantity = product.quantity - 1 ?? 1
      if (product.quantity === 0) newState = newState.filter((item) => item.id !== product.id)

      updateLocalStorage(newState)
      return newState
    }

    case CART_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
