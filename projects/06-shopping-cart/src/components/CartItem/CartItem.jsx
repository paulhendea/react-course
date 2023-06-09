import './CartItem.css'

export function CartItem ({ thumbnail, price, title, quantity, addQuantity, subtractQuantity }) {
  return (
    <div className='cart-item'>
      <img src={thumbnail} alt={title} />
      <div className='cart-item-info'>
        <strong className='cart-item-title'>{title}</strong>
        <div className='cart-item-quantity'>
          <button className='cart-item-quantity-minus' onClick={subtractQuantity}>
            -
          </button>
          <div className='cart-item-quantity-value'>
            <span>{quantity}</span>
          </div>
          <button className='cart-item-quantity-plus' onClick={addQuantity}>
            +
          </button>
        </div>
      </div>
      <footer>
        <p>
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(price * quantity)}
        </p>
      </footer>
    </div>
  )
}
