import React, { useEffect } from "react"; // <-- Add useEffect
import { useCart } from "../Context/CartContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const products = [
  {
    id: 1,
    name: "Navy Blue Zariwork Soft Silk Saree",
    images: [
      "https://www.koskii.com/cdn/shop/files/koskii-navyblue-zariwork-softsilk-designer-saree-saus0039153_navyblue_1_5.jpg?v=1724147215&width=1800",
      "https://www.koskii.com/cdn/shop/files/koskii-navyblue-zariwork-softsilk-designer-saree-saus0039153_navyblue_1_6.jpg?v=1724147216&width=1800",
      "https://www.koskii.com/cdn/shop/files/koskii-navyblue-zariwork-softsilk-designer-saree-saus0039153_navyblue_1_9.jpg?v=1724147215&width=1800"

      ],
    sizes: ["S", "M", "L", "XL"],
    price: 999,
  },
  {
    id: 2,
    name: "Wine Elegance Saree",
    images: [
      "https://manyavar.scene7.com/is/image/manyavar/SB17777_422-WINE_101.26109_03-03-2025-18-01:650x900?&dpr=on,2",
      "https://manyavar.scene7.com/is/image/manyavar/SB17777_422-WINE_301.26130_03-03-2025-18-03:650x900?&dpr=on,2",
      "https://manyavar.scene7.com/is/image/manyavar/SB17777_422-WINE_401.26113_03-03-2025-18-01:650x900"
      ],
    sizes: ["M", "L", "XL"],
    price: 799,
  },
    {
    id: 3,
    name: "Onion Pink Zariwork Soft Silk Saree",
    images: [
      "https://www.koskii.com/cdn/shop/files/koskii-onionpink-zariwork-softsilk-designer-saree-saus0040033_onionpink_1_6.jpg?v=1748425019&width=1800",
      "https://www.koskii.com/cdn/shop/files/koskii-onionpink-zariwork-softsilk-designer-saree-saus0040033_onionpink_1_7.jpg?v=1748425019&width=1800",
      "https://www.koskii.com/cdn/shop/files/koskii-onionpink-zariwork-softsilk-designer-saree-saus0040033_onionpink_1_2.jpg?v=1748425019&width=1800"
     ],
    sizes: ["S", "M", "L"],
    price: 1599,
  },
  {
    id: 4,
    name: "MELANGE Floral Print Straight Kurta",
    images: [
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/AW24KSSE99F/AW24KSSE99F_BLACK/AW24KSSE99F_BLACK.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/AW24KSSE99F/AW24KSSE99F_BLACK/AW24KSSE99F_BLACK_alt1.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/AW24KSSE99F/AW24KSSE99F_BLACK/AW24KSSE99F_BLACK_alt2.jpg_2000Wx3000H"
     
       ],
    sizes: ["S", "M", "L"],
    price: 599,
  },
   
    {
    id: 5,
    name: "Fabmora Kurta ",
    images: [
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/PREKSHAKUR1001P/PREKSHAKUR1001P_PINK/PREKSHAKUR1001P_PINK.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/PREKSHAKUR1001P/PREKSHAKUR1001P_PINK/PREKSHAKUR1001P_PINK_alt1.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/PREKSHAKUR1001P/PREKSHAKUR1001P_PINK/PREKSHAKUR1001P_PINK_alt3.jpg_2000Wx3000H"
        
    ],
    sizes: ["S", "M", "L"],
    price: 1599,
  },
    {
    id: 6,
    name: "Printed Calf Length Cotton Women's Kurta ",
    images: [
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24SIMBA/S24SIMBA_MULTI/S24SIMBA_MULTI.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24SIMBA/S24SIMBA_MULTI/S24SIMBA_MULTI_alt1.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/S24SIMBA/S24SIMBA_MULTI/S24SIMBA_MULTI_alt2.jpg_2000Wx3000H"
       ],
    sizes: ["S", "M", "L","XL","XXL"],
    price: 999,
  },
    {
    id: 7,
    name: "Solid Blended Fabric Regular Fit Women's Shirt",
    images: [
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/S25VHFRGFP85790/S25VHFRGFP85790_LIGHT_OLIVE/S25VHFRGFP85790_LIGHT_OLIVE.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/S25VHFRGFP85790/S25VHFRGFP85790_LIGHT_OLIVE/S25VHFRGFP85790_LIGHT_OLIVE_alt1.jpg_2000Wx3000H",
      "https://images-magento.shoppersstop.com/pub/media/catalog/product/S25VHFRGFP85790/S25VHFRGFP85790_LIGHT_OLIVE/S25VHFRGFP85790_LIGHT_OLIVE_alt2.jpg_2000Wx3000H"
        
    ],
    sizes: ["S", "M", "L"],
    price: 499,
  },
];


function Women() {
  const { addToCart } = useCart();

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Women's Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
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
                  className="w-full aspect-[2/3] bg-white flex items-center justify-center rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300?text=Product+Image";
                      e.target.className =
                        "max-h-full max-w-full object-contain bg-gray-100";
                    }}
                  />
                </div>
              ))}
            </Carousel>

            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-1">RS.{product.price.toFixed(2)}</p>

            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">Size</label>
              <select className="w-full p-2 border rounded-md">
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
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

export default Women;








