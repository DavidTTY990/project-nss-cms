export default function EditProductCard({data}) {
  return (
    <div className="col position-relative">
      <div className="position-absolute z-1">
        <button type="button" className="btn btn-warning btn-sm me-2">
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
      <div
        className="card h-100"
        data-bs-target="#editProductModal"
        data-bs-toggle="modal"
        role="button"
      >
        <img
          src={data.productImg.img1}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{data.productName}</h5>
          <p className="card-text">
            {data.productDes}
          </p>
        </div>
      </div>
    </div>
  );
}
