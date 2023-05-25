import { useLoaderData } from "react-router-dom";

export default function ShoppingCart() {
  const menuItems = useLoaderData();
  console.log("menuItems", menuItems);

  return <div>Shopping Cart</div>;
}
