import styles from "../../StyleComponents/ProductModal.module.css";
import ProductCarousel from "../UserPage/ProductCarousel";

export default function EditProductModal({ product }) {
  return (
    <>
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
              <div className={styles.textProductIntro}>
                <div>
                  <h3>Product Name</h3>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={product.productName}
                  />
                </div>
                <div>
                  <p>Product Description</p>
                  <input
                    type="text"
                    placeholder="Product Description"
                    value={product.productDes}
                  />
                </div>
                <div>
                  <p>Product Price</p>
                  <input
                    type="number"
                    placeholder="Product Price"
                    value={product.productPrice}
                  />
                </div>
                <div>
                  <p>Quantity</p>
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={product.productStock}
                  />
                </div>
                {/* <button type="button" className="btn btn-success">
                  <i className="bi bi-plus"></i>
                </button> */}
                {/* <button type="button" className="btn btn-danger">
                  <i className="bi bi-dash"></i>
                </button> */}
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
              <button type="button" className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
