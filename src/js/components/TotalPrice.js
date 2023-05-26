import { useSelector } from "react-redux";
import "../../css/TotalPrice.css";

export default function TotalPrice() {
  const cart = useSelector((state) => state.cart);
  const amount = cart.reduce(
    (acc, prev) => (acc += prev.price * prev.quantity),
    0
  );

  return <span className="TotalPrice mx-5">Total price: {amount}₴</span>;
}
