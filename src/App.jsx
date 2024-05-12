import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

import { DummyData } from "./assets/DummyData/DummyData";
import { useState, useEffect } from "react";
import globalStyles from "./assets/StyleComponents/GlobalCss.module.css";
import FrontPage from "./assets/Components/UserPage/FrontPage";
import AdminPage from "./assets/Components/AdminPage/AdminPage";

function App() {
  const [productCategory, setProductCategory] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProductData(DummyData);
  }, []);

  function fetchProductData(DummyData) {
    setProductData(DummyData);
  }

  function addNewProduct() {}

  return (
    <>
      {/* <FrontPage /> */}
      <AdminPage data={productData} />
    </>
  );
}

export default App;
