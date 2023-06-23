import { useAppSelector } from "../hooks";

type SubmitOrderProps = {
  handleSubmit: () => void;
};

export default function SubmitOrder({ handleSubmit }: SubmitOrderProps) {
  const cart = useAppSelector((state) => state.cart);
  const amount = cart.reduce(
    (acc, prev) => (acc += prev.price * prev.quantity),
    0
  );
  const btnClassName = `btn btn-primary ${cart.length === 0 ? "disabled" : ""}`;

  return (
    <div className="my-3 d-flex justify-content-end">
      <span className="TotalPrice mx-5">Total price: {amount}₴</span>
      <button type="submit" className={btnClassName} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
