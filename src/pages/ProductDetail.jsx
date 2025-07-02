import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };
  console.log(product);
  return (
    <>
      <div className="p-6 flex items-center justify-center">
        <div className="p-4 bg-white flex flex-col lg:flex-row justify-around items-center gap-6 rounded-2xl">
          <img src={product.image} alt="" className="w-96" />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold">{product.title}</h1>
            <p>{product.description}</p>
            <p className="text-2xl font-bold">${product.price}</p>
            <div>
              <button className="p-4 bg-blue-600 active:hover:bg-blue-700 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200 ease-in-out cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
