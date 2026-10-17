// import './App.css'
import {  Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/home/HomePage.jsx";
import Signup from "./pages/signup/Signup.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ProductsPage from "./pages/products/ProductsPage.jsx";
import PricingPage from "./pages/pricing/PricingPage.jsx";
import SupportPage from "./pages/support/SupportPage.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";



function App() {
  
  return (
    <>
    
     <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes> 
    <Footer />

    </>
  )
}

export default App
