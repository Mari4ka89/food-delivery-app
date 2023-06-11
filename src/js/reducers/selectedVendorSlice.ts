import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectedVendorSlice = createSlice({
  name: "selectedVendor",
  initialState: null,
  reducers: {
    vendorSelected(_state, action: PayloadAction<string>) {
      return action.payload;
    },
    vendorReset() {
      return null;
    },
  },
});

export const { vendorSelected, vendorReset } = selectedVendorSlice.actions;
export const selectedVendor = (state: RootState) => state.selectedVendor;
export default selectedVendorSlice.reducer;
