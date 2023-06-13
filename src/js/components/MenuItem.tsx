import { useAppDispatch } from "../hooks";
import { productAdded } from "../reducers/cartSlice";
import { vendorSelected } from "../reducers/selectedVendorSlice";

export interface Product {
  image: string;
  title: string;
  price: number;
}

export interface MenuItemProps extends Product {
  productId: string;
  quantity: number;
}

export default function MenuItem({ info }) {
  const dispatch = useAppDispatch();
  const { title, price, description, image, category, id } = info;

  function handleAddToCart() {
    dispatch(
      productAdded({
        productId: id,
        quantity: 1,
        image,
        title,
        price,
      })
    );
    dispatch(vendorSelected(category));
  }

  return (
    <div className="col-6">
      <div className="card mb-3 p-2">
        <img
          src={image}
          style={{ height: "18rem" }}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between">
            <h6 className="card-title">{price}₴</h6>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
