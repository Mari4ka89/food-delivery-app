import { SELECT_VENDOR } from "../constants/actionTypes";

export default function slectedVendorReducer(state = null, action) {
  switch (action.type) {
    case SELECT_VENDOR: {
      return action.vendor;
    }
    default:
      return state;
  }
}
