import { configureStore } from "@reduxjs/toolkit";
import selectedVendorReducer from "./reducers/selectedVendorReducer";

export const store = configureStore({
  reducer: {
    selectedVendorId: selectedVendorReducer,
  },
});
