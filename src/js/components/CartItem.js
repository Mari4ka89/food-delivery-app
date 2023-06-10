import { useAppDispatch } from "../hooks";
import { productRemoved, productQuantityUpdated } from "../reducers/cartSlice";
import { vendorReset } from "../reducers/selectedVendorSlice";
import "../../css/CartItem.css";

export default function CartItem({
  productId,
  quantity,
  image,
  title,
  price,
  isOneAndOnly,
}) {
  const dispatch = useAppDispatch();

  function handleAmountChange(e) {
    dispatch(
      productQuantityUpdated({
        productId,
        quantity: parseInt(e.target.value || 0),
      })
    );
  }

  function handleRemoveItem() {
    dispatch(productRemoved(productId));

    isOneAndOnly && dispatch(vendorReset());
  }

  return (
    <div className="CartItem card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div
            className="float-end pe-2 cursor-pointer"
            onClick={handleRemoveItem}
          >
            Х
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <h6>Price: {price}₴</h6>
            <input
              type="number"
              className="form-control w-50"
              onChange={handleAmountChange}
              defaultValue={quantity}
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
