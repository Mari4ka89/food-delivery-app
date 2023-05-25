import { SELECT_VENDOR } from "../constants/actionTypes";

export default function slectedVendorReducer(state = "", action) {
  switch (action.type) {
    case SELECT_VENDOR: {
      return action.vendorId;
    }
    default:
      return state;
  }
}
