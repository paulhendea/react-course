import { products } from './mocks/products.json'
import { ListOfProducts } from './components/Products/Products'
import { Header } from './components/Header/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer/Footer'
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <main>
          <ListOfProducts products={filteredProducts} />
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
