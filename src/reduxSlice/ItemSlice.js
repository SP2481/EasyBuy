/* eslint-disable no-unused-vars */
// Used redux for cart management functions such as add to cart, remove from cart, calculate total
import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cartItems");
const initialState = {
  cartItems: storedItems ? JSON.parse(storedItems) : [],
  total: 0,
  quantity: 0,
};
console.log(initialState);

const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    addTocart: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item.id == payload.id,
      );
      if (!existingItem) {
        const updatedList = [...state.cartItems, { ...payload, quantity: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(updatedList));
        state.cartItems = updatedList;
      } else {
        existingItem.quantity += 1;
        const updatedList = state.cartItems.map((item) =>
          item.id === existingItem.id ? existingItem : item,
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedList));
        console.log(localStorage.getItem("cartItem"));
        state.cartItems = updatedList;
      }
      console.log("added to cart and localStorage");
    },

    RemoveFromCart: (state, { payload }) => {
      console.log("removing");
      const updatedList = state.cartItems.filter((item) => item.id !== payload);
      localStorage.setItem("cartItems", JSON.stringify(updatedList));
      state.cartItems = updatedList;
    },

    DecreaseQuantity: (state, { payload }) => {
      console.log("decreasing quantity");
      const itemTorreduce = state.cartItems.find(
        (item) => item.id === payload.id,
      );
      itemTorreduce.quantity -= 1;
    },

    ClearCart: (state) => {
      console.log("clear cart");
      localStorage.removeItem("cartItems");
      state.cartItems = [];
    },

    CalculateTotal: (state) => {
      let total = 0;
      let qn = 0;
      state.cartItems.forEach((item) => {
        qn += item.quantity;
        total += item.price * qn;
      });
      state.total = total.toFixed(2);
      state.quantity = qn;
    },
  },
});

export const {
  addTocart,
  DecreaseQuantity,
  RemoveFromCart,
  ClearCart,
  CalculateTotal,
} = itemsSlice.actions;
export default itemsSlice.reducer;
