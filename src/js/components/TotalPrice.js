import { useSelector } from "react-redux";

export default function TotalPrice() {
  const cart = useSelector((state) => state.cart);
  const amount = cart.reduce(
    (acc, prev) => (acc += prev.price * prev.quantity),
    0
  );

  return <div className="mx-5">Total price: {amount}₴</div>;
}
