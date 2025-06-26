import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-amber-50 text-black text-2xl font-bold p-4 shadow-md">
      <div className="flex justify-between items-center">
        
        <div className="flex-shrink-0 flex items-center space-x-4">
          <Link to="/">
            <img
              src="https://cdn-modera-clinic.b-cdn.net/wp-content/uploads/2024/07/NEWMODERA-e1722970748355.png"
              alt="Shop Logo"
              className="h-15 w-22 "/>
          </Link>

          
          <Link to="/cart" className="relative inline-block text-black lg:hidden">
            <FaShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

 
        <div className="lg:hidden block">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        
        <ul
          className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 absolute lg:static top-20 left-0 w-full lg:w-auto bg-amber-50 lg:bg-transparent transition-all duration-300 ease-in-out z-40 ${
            menuOpen ? 'block p-4 space-y-4' : 'hidden lg:flex'
          }`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/men" onClick={() => setMenuOpen(false)}>Men</Link></li>
          <li><Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link></li>
          <li><Link to="/kid" onClick={() => setMenuOpen(false)}>Kid</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

       
        <div className="hidden lg:flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"/>
          </form>

          <Link to="/login" className="text-gray-700 hover:text-black">
            <FaUserCircle size={28} />
          </Link>

         
          <Link to="/cart" className="relative inline-block">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      
      <div className="lg:hidden mt-4">
        <form onSubmit={handleSearchSubmit} className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-full text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
