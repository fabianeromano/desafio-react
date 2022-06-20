
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Category from "./views/Category/Category";
import Item from "./views/Item/Item";
import CartProvider from "./context/CartContext";
import Order from "./views/Order/Order";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category" element={<Category />} />
            <Route exact path="/category/:categoryId" element={<Category />} />
            <Route exact path="/item/:id" element={<Item />} />
            <Route exact path="/order/:id" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}
export default App;
