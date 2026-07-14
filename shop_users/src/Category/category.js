import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function Category() {
  const categories = [
    { name: 'Dresses', image: '/shop_users/assets/images/homepage-one/category-img/dresses.webp' },
    { name: 'Shirts', image: '/shop_users/assets/images/homepage-one/product-img/product-img-5.webp' },
    { name: 'Shoes', image: '/shop_users/assets/images/homepage-one/product-img/product-img-5.webp' }
  ];

  return (
    <>
      <Header />
      <section className="product-category my-5">
        <div className="container">
          <div className="section-title text-center mb-4">
            <h5>Our Categories</h5>
          </div>
          <div className="row g-4 justify-content-center">
            {categories.map((cat, idx) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                <div className="product-wrapper text-center border p-3 rounded shadow-sm">
                  <div className="wrapper-img mb-3" style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={cat.image} alt={cat.name} className="img-fluid h-100 object-fit-cover" />
                  </div>
                  <div className="wrapper-info">
                    <Link to="/category-product" className="wrapper-details fw-bold fs-5">{cat.name}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Category;
