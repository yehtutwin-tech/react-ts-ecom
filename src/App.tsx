import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import Favorite from "./pages/favorite/Favorite"
import Navbar from "./components/Navbar"
import { CartContextProvider } from "./context/CartContext"
import ProductDetail from "./pages/product/ProductDetail"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <div className="container mt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
