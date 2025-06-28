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
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-10 ">
          {products.map((items) => (
            <div
              key={items.id}
              className="border border-gray-200 rounded-2xl p-5 m-3 flex flex-col justify-between shadow-sm bg-white h-full transition-transform duration-300 hover:shadow-lg hover:translate-y-1 cursor-pointer"
            >
              <img
                src={items.image}
                alt=""
                className="w-full h-56 object-contain mb-4"
              />
              <div className="flex flex-col gap-4 flex-grow">
                <h1 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {items.title}
                </h1>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {items.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="font-bold mb-3 text-lg text-green-700">
                    Price: ${items.price}
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200 ease-in-out cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
