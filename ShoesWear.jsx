
import React from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const shoesProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 5999,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9f79fa8d-3a58-44ce-b823-c6936ccc65fc/M+AIR+MAX+ALPHA+TRAINER+6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7d797ce-9e55-46db-a1e9-648d51c6f291/M+AIR+MAX+ALPHA+TRAINER+6.png"
    ]
  },
  {
    id: 2,
    name: "Adidas Runner",
    price: 4999,
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZSzAAUJGbZqh-wsRd8jIPdFNKUZ6nWUFLalyj32WrRQxNbbix73bcSBSDfPCY_H3C26d0OrZ29YRwnxS8i33qGzabteGFoW51V8Nw-QIVJxE91JFKEIbZC-La-UPM4XsraGoFf1E&usqp=CAc",
      "https://via.placeholder.com/200?text=Adidas+2"
    ]
  },
  {
    id: 3,
    name: "Puma Sport",
    price: 3999,
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTT8BU9ZRZvjIQDctVfML3r03msX4VmXGt7xaFqYjNwK-SVSxZPv6pOcjXcdM5pwVuSQUeN3iGLwy0nmrL1xdiOrtB0h33MjJieSphy8ghuX8WOWfI2y5iSUg&usqp=CAc",
      "https://via.placeholder.com/200?text=Puma+2"
    ]
  }
];

function ShoesWear() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Shoes Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoesProducts.map(product => (
          <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=No+Image"; }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-2">Rs.{product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
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

export default ShoesWear;
