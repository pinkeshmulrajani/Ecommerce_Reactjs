import React from "react";

export default class ListOrder extends React.Component {
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
              <h1 className="h3 mb-3">Order Management</h1>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0 text-dark">
                        <span className="text-bg-primary p-1">
                          Existing Orders
                        </span>{" "}
                        - Orders list
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Date</th>
                              <th>Customer</th>
                              <th>Shipping Address</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>46</td>
                              <td>22-06-2026</td>
                              <td>ff</td>
                              <td>f, tr, dr - 222255</td>
                              <td>$125,000</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <a
                                  href="site_order_detail.html?id=46"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i
                                    className="align-middle"
                                    data-feather="eye"
                                  />{" "}
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>45</td>
                              <td>24-04-2026</td>
                              <td>dharm</td>
                              <td>anand, 1, anand - 364715</td>
                              <td>$125,100</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <a
                                  href="site_order_detail.html?id=45"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i
                                    className="align-middle"
                                    data-feather="eye"
                                  />{" "}
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>42</td>
                              <td>17-04-2026</td>
                              <td>ankit_patel</td>
                              <td>
                                eva_surbhi, opp_akshwarwadi_temple, bhavnagar -
                                364001
                              </td>
                              <td>$1,300</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <a
                                  href="site_order_detail.html?id=42"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i
                                    className="align-middle"
                                    data-feather="eye"
                                  />{" "}
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>21</td>
                              <td>31-12-2024</td>
                              <td>Darrel</td>
                              <td>
                                58 Clarendon Extension, Fugiat id sit verita,
                                Maxime neque non sim
                              </td>
                              <td>$125,200</td>
                              <td>
                                <span className="badge bg-danger">
                                  Cancelled
                                </span>
                              </td>
                              <td>
                                <a
                                  href="site_order_detail.html?id=21"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i
                                    className="align-middle"
                                    data-feather="eye"
                                  />{" "}
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>01-10-2024</td>
                              <td>Ankit</td>
                              <td>105 eva surbhi, hill drive, bhavnagar</td>
                              <td>$1,767</td>
                              <td>
                                <span className="badge bg-primary">
                                  Shipped
                                </span>
                              </td>
                              <td>
                                <a
                                  href="site_order_detail.html?id=8"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i
                                    className="align-middle"
                                    data-feather="eye"
                                  />{" "}
                                  View Detail
                                </a>
                              </td>
                            </tr>
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
