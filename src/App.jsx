import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import { CalculateTotal } from "./reduxSlice/ItemSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(CalculateTotal());
  }, [dispatch, cartItems]);
  return (
    <main>
      <Homepage />
    </main>
  );
}

export default App;
