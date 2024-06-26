import styles from "../../StyleComponents/ProductModal.module.css";
import ProductCarousel from "../CommonComponents/ProductCarousel";

export function ProductModal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ProductCarousel />
              <div className={styles.textProductIntro}>
                <h3>Product Name</h3>
                <p>Product Description</p>
                <p>Product Price</p>
                {/* <button type="button" className="btn btn-success">
                  <i className="bi bi-plus"></i>
                </button> */}
                <input type="text" placeholder="Quantity" />
                {/* <button type="button" className="btn btn-danger">
                  <i className="bi bi-dash"></i>
                </button> */}
              </div>
              <div></div>
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
