import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };
  console.log(products);
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {products.map((items) => (
            <div
              key={items.id}
              className="rounded-2xl p-4 m-3 flex flex-col gap-4 shadow-xl/30 bg-white"
            >
              <h1 className="text-2xl font-bold">{items.title}</h1>
              <img src={items.image} alt="" className="w-full h-70" />
              <p>{items.description}</p>
              <p className="font-bold">${items.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
