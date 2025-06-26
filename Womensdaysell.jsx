import React from 'react';
import { useCart } from '../Context/CartContext';

const Products = [
  {
    id: 1,
    name: "White Woven Design Cotton Kurta",
    price: 599,
    images: [
        "https://www.libas.in/cdn/shop/files/12067O.jpg?v=1748248132&width=1080"
      
    ]
  },
  {
    id: 2,
    name: "Blue Printed Cotton Straight Suit Set With Dupatta",
    price: 499,
    images: [
        "https://www.libas.in/cdn/shop/files/20158O_750cadf7-61b1-4b6d-9649-357d49332277.webp?v=1745994693&width=1800"
     
    ]
  },
  {
    id: 3,
    name: "Black Schiffli Rayon Dress",
    price: 399,
    images: [
      "https://www.libas.in/cdn/shop/files/black-schiffli-rayon-dress-libas-1.jpg?v=1739541940&width=1800"
    ]
  },
   {
    id: 4,
    name: "Zainab Chikankari Mulmul Printed Straight Kurta -Grey",
    price: 699,
    images: [
      "https://cdn.shopify.com/s/files/1/0561/7926/1589/files/Zainab_Chikankari_Mulmul_Straight_Kurta_2_07cdade7-b0a3-4331-9335-4a20dad4bf5d_540x.jpg?v=1748093730"
    ]
  },
   {
    id: 5,
    name: "Zainab Chikankari Mulmul Printed Straight Kurta -Pink",
    price: 399,
    images: [
      "https://cdn.shopify.com/s/files/1/0561/7926/1589/files/House_of_Chikankari_Zainab_Chikankari_Mulmul_Straight_Kurta_5_151f0361-8a9d-4a70-acc7-ce81fc32c864_540x.jpg?v=1749483410"
    ]
  },
   {
    id: 6,
    name: "Cotton Chikankari Solid Women's Short Kurta - White",
    price: 399,
    images: [
      "https://cdn.shopify.com/s/files/1/0561/7926/1589/files/House_of_Chikankari_Cotton_Chikankari_Solid_Womens_Short_Kurta_-_White_6_332ea419-3cf1-4bcf-8b6d-1ac9aa91f0bb_540x.jpg?v=1748329064"
    ]
  }
  
];

function Womensdaysell() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Women's Day Sell</h2>
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
                }}/>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-800 text-bold mb-4 text-lg">Rs.{product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Womensdaysell;
