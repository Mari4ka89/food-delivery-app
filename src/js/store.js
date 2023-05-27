import { configureStore } from "@reduxjs/toolkit";
import selectedVendorReducer from "./reducers/selectedVendorReducer";
import cartReducer from "./reducers/cartReducer";
import mapLocationReducer from "./reducers/mapLocationReducer";

export const store = configureStore({
  reducer: {
    selectedVendor: selectedVendorReducer,
    cart: cartReducer,
    mapLocation: mapLocationReducer,
  },
});
