/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../api/allProducts";
import ruppee from "../assets/ruppee.svg";
import Loading from "../components/Loading";
import { RemoveFromCart, addTocart } from "../reduxSlice/ItemSlice";

function Products() {
  const { cartItems } = useSelector((state) => state.items);
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  const dispatch = useDispatch();
  if (products.isLoading) {
    return <Loading />;
  }

  return (
    <main className="h-max w-full bg-[#d1d1d1]">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 gap-y-3 p-2 ">
        {products.data &&
          products.data.map((product) => (
            <article
              key={product.id}
              className="w-full h-full flex flex-col items-center gap-2 md:gap-2 p-4  rounded-md bg-[#dedede] lg:text-center text-pretty"
            >
              <LazyLoadImage
                key={product.title}
                src={product.image}
                placeholderSrc={product.image}
                effect="opacity"
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
                  className="w-full h-12 bg-white rounded-lg border-gray-300 border-2 active:scale-95 duration-100 font-semibold shadow-lg "
                  onClick={() => dispatch(RemoveFromCart(product.id))}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="w-[8rem] h-12 bg-yellow-400 rounded-lg font-semibold hover:scale-105 active:scale-95 duration-100"
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
