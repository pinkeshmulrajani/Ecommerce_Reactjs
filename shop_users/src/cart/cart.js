import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function Cart() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="cart-section table-responsive">
          <table className="table">
            <tbody>
              <tr className="table-row table-top-row">
                <td className="table-wrapper wrapper-product">
                  <h5 className="table-heading">PRODUCT</h5>
                </td>
                <td className="table-wrapper text-center">
                  <h5 className="table-heading">PRICE</h5>
                </td>
                <td className="table-wrapper text-center">
                  <h5 className="table-heading">QUANTITY</h5>
                </td>
                <td className="table-wrapper wrapper-total text-center">
                  <h5 className="table-heading">TOTAL</h5>
                </td>
                <td className="table-wrapper text-center">
                  <h5 className="table-heading">ACTION</h5>
                </td>
              </tr>
              <tr className="table-row ticket-row">
                <td className="table-wrapper wrapper-product">
                  <div className="wrapper d-flex align-items-center">
                    <div className="wrapper-img me-3" style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
                      <img src="/shop_users/assets/images/homepage-one/product-img/product-img-1.webp" alt="img" className="img-fluid" />
                    </div>
                    <div className="wrapper-content">
                      <h5 className="heading mb-0">Classic Oxford Shirt</h5>
                    </div>
                  </div>
                </td>
                <td className="table-wrapper text-center align-middle">
                  <h5 className="heading mb-0">$10.00</h5>
                </td>
                <td className="table-wrapper text-center align-middle">
                  <h5 className="heading mb-0">1</h5>
                </td>
                <td className="table-wrapper wrapper-total text-center align-middle">
                  <h5 className="heading mb-0">$10.00</h5>
                </td>
                <td className="table-wrapper text-center align-middle">
                  <button className="btn btn-sm btn-outline-danger">Remove</button>
                </td>
              </tr>
              <tr className="table-row ticket-row">
                <td className="table-wrapper wrapper-product align-middle" colSpan="3">
                  <span className="fs-3 fw-bold">TOTAL</span>
                </td>
                <td className="table-wrapper text-center align-middle" colSpan="2">
                  <span className="fs-3 fw-bold">$10.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wishlist-btn cart-btn mt-4">
          <Link to="/checkout" className="shop-btn btn btn-dark">Proceed to Checkout</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
