import { Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Products from "./Products";

function Homepage() {
  return (
    <main className="h-screen w-full">
      <section>
        <nav className="flex justify-between items-center">
          <h1 className="ml-3">Shoplift</h1>
          <ul className="w-auto h-12 flex justify-between gap-8 mr-6 items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Products</li>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
        </nav>
      </section>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  );
}

export default Homepage;
