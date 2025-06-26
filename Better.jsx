import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const products = [
    {
    id: 1,
    name: "Nuon Blue Typographic Relaxed-Fit Cotton T-Shirt",
    images: [
      "https://www.westside.com/cdn/shop/files/301022542BLUE_1.jpg?v=1750158053&width=493",
      "https://www.westside.com/cdn/shop/files/301022542BLUE_2.jpg?v=1750158053&width=493",
      "https://www.westside.com/cdn/shop/files/301022542BLUE_4.jpg?v=1750158053&width=493",
     
       ],
    sizes: ["S","M","L","XL","2XL"],
    price: 999,
  },
  {
    id: 2,
    name: "Nuon Pink Stripe Printed Relaxed-Fit Cotton-Blend T-Shirt",
    images: [
        "https://www.westside.com/cdn/shop/files/301019151PINK_1.jpg?v=1750139422&width=493",
        "https://www.westside.com/cdn/shop/files/301019151PINK_2.jpg?v=1750139422&width=493",
        "https://www.westside.com/cdn/shop/files/301019151PINK_4.jpg?v=1750139422&width=493",
      
       ],
    sizes: ["S","M","L","XL","2XL"],
    price: 299,
  },
  {
    id: 3,
    name: "",
    images: [
        "https://www.westside.com/cdn/shop/files/301022540BEIGE_1.jpg?v=1749709964&width=493",
        "https://www.westside.com/cdn/shop/files/301022540BEIGE_2.jpg?v=1749709964&width=493",
        "https://www.westside.com/cdn/shop/files/301022540BEIGE_4.jpg?v=1749709964&width=493",
    
       ],
    sizes: ["S","M","L","XL","2XL"],
    price: 699,
  },
 
];

function Better() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [errors, setErrors] = useState({});
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100); 
    return () => clearTimeout(timer);
  }, []);

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
    <div className="p-6 bg-gray-50 min-h-screen transition-opacity duration-1000 ease-in-out">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">T-Shirts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-md p-4 flex flex-col justify-between transition-all duration-700 ease-in-out transform ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-[1.02] hover:shadow-xl`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Carousel
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              autoPlay
              interval={3000}
              className="rounded-xl"
            >
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-[2/3] flex items-center justify-center overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx}`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300?text=Product+Image";
                      e.target.className =
                        "max-h-full max-w-full object-contain bg-gray-100";
                    }}
                  />
                </div>
              ))}
            </Carousel>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-blue-600 font-medium text-md mt-1">
                ₹{product.price.toFixed(2)}
              </p>

              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Size:
                </label>
                <select
                  className={`w-full p-2 border rounded-md focus:outline-none ${
                    errors[product.id]
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  value={selectedSizes[product.id] || ""}
                  onChange={(e) =>
                    handleSizeChange(product.id, e.target.value)
                  }
                >
                  <option value="">Choose size</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
                {errors[product.id] && (
                  <p className="text-sm text-red-600 mt-1">
                    Please select a size
                  </p>
                )}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Better;








