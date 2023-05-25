import { json } from "react-router-dom";

const menuLoader = async ({ params }) => {
  try {
    let response = await fetch(
      `https://fakestoreapi.com/products/category/${params.vendorId}`
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
