import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
import { useCart } from '../../hooks/useCart'

export function ListOfProducts ({ products }) {
  const { addToCart, removeFromCart, isProductInCart } = useCart()

  const handleCartButton = (product) => {
    isProductInCart(product)
      ? removeFromCart(product)
      : addToCart(product)
  }

  const getButtonClassName = (product) => {
    return isProductInCart(product)
      ? 'button-red'
      : 'button-blue'
  }

  return (
    <ul className='products'>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div className='product-info'>
            <h3>{product.title}</h3>
            <strong>${product.price}</strong>
            <button className={getButtonClassName(product)} onClick={() => handleCartButton(product)}>
              {isProductInCart(product)
                ? <RemoveFromCartIcon />
                : <AddToCartIcon />}
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
