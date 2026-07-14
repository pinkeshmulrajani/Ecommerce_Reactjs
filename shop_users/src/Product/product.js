import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function Product() {
  const products = [
    { id: 1, name: 'Tom Checked shirt', price: '$26.99', image: '/shop_users/assets/images/homepage-one/product-img/product-img-5.webp' },
    { id: 2, name: 'Leather Dress Shoes', price: '$13.99', image: '/shop_users/assets/images/homepage-one/product-img/product-img-5.webp' }
  ];

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h4>Products</h4>
          </div>
          {products.map((product) => (
            <div className="col-lg-3 col-sm-6 mb-4" key={product.id}>
              <div className="product-wrapper border rounded p-3 shadow-sm text-center">
                <div className="product-img mb-3" style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} className="img-fluid h-100 object-fit-cover" />
                  <div className="product-cart-items mt-2">
                    <Link to="/" className="favourite cart-item text-danger">
                      <i className="fa fa-heart fa-lg"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-description">
                    <Link to="/product-details" className="product-details fw-bold d-block mb-1">{product.name}</Link>
                    <div className="price mb-3">
                      <span className="new-price text-primary fw-bold">{product.price}</span>
                    </div>
                  </div>
                </div>
                <div className="product-cart-btn">
                  <Link to="/cart" className="product-btn btn btn-outline-dark btn-sm w-100">Add To Cart</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
