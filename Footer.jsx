import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-400">ModeEra</h2>
          <p className="text-sm text-gray-400 mb-4">
            Elevate your style with our latest collections for Men, Women & Kids.
            Trendy. Comfortable. Affordable.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &copy; ModeEra. All rights reserved.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/Men" className="hover:text-white transition">Men</a></li>
            <li><a href="/Women" className="hover:text-white transition">Women</a></li>
            <li><a href="/Kid" className="hover:text-white transition">Kids</a></li>
            <li><a href="/Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get updates on new arrivals & offers.
          </p>
          {/* <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-black rounded-md focus:outline-none"/>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md text-sm font-semibold transition">
              Subscribe
            </button>
          </form> */}
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-pink-600 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-sky-500 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition">
              <FaYoutube size={18} />
            </a>
          </div>

          <div className="mt-6">
            <h4 className="text-sm mb-2 text-gray-300">Download Our App</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-32 cursor-pointer hover:opacity-80"/>
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-32 cursor-pointer hover:opacity-80"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
