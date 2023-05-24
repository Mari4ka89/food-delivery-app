import { json } from "react-router-dom";
import { FETCH_VENDORS } from "../constants/actionTypes";

const vendorsLoader = (dispatch) => async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let vendors = await response.json();

    dispatch({ type: FETCH_VENDORS, vendors });

    return vendors;
  } catch (e) {
    throw json(
      { message: "Error occured while fetching vendors" },
      { status: e.status }
    );
  }
};

export default vendorsLoader;
