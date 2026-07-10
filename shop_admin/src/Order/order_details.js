import React from "react";

export default class OrderDetails extends React.Component {
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
              <li className="sidebar-item">
                <a className="sidebar-link" href="site_users.html">
                  <i className="align-middle" data-feather="users" />{" "}
                  <span className="align-middle">Users</span>
                </a>
              </li>
              <li className="sidebar-item active">
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
                <a href="site_orders.html" className="btn btn-secondary">
                  <i className="align-middle me-1" data-feather="arrow-left" />{" "}
                  Back to Orders
                </a>
              </div>
              <h1 className="h3 mb-3">Order Details</h1>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0 text-dark">
                        <span className="text-bg-primary p-1">Summary</span> -
                        Order ID: <span id="hdr-order-id">--</span>
                      </h4>
                    </div>
                    <div className="card-body">
                      {/* Order Metadata Fields */}
                      <div className="row mb-4">
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Order ID
                          </span>
                          <strong className="text-dark" id="lbl-order-id">
                            --
                          </strong>
                        </div>
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Order Date
                          </span>
                          <strong className="text-dark" id="lbl-order-date">
                            --
                          </strong>
                        </div>
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Customer Name
                          </span>
                          <strong className="text-dark" id="lbl-customer-name">
                            --
                          </strong>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6 mb-3">
                          <span className="text-muted d-block small">
                            Address 1
                          </span>
                          <span className="text-dark" id="lbl-address-1">
                            --
                          </span>
                        </div>
                        <div className="col-md-6 mb-3">
                          <span className="text-muted d-block small">
                            Address 2
                          </span>
                          <span className="text-dark" id="lbl-address-2">
                            --
                          </span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">City</span>
                          <span className="text-dark" id="lbl-city">
                            --
                          </span>
                        </div>
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Pincode
                          </span>
                          <span className="text-dark" id="lbl-pincode">
                            --
                          </span>
                        </div>
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Remarks
                          </span>
                          <span className="text-dark italic" id="lbl-remarks">
                            --
                          </span>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Payment Mode
                          </span>
                          <span
                            className="badge bg-secondary py-1 px-2"
                            id="lbl-payment-mode"
                          >
                            --
                          </span>
                        </div>
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Payment Status
                          </span>
                          <span
                            className="badge py-1 px-2"
                            id="lbl-payment-status"
                          >
                            --
                          </span>
                        </div>
                        <div className="col-md-4 mb-3">
                          <span className="text-muted d-block small">
                            Order Status
                          </span>
                          <span
                            className="badge py-1 px-2"
                            id="lbl-order-status"
                          >
                            --
                          </span>
                        </div>
                      </div>
                      <hr className="my-4" />
                      {/* Order Items Table */}
                      <h4 className="text-dark mb-3">Order Items</h4>
                      <div className="table-responsive">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th className="text-end">Price</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-end">Total</th>
                            </tr>
                          </thead>
                          <tbody id="tbl-order-items">
                            {/* Populated dynamically via JS */}
                          </tbody>
                        </table>
                      </div>
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
