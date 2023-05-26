import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";

export default function SelectedItems() {
  const menuItems = useLoaderData();
  console.log("menuItems", menuItems);

  return <CartItem />;
}
