import React, { useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    increment,
    decrement,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/100?text=No+Image';
    e.target.className = 'w-full h-full object-contain bg-gray-100 p-2';
    e.target.onerror = null;
  };

  const handleProceedToCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="mt-4 text-gray-600 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                        {item.productInfo.images.map((img, idx) => (
                          <div key={idx} className="h-full flex items-center">
                            <img
                              src={img}
                              alt={item.productInfo.name}
                              className="w-full h-full object-contain"
                              onError={handleImageError}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-gray-800">{item.productInfo.name}</h3>
                        <p className="text-lg font-semibold">RS.{(item.productInfo.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-gray-500">₹{item.productInfo.price.toFixed(2)} each</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <button onClick={() => decrement(item.id)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
                          <span className="px-4">{item.quantity}</span>
                          <button onClick={() => increment(item.id)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>RS.{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>RS.{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
                onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
