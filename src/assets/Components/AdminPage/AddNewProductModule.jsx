export default function AddNewProductModule({onAddNewProduct}) {
  return (
    <>
      <div
        className="modal fade"
        id="AddNewProductModal"
        tabIndex="-1"
        aria-labelledby="AddNewProductModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-warning">
              <h5 className="modal-title" id="exampleModalLabel">
                !!Add New Product Modal!!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h3>Product Name</h3>
                <input type="text" placeholder="Product Name" />
              </div>
              <div>
                <p>Product Description</p>
                <input type="text" placeholder="Product Description" />
              </div>
              <div>
                <p>Product Price</p>
                <input type="number" placeholder="Product Price" />
              </div>
              <div>
                <p>Quantity</p>
                <input type="number" placeholder="Quantity" />
              </div>
              {/* <button type="button" className="btn btn-success">
                  <i className="bi bi-plus"></i>
                </button> */}
              {/* <button type="button" className="btn btn-danger">
                  <i className="bi bi-dash"></i>
                </button> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onAddNewProduct}>
                Add New Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
