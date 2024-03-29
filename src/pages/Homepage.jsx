import { Link, Route, Routes, useNavigate } from "react-router-dom";
import home from "../assets/Home.svg";
import cart from "../assets/cart.svg";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Products from "./Products";

function Homepage() {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full">
      <section>
        <nav className="h-[9rem] bg-[#e7e7e7] flex flex-col md:flex-row md:justify-between md:items-center font-oswald font-medium">
          <h1
            className="ml-3 flex items-center justify-center text-4xl mr-10 select-none cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="h-16 w-28 " />
            EasyBuy
          </h1>
          <ul className="md:w-40 h-16 w-auto flex justify-evenly gap-6 md:mr-6 mt-3 text-xl items-center">
            <Link to="/">
              <li className="hover:scale-110 duration-200">
                {" "}
                <img src={home} alt="home" /> Home
              </li>
            </Link>
            <Link to="/cart">
              <li className="hover:scale-110 duration-200">
                {" "}
                <img src={cart} alt="cart" /> Cart
              </li>
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
