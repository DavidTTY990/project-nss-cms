import { useContext } from "react";
import { FunctionContext } from "../../../App";

export default function EditProductCard({ data, productId }) {
  const { handleDeleteProduct } = useContext(FunctionContext);
  return (
    <div className="col position-relative">
      <div className="position-absolute z-1">
        <button
          type="button"
          className="btn btn-warning btn-sm me-2"
          data-bs-target={`#${productId}ForModal`}
          data-bs-toggle="modal"
          role="button"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => handleDeleteProduct(productId)}
        >
          Delete
        </button>
      </div>
      <div className="card h-100">
        <img src={data.productImg.img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.productName}</h5>
          <p className="card-text">{data.productDes}</p>
          <div className="d-flex justify-content-between">
            <div>Price:{data.productPrice}</div>
            <div>Stock:{data.productStock}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
