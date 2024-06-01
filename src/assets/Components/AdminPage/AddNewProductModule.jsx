import { useContext } from "react";
import { FunctionContext } from "../../../App";

export default function AddNewProductModule() {
  const { handleSetNewProductInput, handleSetProductData, newProductInput } =
    useContext(FunctionContext);
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
              <div className="">
                <label htmlFor="prdouctName" className="d-block">
                  <h3>Product Name</h3>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="productName"
                  onChange={handleSetNewProductInput}
                  value={newProductInput.productName}
                />
              </div>
              <div>
                <label htmlFor="productDes" className="d-block">
                  <p>Product Description</p>
                </label>
                <input
                  type="text"
                  placeholder="Product Description"
                  name="productDes"
                  onChange={handleSetNewProductInput}
                  value={newProductInput.productDes}
                />
              </div>
              <div>
                <label htmlFor="productPrice" className="d-block">
                  <p>Product Price</p>
                </label>
                <input
                  type="number"
                  placeholder="Product Price"
                  name="productPrice"
                  onChange={handleSetNewProductInput}
                  value={newProductInput.productPrice}
                />
              </div>
              <div>
                <label htmlFor="productStock" className="d-block">
                  <p>Quantity</p>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="productStock"
                  onChange={handleSetNewProductInput}
                  value={newProductInput.productStock}
                />
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
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSetProductData}
              >
                Add New Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
