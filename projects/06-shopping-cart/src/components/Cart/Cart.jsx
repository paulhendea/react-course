import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons/Icons'
import './Cart.css'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../CartItem/CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addOneProduct, subtractOneProduct, clearCart } = useCart()

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
                    addQuantity={() => addOneProduct(item)}
                    subtractQuantity={() => subtractOneProduct(item)}
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
