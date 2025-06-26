import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const bannerImagesTop = [
  "https://images-static.nykaa.com/uploads/6b466d1d-1adf-403c-9847-4f68a3e773ca.jpg?tr=w-1800,cm-pad_resize",
  "https://assets.tatacliq.com/medias/sys_master/images/65585340710942.jpg",
  "https://cmsimages.shoppersstop.com/Fashor_Biba_and_more_web_0bcf7628b5/Fashor_Biba_and_more_web_0bcf7628b5.png",
];

const bannerImagesBottom = [
  "https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg",
  "https://cmsimages.shoppersstop.com/axis_bank_strip_web02_aeee6a2751/axis_bank_strip_web02_aeee6a2751.png",
  "https://cmsimages.shoppersstop.com/New_10_strip_web_7ea5414947/New_10_strip_web_7ea5414947.png",
];

const Images = [
  {
    id: 1,
    src: 'https://www.westside.com/cdn/shop/files/Past-Forward_M_-Web_40296fe1-a921-4867-be33-6dba15f6df4f.jpg?v=1749741384',
    alt: 'Big Sale',
  },
  {
    id: 2,
    src: 'https://www.westside.com/cdn/shop/files/Co-Ords-Web_6d6ab3f8-aa9f-4bff-b562-4793b23841c0.jpg?v=1749792966',
    alt: 'New Arrivals',
  },
  {
    id: 3,
    src: 'https://www.westside.com/cdn/shop/files/HopBaby-Web_8447ebee-14ef-4123-87db-dc4eca115e0e.jpg?v=1749808895',
    alt: 'Free Shipping',
  },
];

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="pb-5 bg-white w-full">
      {/* Marquee Banner - Only element with side spacing */}
      <div className="w-full text-center bg-black py-2 overflow-hidden relative px-4">
        <p className="text-white font-bold text-sm md:text-lg animate-marquee whitespace-nowrap">
          50% OFF for New Users! Use code <span className="underline">WELCOME50</span> | Limited Time Offer 
        </p>
      </div>

      {/* Hero Section - Full width */}
      <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.westside.com/cdn/shop/files/Polo-Web_5f2d056f-0e57-4ed1-b839-325148538f6c.jpg?v=1749792532"
          alt="Shopping background"
          loading="lazy"
        />

        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => navigate('/Better')}
            className="bg-black bg-opacity-60 text-white font-semibold 
                       text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
                       py-1 sm:py-2 md:py-3 lg:py-4 
                       px-3 sm:px-4 md:px-6 lg:px-8 
                       rounded-lg 
                       hover:bg-opacity-80 
                       transition duration-300"
          >
            Explore Shop Now
          </button>
        </div>
      </div>

      {/* Top Banner Carousel - Full width */}
      <div className="w-full mb-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          stopOnHover
          showIndicators={true}
          swipeable
          emulateTouch
          className="w-full"
        >
          {bannerImagesTop.map((src, idx) => (
            <div key={idx} className="h-32 sm:h-40 md:h-52 lg:h-64 xl:h-72 w-full">
              <img
                src={src}
                alt={`Promo Banner ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Exclusive Offers - Full width */}
      <section className="w-full mt-6 sm:mt-8 md:mt-10">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Exclusive offers</h1>
        <div className="mt-4 sm:mt-6 md:mt-8 w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            stopOnHover
            className="w-full"
          >
            {Images.map((img) => (
              <div key={img.id} className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Our Products - Full width with internal spacing only */}
      <section className="w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8">
          {[
            {
              title: 'Men',
              image: 'https://theformalclub.in/cdn/shop/articles/How_to_Style_a_Button_Down_Shirt_15504379-467f-46f7-924c-44bb342a7beb.jpg?v=1747807947&width=2000',
              path: '/men',
            },
            {
              title: 'Women',
              image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
              path: '/women',
            },
            {
              title: 'Kid',
              image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600',
              path: '/kid',
            },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 sm:h-56 md:h-64 object-cover" 
                loading="lazy"
              />
              <div className="p-3 sm:p-4 text-center font-semibold text-base sm:text-lg md:text-xl">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Strip - Full width */}
      <div className="w-full mt-8 sm:mt-10 md:mt-12">
        <img
          src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/MAX-Friday/MAX2.O/Uber-HP-Desktop-PromoStrip3-ModularBlocks-3-Banner1-06JUN25.png"
          alt="Cashback Offer"
          className="w-full h-24 sm:h-32 md:h-40 object-cover"
          loading="lazy"
        />
      </div>

      {/* Ethnic Wear - Full width with internal spacing only */}
      <section className="w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Ethnic Wear</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8">
          {[
            {
              image: 'https://m.media-amazon.com/images/G/31/MA2025/BOTW/BOTW_Ethnic_1236x1110._SX1035_QL85_FMpng_.png',
              path: '/men',
            },
            {
              image: 'https://nyrafashion.in/cdn/shop/files/bg2---Copy_2.webp?v=1721462836&width=3840',
              path: '/women',
            },
            {
              image: 'https://m.media-amazon.com/images/G/31/MA2025/SS25/Hero/Kurtas_and_Sets__1236x1110._SX1035_QL85_FMpng_.png',
              path: '/kid',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={item.image} 
                alt="" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footwear & Accessories - Full width with internal spacing only */}
      <section className="w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Foot Wear And Accessories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8">
          {[
            {
              image: 'https://img.freepik.com/premium-vector/free-vector-travel-sale-flyer-template_782274-222.jpg',
              path: '/ShoesWear',
            },
            {
              image: 'https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-3736.jpg',
              path: '/women',
            },
            {
              image: 'https://img.freepik.com/premium-vector/modern-sale-banner-template_1340-15581.jpg',
              path: '/Ladies',
            },
            {
              image: 'https://img.freepik.com/premium-vector/women-s-day-discount-modern-green-banner-with-women-s-shoe_7993-2029.jpg',
              path: '/Womensdaysell',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={item.image} 
                alt="" 
                className="w-full h-36 sm:h-48 md:h-56 object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner Carousel - Full width */}
      <div className="w-full mt-8 sm:mt-10 md:mt-12">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          stopOnHover
          showIndicators={true}
          swipeable
          emulateTouch
          className="w-full"
        >
          {bannerImagesBottom.map((src, idx) => (
            <div
              key={idx}
              className="w-full h-24 sm:h-32 md:h-40 cursor-pointer"
              onClick={() => navigate('/hdfc')}
            >
              <img 
                src={src} 
                alt={`Offer ${idx + 1}`} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Shop By Category - Full width with internal spacing only */}
      <section className="w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">SHOP BY CATEGORY</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8">
          {[
            'https://img.perniaspopupshop.com/HOMEPAGE_IMAGES/MEN/22_May_25/Spring-Break-Men-desk-DOD-220525.jpg',
            'https://img.perniaspopupshop.com/HOMEPAGE_IMAGES/MEN/22_May_25/Kasbah-Clothing-desk-DOD-220525.jpg',
            'https://img.perniaspopupshop.com/catalog/product/a/d/ADGP0824211_1.jpg?impolicy=detailimageprod',
            'https://img.perniaspopupshop.com/HOMEPAGE_IMAGES/WOMEN/17_Jun_25/Masaba-dod-desk-17-0625.jpg',
            'https://img.perniaspopupshop.com/HOMEPAGE_IMAGES/KIDSWEAR/26_May_25/MINI-TRAILS-curations-26-05-25-desk.jpg',
            'https://img.perniaspopupshop.com/catalog/product/m/d/MDAC042515_1.jpg?impolicy=listingimagedesktop',
          ].map((src, idx) => (
            <div
              key={idx}
              className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={src} 
                alt={`Category ${idx + 1}`} 
                className="w-full h-36 sm:h-48 md:h-56 object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Shop With Us - Full width with internal spacing only */}
      <section className="w-full mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          {[
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/869/869636.png',
              title: 'Free Shipping',
              desc: 'On all orders over ₹499',
            },
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/891/891462.png',
              title: 'Easy Returns',
              desc: '7-day hassle-free returns',
            },
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/597/597177.png',
              title: '24/7 Support',
              desc: 'Dedicated customer support',
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" 
                loading="lazy"
              />
              <h3 className="font-bold text-base sm:text-lg md:text-xl">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;