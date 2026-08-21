import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import Shop from './Shop/shop';
import Product from './Product/product';
import ProductDetail from './Product/product_details';
import Cart from './cart/cart';
import Checkout from './Auth/checkout';
import Login from './Auth/login';
import Register from './Auth/register';
import ChangePassword from './Auth/change_password';
import ForgotPassword from './Auth/forgot_password';
import { CookiesProvider } from 'react-cookie';
function MyRouter() {
    return (
        <CookiesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:categoryid" element={<Product />} />
                    <Route path="/product-detail/:productid" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/changepassword" element={<ChangePassword />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);