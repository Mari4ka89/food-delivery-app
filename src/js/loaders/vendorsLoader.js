import { json } from "react-router-dom";

const vendorsLoader = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let vendors = await response.json();
    // As third-party API returns only list of vendors without ids, I add them manually.
    let updatedVendors = vendors.map((vendor, index) => ({
      vendor,
      id: index,
    }));

    return updatedVendors;
  } catch (e) {
    throw json(
      { message: "Error occured while fetching vendors" },
      { status: e.status }
    );
  }
};

export default vendorsLoader;
