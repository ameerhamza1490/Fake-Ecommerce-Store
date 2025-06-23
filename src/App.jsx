import React from "react";
import "./App.css";
import AppBar from "./components/Appbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </>
  );
};

export default App;
