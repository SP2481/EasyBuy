/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import add from "../assets/add.svg";
import trash from "../assets/remove.svg";
import ruppee from "../assets/ruppee.svg";
import {
  ClearCart,
  DecreaseQuantity,
  RemoveFromCart,
  addTocart,
} from "../reduxSlice/ItemSlice";
import "../styles/scrollbar.css";

function Cart() {
  const { cartItems, quantity, total } = useSelector((state) => state.items);
  const [isempty, setIsempty] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length <= 0) {
      setIsempty(true);
    } else {
      setIsempty(false);
    }
  }, [cartItems]);

  return (
    <main className="h-max flex flex-col items-center lg:gap-12 bg-[#d1d1d1]  ">
      <h1 className="text-center text-2xl lg:text-4xl font-oswald lg:ml-8 font-semibold mt-4">
        Shopping Cart
      </h1>
      <section className="lg:w-[60rem]  md:border-black lg:flex p-4 ">
        <article className="p-2 flex-grow lg:border-r border-gray-400">
          <h1 className="text-2xl flex items-center gap-2 font-semibold lg:mb-4">
            Subtotal :- <img src={ruppee} alt="rupee" className="h-4" /> {total}
          </h1>
          <button
            className={`w-full sm:w-[20rem] h-12 rounded-lg  ${
              !isempty
                ? "bg-yellow-500 hover:scale-105 active:scale-90"
                : "bg-white shadow-xl "
            }`}
            onClick={() => (quantity >= 1 ? navigate("/checkout") : null)}
          >
            Proceed to buy ({quantity} item)
          </button>
        </article>
        <hr />
        <article className="p-2 flex-grow">
          {/* layout for cart items */}
          {!isempty ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="lg:auto grid grid-cols-3 p-4 gap-8 "
              >
                <img
                  src={item.image}
                  alt="cart Product"
                  className="w-24 h-24 mix-blend-darken"
                />
                <div className="flex flex-col items-start">
                  <h1>{item.title}</h1>
                  <h2>{item.price}</h2>
                </div>
                <div className="flex flex-col justify-evenly items-center">
                  <button onClick={() => dispatch(addTocart(item))}>
                    <img
                      src={add}
                      alt="add"
                      className="hover:scale-105 active:scale-95 duration-150"
                    />
                  </button>
                  <h3>{item.quantity}</h3>
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(DecreaseQuantity(item));
                      } else {
                        dispatch(RemoveFromCart(item.id));
                      }
                    }}
                  >
                    <img
                      src={trash}
                      alt="add"
                      className="hover:scale-105 active:scale-95 duration-150"
                    />
                  </button>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <article className="p-2 flex flex-col items-center">
              {/* if there is nothing cart there is a button which navigate to homepage */}
              <h1 className="font-bold text-center text-lg">
                You do not have anything in cart
              </h1>
              <button
                className="w-[10rem] h-12 rounded-lg bg-yellow-500 hover:scale-105 duration-200"
                onClick={() => navigate("/")}
              >
                Go to Hompage
              </button>
            </article>
          )}
          <div className="flex justify-center">
            <button
              className={`w-[15rem] h-12 rounded-lg ${
                !isempty
                  ? "bg-yellow-500 hover:scale-105  duration-200"
                  : "bg-white shadow-xl "
              } `}
              onClick={() => dispatch(ClearCart())}
            >
              Clear cart
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Cart;
