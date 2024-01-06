/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../api/allProducts";
import ruppee from "../assets/ruppee.svg";
import { RemoveFromCart, addTocart } from "../reduxSlice/ItemSlice";

function Products() {
  const { cartItems } = useSelector((state) => state.items);
  const [limit, setlimit] = useState(8);
  const products = useQuery({
    queryKey: ["products", limit],
    queryFn: () => getProducts(limit),
  });

  const dispatch = useDispatch();

  return (
    <main className="h-max w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 gap-y-3 p-2">
        {products.data &&
          products.data.map((product) => (
            <article
              key={product.id}
              className="w-full h-full flex flex-col  items-center md:gap-2 p-4 border-2 border-gray-400 rounded-md lg:text-center text-pretty"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-[10rem] max-h-[10rem] lg:h-[20rem] object-contain sm:self-center mix-blend-darken "
              />

              <h1 className="font-medium mt-2 ">
                {product.title.slice(0, 30)}...
              </h1>
              <h2 className="font-bold flex items-center gap-0.5 md:justify-center">
                <img src={ruppee} alt="ruppee sign" />
                {product.price.toLocaleString()}
              </h2>
              {cartItems.find((item) => item.id == product.id) ? (
                <button
                  className="w-full h-12 bg-white rounded-lg border-gray-300 border-2 active:scale-95 duration-200 font-semibold shadow-lg "
                  onClick={() => dispatch(RemoveFromCart(product.id))}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="w-full h-12 bg-yellow-400 rounded-lg font-semibold active:scale-95 duration-500"
                  onClick={() => dispatch(addTocart(product))}
                >
                  Add to Cart
                </button>
              )}
            </article>
          ))}
      </section>
    </main>
  );
}

export default Products;
