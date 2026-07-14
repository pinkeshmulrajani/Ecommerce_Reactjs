import React from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

function ChangePassword() {
  return (
    <>
      <Header />
      <section className="login footer-padding">
        <div className="container">
          <div className="login-section">
            <div className="review-form" style={{ height: '560px' }}>
              <h5 className="comment-title">Change Password</h5>
              <div className="review-inner-form">
                <div className="review-form-name">
                  <label htmlFor="current_password" className="form-label">Current Password*</label>
                  <input type="password" id="current_password" className="form-control" placeholder="Current Password" />
                </div>
                <div className="review-form-name">
                  <label htmlFor="new_password" className="form-label">New Password*</label>
                  <input type="password" id="new_password" className="form-control" placeholder="New Password" />
                </div>
                <div className="review-form-name">
                  <label htmlFor="confirm_new_password" className="form-label">Confirm New Password*</label>
                  <input type="password" id="confirm_new_password" className="form-control" placeholder="Confirm New Password" />
                </div>
              </div>
              <div className="login-btn text-center">
                <button type="submit" className="shop-btn">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ChangePassword;
