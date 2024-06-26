import styles from "../../StyleComponents/ProductModal.module.css";
import ProductCarousel from "../CommonComponents/ProductCarousel";
import { useContext } from "react";
import { ProductContext } from "../../Store/Product-context";

export default function EditProductModal({ product }) {
  const { handleEditProductData, handleSetEditProductData } =
    useContext(ProductContext);
  return (
    <div
      className="modal fade"
      id={`${product.productId}ForModal`}
      tabIndex="-1"
      aria-labelledby="editProductModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-warning">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Product Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ProductCarousel product={product} />

            <div className="form-floating mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Product Name"
                name="productName"
                defaultValue={product.productName}
                onChange={(e) => handleEditProductData(e, product.productId)}
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
                defaultValue={product.productDes}
                onChange={(e) => handleEditProductData(e, product.productId)}
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
                defaultValue={product.productPrice}
                onChange={(e) => handleEditProductData(e, product.productId)}
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
                defaultValue={product.productStock}
                onChange={(e) => handleEditProductData(e, product.productId)}
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
              onClick={handleSetEditProductData}
            >
              Edit Product Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
