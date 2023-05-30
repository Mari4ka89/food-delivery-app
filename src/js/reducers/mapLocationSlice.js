import { createSlice } from "@reduxjs/toolkit";
import { CENTER } from "../constants/mapLocations";

const initialState = {
  value: CENTER,
};

export const mapLocationSlice = createSlice({
  name: "mapLocation",
  initialState,
  reducers: {
    updateUserLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateUserLocation } = mapLocationSlice.actions;

export default mapLocationSlice.reducer;
