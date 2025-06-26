import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kid from './Pages/Kid';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Components/Cart';
import Contact from './Pages/Contact';
import ShoesWear from './Pages/ShoesWear';
import Ladies from './Pages/Ladies';
import Womensdaysell from './Pages/Womensdaysell';
import Payment from './Pages/Payment';
import HdfcOffers from './Components/HdfcOffers';
import Better from './Pages/Better';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kid" element={<Kid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ShoesWear" element={<ShoesWear/>} />
          <Route path="/Ladies" element={<Ladies />} />
          <Route path="/Womensdaysell" element={<Womensdaysell />} />
          <Route path="/Payment" element={< Payment/>} />
          <Route path="/Hdfc" element={< HdfcOffers/>} />
          <Route path="/Better" element={<Better/>}/>
          
          


        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
