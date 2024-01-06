import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import getProducts from "../api/allProducts";
import ruppee from "../assets/ruppee.svg";
import { addTocart } from "../reduxSlice/ItemSlice";

function Products() {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  const dispatch = useDispatch();
  return (
    <main className="h-max w-full">
      <section className="grid grid-cols-1 mdcols:grid--2 lg:grid-cols-3 gap-1 p-2">
        {products.data &&
          products.data.map((product) => (
            <article
              key={product.id}
              className="w-full h-full sm:flex md:flex-col md:gap-2 p-4 border-2 border-gray-400 rounded-md lg:text-center text-pretty"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[20rem] max-h-[16rem] lg:h-[20rem] object-contain md:self-center"
              />

              <h1 className="font-medium mt-2">{product.title}</h1>
              <h2 className="font-bold flex items-center gap-0.5 md:justify-center">
                <img src={ruppee} alt="ruppee sign" />
                {product.price.toLocaleString()}
              </h2>
              <button
                className="w-full h-12 bg-yellow-400 rounded-lg font-semibold active:scale-95 duration-200"
                onClick={() => dispatch(addTocart(product))}
              >
                Add to Cart
              </button>
            </article>
          ))}
      </section>
    </main>
  );
}

export default Products;
