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

  function addNewProduct() {
    const newData = {
      productName: "三小自動鉛筆",
      productDes: "好寫又可愛的三麗鷗官方認證自動鉛筆，大人小孩都喜愛",
      productPrice: 222,
      productId: 111,
      productImg: {
        img1: "../../../public/Image/三麗鷗自動鉛筆1.jpg",
        img2: "../../../public/Image/三麗鷗自動鉛筆2.jpg",
        img3: "../../../public/Image/三麗鷗自動鉛筆3.jpg",
      },
    };
    setProductData((prevData) => [...prevData, newData]);
  }
  return (
    <>
      {/* <FrontPage /> */}
      <AdminPage data={productData} handleAddNewProduct={addNewProduct} />
    </>
  );
}

export default App;
