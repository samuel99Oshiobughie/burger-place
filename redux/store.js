import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";

export default configureStore({
    reducer: {
      cart: cartReducer,
      ui: uiReducer,
    },
  });
