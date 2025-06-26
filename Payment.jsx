import React from 'react';

function Payment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Payment Details</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Name on Card */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name on Card
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Expiry and CVV */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="expiry">
                Expiry Date
              </label>
              <input
                id="expiry"
                type="text"
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 mt-4 sm:mt-0">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                id="cvv"
                type="password"
                placeholder="•••"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
