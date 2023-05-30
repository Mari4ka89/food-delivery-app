import { configureStore } from "@reduxjs/toolkit";
import selectedVendorReducer from "./reducers/selectedVendorReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    selectedVendor: selectedVendorReducer,
    cart: cartReducer,
  },
});
