export default function MenuItem({
  info: { title, price, description, image },
}) {
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
            <h6 className="card-title">{price}$</h6>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
