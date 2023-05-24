import { configureStore } from "@reduxjs/toolkit";
import vendorsReducer from "./reducers/vendorsReducer";

export const store = configureStore({
  reducer: {
    vendors: vendorsReducer,
  },
});
