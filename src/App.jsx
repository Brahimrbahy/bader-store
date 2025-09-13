import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Product from './Product';

const App = () => {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
