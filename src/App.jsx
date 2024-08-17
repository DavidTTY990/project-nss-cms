import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

import { DummyData } from "./DummyData/DummyData";
import { useState, useEffect } from "react";
import globalStyles from "./StyleComponents/GlobalCss.module.css";
import UserFrontPage from "./Components/UserPage/UserFrontPage";
import AdminFrontPage from "./Components/AdminPage/AdminFrontPage";
import ProductContextProvider from "./Store/Product-context";

function App() {
  useEffect(() => {
    fetchProductData(DummyData);
  }, []);

  const [productData, setProductData] = useState([]);
  // product category state
  const [productCategory, setProductCategory] = useState([]);

  const defaultProductData = {
    productId: new Date().getTime(),
    productImg: {
      img1: "https://fakeimg.pl/300/",
      img2: "https://fakeimg.pl/300/",
      img3: "https://fakeimg.pl/300/",
    },
    productName: "",
    productDes: "",
    productPrice: "",
    productStock: "",
  };
  const [newProductInput, setNewProductInput] = useState(defaultProductData);
  const [EditProductData, setEditProductData] = useState({
    productName: "",
    productDes: "",
    productPrice: "",
    productStock: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  // For pagination
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
  }

  function handleSetNewProductData() {
    setProductData((prevData) => [newProductInput, ...prevData]);

    // empty input after the data has set
    setNewProductInput(defaultProductData);
  }

  function handleDeleteProduct(productId, currentPage) {
    const newProductData = productData.filter(
      (product) => product.productId !== productId
    );
    setProductData(newProductData);
    if (currentPageProducts.length === 1) {
      if (currentPage > 1) {
        handleSetCurrentPage(currentPage - 1);
      }
    }
  }

  function handleSetCurrentPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleEditProductData(e, productId) {
    const productToEdit = productData.find((product) => {
      return product.productId === productId;
    });
    const { name, value } = e.target;
    setEditProductData(() => ({
      ...productToEdit,
      [name]: value,
    }));
  }

  function handleSetEditProductData() {
    const updatedProductData = productData.map((product) => {
      if (product.productId === EditProductData.productId) {
        return EditProductData;
      }
      return product;
    });

    setProductData(updatedProductData);

    setEditProductData({
      productName: "",
      productDes: "",
      productPrice: "",
      productStock: "",
    });
  }

  function handleSetProductCategory() {

  }

  return (
    <ProductContextProvider
      value={{
        productData,
        newProductInput,
        handleSetNewProductInput,
        handleEditProductData,
        handleSetEditProductData,
        handleSetNewProductData,
        handleDeleteProduct,
        handleSetCurrentPage,
        currentPageProducts,
        currentPage,
        productCategory,
        handleSetProductCategory,
      }}
    >
      <AdminFrontPage />
    </ProductContextProvider>
  );
}

export default App;
