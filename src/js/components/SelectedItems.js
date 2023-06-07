import { useAppSelector } from "../hooks";
import CartItem from "./CartItem";

export default function SelectedItems() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="m-3">
      {cart.map((item) => (
        <CartItem
          key={item.productId}
          isOneAndOnly={cart.length === 1}
          {...item}
        />
      ))}
    </div>
  );
}
