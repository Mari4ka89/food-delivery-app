import { useAppSelector } from "../hooks";
import CartItem from "./CartItem";
import { cart } from "../reducers/cartSlice";

export default function SelectedItems() {
  const savedCart = useAppSelector(cart);

  return (
    <div className="m-3">
      {savedCart.map((item) => (
        <CartItem
          key={item.productId}
          isOneAndOnly={savedCart.length === 1}
          {...item}
        />
      ))}
    </div>
  );
}
