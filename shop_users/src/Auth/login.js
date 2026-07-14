import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function Login() {
  return (
    <>
      <Header />
      <section className="login footer-padding">
        <div className="container">
          <div className="login-section">
            <div className="review-form" style={{ height: '560px' }}>
              <h5 className="comment-title">Log In</h5>
              <div className="review-inner-form">
                <div className="review-form-name">
                  <label htmlFor="email" className="form-label">Email Address**</label>
                  <input type="email" id="email" className="form-control" placeholder="Email" />
                </div>
                <div className="review-form-name">
                  <label htmlFor="password" className="form-label">Password*</label>
                  <input type="password" id="password" className="form-control" placeholder="Password" />
                </div>
                <div className="review-form-name checkbox">
                  <div className="checkbox-item">
                    <input type="checkbox" />
                    <span className="address">Remember Me</span>
                  </div>
                  <div className="forget-pass">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                </div>
              </div>
              <div className="login-btn text-center">
                <button type="submit" className="shop-btn">Log In</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
