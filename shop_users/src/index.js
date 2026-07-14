import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Page Components
import Home from './Home/home';
import Shop from './Shop/shop';
import Login from './Auth/login';
import Register from './Auth/register';
import ChangePassword from './Auth/change_password';
import ForgotPassword from './Auth/forgot_password';
import Checkout from './Auth/checkout';
import Category from './Category/category';
import SiteCategoryProduct from './Category/site_category_product';
import Product from './Product/product';
import ProductDetails from './Product/product_details';
import Cart from './cart/cart';

export function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category-product" element={<SiteCategoryProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyRouter />
);
