import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

import { DummyData } from "./assets/DummyData/DummyData";
import { useState, useEffect, createContext } from "react";
import globalStyles from "./assets/StyleComponents/GlobalCss.module.css";
import UserFrontPage from "./assets/Components/UserPage/UserFrontPage";
import AdmiFrontnPage from "./assets/Components/AdminPage/AdminFrontPage";

export const FunctionContext = createContext(null);

function App() {
  useEffect(() => {
    fetchProductData(DummyData);
  }, []);

  const [productData, setProductData] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [newProductInput, setNewProductInput] = useState({
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
  });
  const [EditProductInput, setEditProductInput] = useState({
    productName: "",
    productDes: "",
    productPrice: "",
    productStock: "",
  });
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
  }

  function handleSetNewProductData() {
    setProductData((prevData) => [...prevData, newProductInput]);

    // empty input after the data has set
    setNewProductInput({
      productId: "",
      productImg: {
        img1: "",
        img2: "",
        img3: "",
      },
      productName: "",
      productDes: "",
      productPrice: "",
      productStock: "",
    });
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

  function handleEditProductInput(e, productId) {
    console.log(productId);
    const productToEdit = productData.find((product) => {
      return product.productId === productId;
    });
    const { name, value } = e.target;
    setEditProductInput((prevProductInput) => ({
      ...productToEdit,
      ...prevProductInput,
      [name]: value,
    }));
    console.log(EditProductInput);
  }

  function handleSetEditProductData() {
    const updatedProductData = productData.map((product) => {
      if (product.productId === EditProductInput.productId) {
        return EditProductInput;
      }
      return product;
    });
    setProductData(updatedProductData);
    setEditProductInput({
      productName: "",
      productDes: "",
      productPrice: "",
      productStock: "",
    });
  }
  return (
    <FunctionContext.Provider
      value={{
        productData,
        newProductInput,
        handleSetNewProductInput,
        handleEditProductInput,
        handleSetEditProductData,
        handleSetNewProductData,
        handleDeleteProduct,
        handleSetCurrentPage,
        currentPageProducts,
        currentPage,
      }}
    >
      {/* <UserFrontPage /> */}
      <AdmiFrontnPage />
    </FunctionContext.Provider>
  );
}

export default App;
