import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Products from "./Products";

function Homepage() {
  return (
    <main className="h-screen w-full ">
      <section>
        <nav className="flex flex-col md:flex-row md:justify-between md:items-center font-serif font-black">
          <h1 className="ml-3 flex items-center justify-center text-4xl  ">
            <img src={logo} alt="logo" className="h-16 w-28" />
            EasyBuy
          </h1>
          <ul className="w-auto h-12 flex justify-around gap-8 mr-6 items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
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
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </main>
  );
}

export default Homepage;
