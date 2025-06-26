import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const products = [
  {
    id: 1,
    name: "Pure Cotton Knitted Textured T-Shirt (6-14 Yrs)",
    images: [
      "https://image.hm.com/assets/hm/dc/19/dc19d350174a4f8cb22ef38d273ffb86dcef217a.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/5a/fc/5afcdc5831dd354f05b9261a59d5f657d4f2cbf9.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/a6/c3/a6c3880b17357bc6968d74cd97766b61deb6e0f3.jpg?imwidth=1260"
     
      ],
    sizes: ["6-7 Y", "7-9 Y", "10-12 Y","13-14 Y"],
    price: 999,
  },
  {
    id: 2,
    name: "Patterned cotton dress",
    images: [
      "https://image.hm.com/assets/hm/1d/1f/1d1f82bbf9124488baf36be037c732b47f60f2e6.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/4e/9a/4e9ab9b24bb723e4f84168c59669d37856f74a13.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/ae/78/ae78adc8606fde4315f6d89360501f963abb2f41.jpg?imwidth=1260"
     ],
    sizes: ["1-2 Y","2-3 Y", "3-4 Y","4-6 Y"],
    price: 799,
  },
    {
    id: 3,
    name: "Relaxed Fit Jeans",
    images: [
      "https://image.hm.com/assets/hm/18/1f/181fad036625cdbb9bbd3b3ee56d014a3498761f.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/c1/39/c139eaed797b92c1bdfbbdc93eb02e1169853adf.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/07/d9/07d97373681e1a487278327fd05ecc0103670fb3.jpg?imwidth=2160"
        ],
    sizes: ["2-4 Y", "5-7 Y", "8-10 Y"],
    price: 1599,
  },
  {
    id: 4,
    name: "2-piece printed sweatshirt set",
    images: [
      "https://image.hm.com/assets/hm/2c/8e/2c8e11a3bebf50cd8e56cc1fcf2486ba17f839b1.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/4e/7d/4e7d2f535425fa1998b42d269d1b29f4e4279890.jpg?imwidth=1260"
      
       ],
    sizes: ["S", "M", "L"],
    price: 599,
  },
   
    {
    id: 5,
    name: "Mickey Mouse Classic Jogger ",
    images: [
      "https://napchief.com/cdn/shop/files/12_532f43d4-d2ca-4cd2-b4ee-71012ad954cf_720x.jpg?v=1745222767",
      "https://napchief.com/cdn/shop/files/36_235d263e-fc55-4968-9aab-a7e4b34d8152_720x.jpg?v=1745222767",
      "https://napchief.com/cdn/shop/files/11_81718fe6-4372-4f21-b947-85ba60276846_720x.jpg?v=1745222764"
         
    ],
    sizes: ["S", "M", "L"],
    price: 899,
  },
    {
    id: 6,
    name: "Denim jacket",
    images: [
      "https://image.hm.com/assets/hm/40/8c/408cb8bf9c5eb8c2871142e0f51e43c71befb12b.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/19/b0/19b0faaab7c061dc981fcb6f12d0c8f9c093bcee.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/ff/06/ff0606fe1ccb62c16342fff4e892276953292be5.jpg?imwidth=1260"
      
       ],
    sizes: ["1-2 Y","2-3 Y", "3-4 Y","4-6 Y"],
    price: 1999,
  },
   
];


function Kid() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [errors, setErrors] = useState({}); 

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
    setErrors((prev) => ({ ...prev, [productId]: false })); 
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    if (!size) {
      setErrors((prev) => ({ ...prev, [product.id]: true }));
      return;
    }

    addToCart({ ...product, selectedSize: size });
    setErrors((prev) => ({ ...prev, [product.id]: false }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700"> Kid's Collection</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 p-4 flex flex-col justify-between">
            <Carousel
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              autoPlay
              interval={3000}
              className="rounded-xl">
              {product.images.map((img, idx) => (
                <div key={idx}
                  className="w-full aspect-[2/3] bg-white flex items-center justify-center rounded-xl overflow-hidden">
                  <img src={img}
                    alt={`${product.name} ${idx}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300?text=Product+Image";
                      e.target.className = "max-h-full max-w-full object-contain bg-gray-100";
                    }}
                  />
                </div>
              ))}
            </Carousel>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-medium text-md mt-1">RS.{product.price.toFixed(2)}</p>

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Size:</label>
                <select
                  className={`w-full p-2 border rounded-md focus:outline-none ${
                    errors[product.id]
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  value={selectedSizes[product.id] || ""}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}>
                  <option value="">Choose size</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
                {errors[product.id] && (
                  <p className="text-sm text-red-600 mt-1">Please select a size</p>
                )}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kid;




