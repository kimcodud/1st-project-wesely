import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Product from './pages/ProductList/Product/Product';
import ProductCard from './pages/ProductList/Product/ProductCard';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
