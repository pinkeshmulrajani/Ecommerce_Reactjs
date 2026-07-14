import React from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function ForgotPassword() {
  return (
    <>
      <Header />
      <section className="login footer-padding">
        <div className="container">
          <div className="login-section">
            <div className="review-form" style={{ height: '360px' }}>
              <h5 className="comment-title">Recover my account</h5>
              <div className="review-inner-form">
                <div className="review-form-name">
                  <label htmlFor="email" className="form-label">Email Address**</label>
                  <input type="email" id="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="login-btn text-center">
                <button type="submit" className="shop-btn">Let do it</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ForgotPassword;
