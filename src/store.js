import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reduxSlice/ItemSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
