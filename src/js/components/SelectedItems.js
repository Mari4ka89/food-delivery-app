import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function SelectedItems() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="m-3">
      {cart.map((item) => (
        <CartItem key={item.productId} {...item} />
      ))}
    </div>
  );
}
