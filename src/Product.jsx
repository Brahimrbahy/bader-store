import React from "react";
import { useParams } from "react-router-dom"; // ✅ needed
import { JsonData } from "./json";

const Product = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10); 

  // ✅ search in all categories
  const product =
    JsonData.products["t-shirt"].find((p) => p.id === productId) ||
    JsonData.products["hoodie"].find((p) => p.id === productId) ||
    JsonData.products["new"].find((p) => p.id === productId);

 

  return (
    <div className="p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Product Image */}
        <div>
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.price}</p>
          <p className="mt-4 text-sm text-gray-500">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-medium">Sizes</h3>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border rounded-md text-sm cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
