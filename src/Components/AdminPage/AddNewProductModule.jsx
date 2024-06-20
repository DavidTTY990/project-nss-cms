import { useContext } from "react";
import { ProductContext } from "../../Store/Product-context";

import ProductCarousel from "../CommonComponents/ProductCarousel";

export default function AddNewProductModule() {
  const { handleSetNewProductInput, handleSetNewProductData, newProductInput } =
    useContext(ProductContext);

  return (
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
            <ProductCarousel product={newProductInput} />
            <div className="form-floating mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Product Name"
                name="productName"
                onChange={handleSetNewProductInput}
                value={newProductInput.productName}
              />
              <label htmlFor="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Set Product Description"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                name="productDes"
                onChange={handleSetNewProductInput}
                value={newProductInput.productDes}
              ></textarea>
              <label htmlFor="floatingTextarea2">Product Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Product Price"
                name="productPrice"
                onChange={handleSetNewProductInput}
                value={newProductInput.productPrice}
              />
              <label htmlFor="floatingInput">Product Price</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Quantity"
                name="productStock"
                onChange={handleSetNewProductInput}
                value={newProductInput.productStock}
              />
              <label htmlFor="floatingInput">Quantity</label>
            </div>
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
              onClick={handleSetNewProductData}
            >
              Add New Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
