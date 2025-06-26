import React from 'react';
import { useCart } from '../Context/CartContext';

const Products = [
  {
    id: 1,
    name: "Blossom women's buckle strap platform sandal",
    price: 599,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFzLLx7RUn01u70anGRi5Ep7KwIAdRFHoMoZgk4AopP4EKqwAjNg1SPdiu3qyO_Hjx3dzNZS6e6Kn-Zrb76-eBTfhc_FlPCxr1FaG1JzK7vNuXOP9hOEzqyTU7sYEfqBZt93d6tw&usqp=CAc",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7d797ce-9e55-46db-a1e9-648d51c6f291/M+AIR+MAX+ALPHA+TRAINER+6.png"
    ]
  },
  {
    id: 2,
    name: "Women ULTRA FLEX Woven Design T-Strap Flats",
    price: 499,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTr2TK5WMddyBx2wezM2uLMVf6jwNyaIVLVRiT4q7Jw1wM6KfZqXZLYTEJ_ulXyBCsJcisQB-qfgTVYPhQh3Mny9gBZb_TPLcEETWCuC_t_FM9wdpQq-usvKyX9nGgKYn2fCIUFNKqgbg&usqp=CAc",
      "https://via.placeholder.com/200?text=Adidas+2"
    ]
  },
  {
    id: 3,
    name: "Mast & Harbour Women's Comfort Sandals",
    price: 399,
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTg1ZjNzfsxAnGOw5QhCKJlkZ48EY5MR80IhU1Vrk9P9IkrdIkO8ccTlprWuG7TVC-t_j2Ap59MHciK8t9tSHxZ6glVwfUuGdcIsyaHtSX9MMvnT0-bahI9",
      "https://via.placeholder.com/200?text=Puma+2"
    ]
  }
];

function Ladies() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Women's Shoes Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Products.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200?text=No+Image";
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-lg">Rs.{product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ladies;
