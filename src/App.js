
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/detail/:productId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
