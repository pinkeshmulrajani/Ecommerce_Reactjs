import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function Shop() {
  const products = [
    { id: 1, name: 'Tom Checked shirt', price: '$26.99', image: '/shop_users/assets/images/homepage-one/product-img/product-img-5.webp' },
    { id: 2, name: 'Leather Dress Shoes', price: '$13.99', image: '/shop_users/assets/images/homepage-one/product-img/product-img-5.webp' }
  ];

  return (
    <>
      <Header />
      <section className="product-category my-5">
        <div className="container">
          <div className="section-title">
            <h5>Our Categories</h5>
          </div>
          <div className="category-section">
            <div className="product-wrapper" data-aos="fade-right" data-aos-duration="100">
              <div className="wrapper-img">
                <img src="/shop_users/assets/images/homepage-one/category-img/dresses.webp" alt="dress" />
              </div>
              <div className="wrapper-info">
                <Link to="/category-product" className="wrapper-details">Dresses</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
