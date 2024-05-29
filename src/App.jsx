import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

import { DummyData } from "./assets/DummyData/DummyData";
import { useState, useEffect, createContext } from "react";
import globalStyles from "./assets/StyleComponents/GlobalCss.module.css";
import FrontPage from "./assets/Components/UserPage/FrontPage";
import AdmiFrontnPage from "./assets/Components/AdminPage/AdminFrontPage";

export const FunctionContext = createContext(null);

function App() {
  useEffect(() => {
    fetchProductData(DummyData);
  }, []);

  const [productCategory, setProductCategory] = useState([]);
  const [newProductInput, setNewProductInput] = useState({});
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  const indexOfLastProductPerPage = currentPage * productsPerPage;
  const indexOfFirstProductPerPage =
    indexOfLastProductPerPage - productsPerPage;
  const currentPageProducts = productData.slice(
    indexOfFirstProductPerPage,
    indexOfLastProductPerPage
  );

  function fetchProductData(DummyData) {
    setProductData(DummyData);
  }

  function handleSetNewProductInput(e) {
    const { name, value } = e.target;
    setNewProductInput((prevNewProductInput) => ({
      ...prevNewProductInput,
      [name]: value,
    }));
    console.log(newProductInput);
  }

  function handleSetProductData() {
    const newProductData = {
      productId: new Date().getTime(),
      ...newProductInput,
      productImg: {
        img1: "/Image/蜂巢軟握中性筆1.jpg",
        img2: "/Image/蜂巢軟握中性筆2.jpg",
        img3: "/Image/蜂巢軟握中性筆3.jpg",
      },
    };
    setProductData((prevData) => [...prevData, newProductData]);
  }

  function handleDeleteProduct(productId) {
    const newProductData = productData.filter(
      (product) => product.productId !== productId
    );
    setProductData(newProductData);
  }

  function handleSetCurrentPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <FunctionContext.Provider
        value={{
          productData,
          handleSetNewProductInput,
          handleSetProductData,
          handleDeleteProduct,
          handleSetCurrentPage,
          currentPageProducts,
          currentPage,
        }}
      >
        {/* <UserFrontPage /> */}
        <AdmiFrontnPage />
      </FunctionContext.Provider>
    </>
  );
}

export default App;
