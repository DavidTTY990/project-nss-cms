export default function AddNewProductCard() {
  return (
    <div className="col position-relative" role="button">
      <div
        className="card h-100 bg-warning"
        data-bs-target="#AddNewProductModal"
        data-bs-toggle="modal"
      >
        <div className="card-body bg-warning d-flex flex-column align-items-center justify-content-center">
          <p className="card-text text-center">
            <i className="bi bi-plus-circle fs-2"></i>
          </p>
          <h5 className="card-title">Add New Product</h5>
        </div>
      </div>
    </div>
  );
}
