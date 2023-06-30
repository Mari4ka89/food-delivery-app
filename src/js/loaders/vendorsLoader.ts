import { json } from "react-router-dom";
import { API_URL } from "../constants/api";

const vendorsLoader = async () => {
  try {
    let response = await fetch(`${API_URL}products/categories`);
    let vendors = await response.json();

    return vendors;
  } catch (e) {
    throw json(
      { message: "Error occured while fetching vendors" },
      { status: e.status }
    );
  }
};

export default vendorsLoader;
