import { useDispatch } from "react-redux";
import { UPDATE_PRODUCT_IN_CART } from "../constants/actionTypes";

export default function CartItem({ productId, quantity, image, title, price }) {
  const dispatch = useDispatch();

  function handleAmountChange(e) {
    dispatch({
      type: UPDATE_PRODUCT_IN_CART,
      productId,
      quantity: parseInt(e.target.value),
    });
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>Price: {price}₴</h6>
            <p className="card-text">
              <input
                type="number"
                className="form-control"
                onChange={handleAmountChange}
                defaultValue={quantity}
                min="0"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
