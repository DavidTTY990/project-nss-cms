export default function ProductCarousel({ product }) {
  return (
    <div
      id={`${product.productId}ForCarousel`}
      className="carousel slide"
      data-bs-interval="false"
      style={{ width: "300px", margin: "0 auto" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#${product.productId}ForCarousel`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#${product.productId}ForCarousel`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#${product.productId}ForCarousel`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={product.productImg.img1}
            className="d-block w-100"
            alt="product image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={product.productImg.img2}
            className="d-block w-100"
            alt="product image 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={product.productImg.img3}
            className="d-block w-100"
            alt="product image 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${product.productId}ForCarousel`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${product.productId}ForCarousel`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
