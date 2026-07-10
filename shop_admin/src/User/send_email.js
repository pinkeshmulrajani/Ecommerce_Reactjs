import React from "react";

export default class SendEmail extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
              <span className="sidebar-brand-text align-middle">
                Administrator
              </span>
            </a>
            <ul className="sidebar-nav">
              <li className="sidebar-header">Modules</li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="index.html">
                  <i className="align-middle" data-feather="sliders" />{" "}
                  <span className="align-middle">Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="site_list_category.html">
                  <i className="align-middle" data-feather="grid" />{" "}
                  <span className="align-middle">Categories</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="site_list_product.html">
                  <i className="align-middle" data-feather="shopping-bag" />{" "}
                  <span className="align-middle">Products</span>
                </a>
              </li>
              <li className="sidebar-item active">
                <a className="sidebar-link" href="site_users.html">
                  <i className="align-middle" data-feather="users" />{" "}
                  <span className="align-middle">Users</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="site_orders.html">
                  <i className="align-middle" data-feather="shopping-cart" />{" "}
                  <span className="align-middle">Orders</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle">
              <i className="hamburger align-self-center" />
            </a>
          </nav>
          <main className="content">
            <div className="container-fluid p-0">
              <div className="mb-3">
                <a href="site_users.html" className="btn btn-secondary">
                  <i className="align-middle me-1" data-feather="arrow-left" />{" "}
                  Back to Users
                </a>
              </div>
              <h1 className="h3 mb-3">Send Notification Email</h1>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0 text-dark">
                        <span className="text-bg-primary p-1">
                          Compose Email
                        </span>{" "}
                        - Communications
                      </h4>
                    </div>
                    <div className="card-body">
                      <form
                        method="post"
                        id="emailForm"
                        onsubmit="alert('Email has been queued for sending!'); return false;"
                      >
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Recipient Email{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="recipient@example.com"
                            required
                          />
                          <small className="form-text text-muted">
                            Provide a valid email address
                          </small>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">
                            Subject <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Enter subject header"
                            required
                            minLength={3}
                            maxLength={150}
                          />
                          <small className="form-text text-muted">
                            Min 3 characters, Max 150 characters
                          </small>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Message Body <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Type your message details here..."
                            required
                            minLength={10}
                            maxLength={2000}
                            defaultValue={""}
                          />
                          <small className="form-text text-muted">
                            Min 10 characters, Max 2000 characters
                          </small>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          <i
                            className="align-middle me-1"
                            data-feather="send"
                          />{" "}
                          Send Email
                        </button>
                        <button type="reset" className="btn btn-secondary">
                          <i
                            className="align-middle me-1"
                            data-feather="rotate-ccw"
                          />{" "}
                          Clear
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-12">
                  <p className="text-center">
                    Developed @ the easylearn academy
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
