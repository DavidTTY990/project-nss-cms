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
  const [newProductInput, setNewProductInput] = useState({});
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProductData(DummyData);
  }, []);

  function fetchProductData(DummyData) {
    setProductData(DummyData);
  }

  function handleSetNewProductInput(e) {
    const { name, value } = e.target;
    setNewProductInput((prevNewProductInput) => ({
      ...prevNewProductInput,
      [name]: value,
    }))
    console.log(newProductInput)
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
    console.log(newProductData)
    setProductData((prevData) => [...prevData, newProductData]);
  }
  return (
    <>
      {/* <FrontPage /> */}
      <AdminPage data={productData} handleSetNewProductInput={handleSetNewProductInput} handleSetProductData={handleSetProductData} />
    </>
  );
}

export default App;
