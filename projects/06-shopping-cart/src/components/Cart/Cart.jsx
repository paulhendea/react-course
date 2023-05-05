import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
import './Cart.css'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../CartItem/CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
            {cart.map((item) => (
                <li key={item.id}>
                  <CartItem
                    thumbnail={item.thumbnail}
                    price={item.price}
                    title={item.title}
                    quantity={item.quantity}
                    addQuantity={() => addToCart(item)}
                  />
                </li>
            ))
            }
        </ul>

        <button onClick={clearCart}>
            <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
