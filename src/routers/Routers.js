import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import About from "../pages/About";
import CarDetails from "../pages/CarDetails";
import CarListing from "../pages/CarListing";
import Home from "../pages/Home";

import Contact from '../pages/Contact';
import NotFound from "../pages/NotFound";

const Routers = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<CarListing />} />
      <Route path="/products/:slug" element={<CarDetails />} />
      
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/*" element={<NotFound />} />
    </Routes>
  
  )
}

export default Routers