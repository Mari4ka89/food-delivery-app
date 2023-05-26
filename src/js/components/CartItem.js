export default function CartItem({ quantity, image, title, price }) {
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
