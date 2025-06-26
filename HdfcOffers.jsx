import React from 'react';
import { FaCreditCard, FaTags, FaMoneyCheckAlt } from 'react-icons/fa';

function HdfcOffers() {
  const offers = [
    {
      icon: <FaCreditCard className="text-blue-600 text-3xl mb-2" />,
      title: '10% Instant Discount',
      description: 'Get 10% off on HDFC Credit/Debit Cards on orders above ₹2999.',
    },
    {
      icon: <FaMoneyCheckAlt className="text-green-600 text-3xl mb-2" />,
      title: 'No Cost EMI',
      description: 'Avail 3, 6, or 9-month no cost EMI on HDFC credit cards.',
    },
    {
      icon: <FaTags className="text-purple-600 text-3xl mb-2" />,
      title: 'Festival Cashback',
      description: 'Flat ₹500 cashback on your first transaction using HDFC NetBanking.',
    },
  ];

  return (
    <section className="bg-white py-10 px-4 md:px-10 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">💳 HDFC Bank Offers</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-amber-50 text-center">
              <div className="flex justify-center">{offer.icon}</div>
              <h3 className="text-xl font-semibold mt-2">{offer.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HdfcOffers;
