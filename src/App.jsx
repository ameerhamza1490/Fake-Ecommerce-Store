import React from "react";
import "./App.css";
import AppBar from "./components/Appbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/">
          <Route index element={<Products />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
