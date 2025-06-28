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
              className="rounded-2xl p-4 m-3 flex flex-col justify-between shadow-xl/30 bg-white h-full"
            >
              <div className="flex flex-col gap-4 flex-grow">
                <h1 className="text-2xl font-bold">{items.title}</h1>
                <img src={items.image} alt="" className="w-full h-60 object-contain" />
                <p className="text-sm text-gray-600">{items.description}</p>
                <div className="mt-auto pt-4 border-t">
                  <p className="font-bold mb-2 text-lg"> Price: ${items.price}</p>
                  <button className="bg-sky-500 text-white py-2 px-4 rounded-2xl hover:bg-sky-700 w-full cursor-pointer transition duration-300 ease-in-out font-bold">
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
