/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ClearCart,
  DecreaseQuantity,
  RemoveFromCart,
  addTocart,
} from "../reduxSlice/ItemSlice";

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
    <main>
      <section className="p-2">
        <h1>Subtotal :- {total}</h1>
        <button
          className="w-full h-12 rounded-lg bg-yellow-500"
          onClick={() => (quantity > 1 ? navigate("/checkout") : null)}
        >
          Proceed to buy ({quantity} item)
        </button>
      </section>
      <hr />
      <section className="p-2">
        {!isempty ? (
          cartItems.map((item) => (
            <article key={item.id} className="flex p-4 gap-8 justify-between">
              <img src={item.image} alt="cart Product" className="w-24" />
              <div className="flex flex-col items">
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
              </div>
              <div className="flex flex-col justify-evenly items-center">
                <button onClick={() => dispatch(addTocart(item))}>up</button>
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
                  down
                </button>
              </div>
            </article>
          ))
        ) : (
          <article className="p-2">
            <h1 className="font-bold text-center">
              You do not have anything in cart
            </h1>
            <button
              className="w-full  h-12 rounded-lg bg-yellow-500"
              onClick={() => navigate("/")}
            >
              Go to Hompage
            </button>
          </article>
        )}
        <button
          className="w-full  h-12 rounded-lg bg-yellow-500"
          onClick={() => dispatch(ClearCart())}
        >
          Clear cart
        </button>
      </section>
    </main>
  );
}

export default Cart;
