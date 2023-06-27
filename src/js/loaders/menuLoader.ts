import { json } from "react-router-dom";
import { API_URL } from "../constants/api";

const menuLoader = async ({ params }) => {
  try {
    let response = await fetch(
      `${API_URL}products/category/${params.vendorId}`
    );
    let menuItems = await response.json();

    return menuItems;
  } catch (e) {
    throw json(
      { message: "Error occured while fetching menu items" },
      { status: e.status }
    );
  }
};

export default menuLoader;
