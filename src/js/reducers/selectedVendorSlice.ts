import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectedVendorSlice = createSlice({
  name: "selectedVendor",
  initialState: "",
  reducers: {
    vendorSelected(_state, action: PayloadAction<string>) {
      return action.payload;
    },
    vendorReset() {
      return "";
    },
  },
});

export const { vendorSelected, vendorReset } = selectedVendorSlice.actions;
export const selectedVendor = (state: RootState) => state.selectedVendor;
export default selectedVendorSlice.reducer;
