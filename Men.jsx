import React from "react";
import { useCart } from "../Context/CartContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const products = [
  {
    id: 1,
    name: "Arrow Men's Cutaway Collar Shirt",
    images: [
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/OD_03_T11_2469K_A4_X_EC_0",
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/OD_03_T11_2469K_A4_X_EC_1",
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/OD_03_T11_2469K_A4_X_EC_3"
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 299,
  },
  {
    id: 2,
    name: "Arrow Slim Fit Formal Shirt",
    images: [
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/SD_03_T11_4127S_E1_X_EC_0",
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/SD_03_T11_4127S_E1_X_EC_4",
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/SD_03_T11_4127S_E1_X_EC_5"
    ],
    sizes: ["M", "L", "XL"],
    price: 799,
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20241127/7HQY/674704e2c148fa1b30ef9837/-473Wx593H-442711266-darkkhaki-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20241127/Rufm/674705650f47f80c87afaf40/-473Wx593H-442711266-darkkhaki-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20241127/Gy1J/674704cb0f47f80c87afa829/-473Wx593H-442711266-darkkhaki-MODEL3.jpg"
    ],
    sizes: ["S", "M", "L"],
    price: 599,
  },
    {
    id: 4,
    name: "Jacket",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20250117/HUg5/678a44930431850e0da3daf3/-473Wx593H-701063661-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20250117/6q9F/678a44a00431850e0da3dc74/-473Wx593H-701063661-black-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20250117/UNc5/678a44a00431850e0da3dc67/-473Wx593H-701063661-black-MODEL5.jpg"
      
    ],
    sizes: ["S", "M", "L"],
    price: 1599,
  },
    {
    id: 5,
    name: " Jeans Shorts",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4Z_PriI81A90zJA1f7imlnCyQMRdvYF7tnE0v7ZUxbsI2-xnWKZVT6a_12VgtxERzsokLjsuES8i1ijAGn1bB7JagFP-ylJTDYT4eiFF4yKZOJult1oOLQw",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT__N9rdyWpzVxjsdpG5B-8PB8jzLVgVGsNFerIYyonYcllo1KMxVJ92KDlpdBDSDQjhoE3SQ80tkI-VoboeSmkr-qj-6ApTQ",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSr84jI5DDg4t68NQJE8qGnlklyDPeiBWxLwO7ZXfAhGslGSJyxc9bWnZhrvKscTgWPtVz1ZX0-sGecCjHj4G9Xi3WeXvuv"
      
    ],
    sizes: ["S", "M", "L"],
    price: 599,
  },
    {
    id: 6,
    name: "Premium Cotton Pants",
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQDJiUzW2aZRXqwEOko_VOMk3XXI_cX30uZmMS1AhgwnXI_cxqTYCQrYr4zMOjJQoxyZBnhauYqZ4uOM-aLthiNggkqRFw1f4f3iSY2VaqrCeYgsysZ6sb",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJxaGHE4AiErDbBsbfU41MpwpvLDJZFkbHET-MRKJtRPadLZdzHfztQ_TZFAirHTXSVdlrL-HcwYn2JhA2I1zQODJ80KbPfw",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhufhF5b89c6P6kYYPqKquUU_HPLJL8PxrxxI1HwErWmsYWI8hc-0tihy6wo3biDALxnZEC2kWAIceRrOwwCe6el2r5XB1KQ"
    ],
    sizes: ["S", "M", "L","XL","XXL"],
    price: 599,
  },
    {
    id: 7,
    name: "shorts",
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsE2CS252qx4qd2EBx9TqT6VaJHX3ZdHyHoQpVST86OdBxhqC585-sk6NDN1ct_8BFzXtwd-XC1LOWAx6_xjEVVVUdzPE-_vG8wbdwNzXSEM1gfic8Hc3H1g",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7JQa--vX8RGyqAX2STFs6MrWkt23D8CuDopibv5twIvjBHroQzyfPo9QUFktCx8XIsmnt_DrllYF2gc4jS218coO9jYBuaINPrHf8UQkMUViYA8UoC5IF",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3TIzhJZ4BkB0oHmhWVt3PgOqBWGk6Bpv8KZWcQ2y2vRuaoO4i_44DejfHAqwmcRbQPOKE582soqdWOQCsQoqqKiu6NXNU3c4gtslD_OhN"
     
    ],
    sizes: ["S", "M", "L"],
    price: 599,
  },
];

export default function MensSection() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Men's Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <Carousel
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              autoPlay
              interval={3000}
              className="rounded-xl">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-[2/3] bg-white flex items-center justify-center rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`${product.name} ${idx}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300?text=Product+Image";
                      e.target.className = "max-h-full max-w-full object-contain bg-gray-100";
                    }}/>
                </div>
              ))}
            </Carousel>

            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-1">RS.{product.price.toFixed(2)}</p>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">Size</label>
              <select className="w-full p-2 border rounded-md">
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
