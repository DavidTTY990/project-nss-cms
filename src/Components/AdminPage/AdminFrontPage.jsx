import EditProductModal from "./EditProductModal";
import EditProductCard from "./EditProductCard";
import AddNewProductModule from "./AddNewProductModule";
import AddNewProductCard from "./AddNewProductCard";
import Pagination from "../CommonComponents/Pagination";
import { useContext } from "react";
import { ProductContext } from "../../Store/Product-context";

export default function AdminFrontPage() {
  const {
    productData,
    currentPageProducts,
    productCategory,
    handleSetProductCategory,
  } = useContext(ProductContext);

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-warning justify-content-between">
        <a className="navbar-brand ms-4" href="#">
          Company Name
        </a>
        <a href="#" className="nav-link">
          <i className="bi bi-cone-striped"></i>EDIT MODE
        </a>
        <a className="nav-link link-secondary me-4" href="#">
          Log out
        </a>
      </nav>
      <main className="position-relative h-100 m-4 p-4">
        <div className="d-xl-flex">
          <div className="container-fluid w-25">
            <div className="row">
              <div className="col">
                <div className="list-group list-group-flush">
                  {/* 這邊改用迴圈渲染 */}
                  {productCategory.map(category => {
                     return (
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                      >
                        <p>{category}</p>
                      </a>
                    );
                  })}
                  <a
                    href="#"
                    className="list-group-item list-group-item-action list-group-item-success"
                  >
                    <p>
                      <i className="bi bi-plus-lg"></i>
                      Add new Category
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <AddNewProductModule />
            {currentPageProducts.map((product) => {
              return (
                <EditProductModal key={product.productId} product={product} />
              );
            })}
            <div className="row row-cols-auto row-cols-lg-5 g-3">
              <AddNewProductCard />
              {currentPageProducts.map((product) => {
                return (
                  <EditProductCard
                    key={product.productId}
                    productId={product.productId}
                    data={product}
                  />
                );
              })}
            </div>
            <Pagination productsPerPage={9} length={productData.length} />
          </div>
        </div>
      </main>
      <footer className="w-100 bg-light position-relative bottom-0 text-center py-3">
        <div className="container">
          <p className="m-0">Company Name / Contact</p>
        </div>
      </footer>
    </div>
  );
}
