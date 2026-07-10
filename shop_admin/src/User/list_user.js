import React from "react";

export default class ListUser extends React.Component {
    render() {
        return(
            <div className="wrapper">
  <nav id="sidebar" className="sidebar js-sidebar">
    <div className="sidebar-content js-simplebar">
      <a className="sidebar-brand" href="index.html">
        <span className="sidebar-brand-text align-middle">
          Administrator
        </span>
      </a>
      <ul className="sidebar-nav">
        <li className="sidebar-header">
          Modules
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="index.html">
            <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="site_list_category.html">
            <i className="align-middle" data-feather="grid" /> <span className="align-middle">Categories</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="site_list_product.html">
            <i className="align-middle" data-feather="shopping-bag" /> <span className="align-middle">Products</span>
          </a>
        </li>
        <li className="sidebar-item active">
          <a className="sidebar-link" href="site_users.html">
            <i className="align-middle" data-feather="users" /> <span className="align-middle">Users</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="site_orders.html">
            <i className="align-middle" data-feather="shopping-cart" /> <span className="align-middle">Orders</span>
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
        <h1 className="h3 mb-3">Users Directory</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0 text-dark">
                  <span className="text-bg-primary p-1">Registered Users</span> - User management
                </h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3</td>
                        <td>ankit3385@gmail.com</td>
                        <td>1234567890</td>
                        <td>
                          <a href="site_send_email.html?email=ankit3385@gmail.com" className="btn btn-sm btn-info text-white">
                            <i className="align-middle me-1" data-feather="mail" /> Send Email
                          </a>
                          <button className="btn btn-sm btn-secondary" onclick="alert('Viewing history of user 3 is not implemented yet.');">
                            <i className="align-middle me-1" data-feather="clock" /> View History
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>ankit3395@gmail.com</td>
                        <td>1234567891</td>
                        <td>
                          <a href="site_send_email.html?email=ankit3395@gmail.com" className="btn btn-sm btn-info text-white">
                            <i className="align-middle me-1" data-feather="mail" /> Send Email
                          </a>
                          <button className="btn btn-sm btn-secondary" onclick="alert('Viewing history of user 4 is not implemented yet.');">
                            <i className="align-middle me-1" data-feather="clock" /> View History
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>ankit33855@gmail.com</td>
                        <td>1234567895</td>
                        <td>
                          <a href="site_send_email.html?email=ankit33855@gmail.com" className="btn btn-sm btn-info text-white">
                            <i className="align-middle me-1" data-feather="mail" /> Send Email
                          </a>
                          <button className="btn btn-sm btn-secondary" onclick="alert('Viewing history of user 5 is not implemented yet.');">
                            <i className="align-middle me-1" data-feather="clock" /> View History
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>dibynyjuc@mailinator.com</td>
                        <td>+1 (665) 326-9563</td>
                        <td>
                          <a href="site_send_email.html?email=dibynyjuc@mailinator.com" className="btn btn-sm btn-info text-white">
                            <i className="align-middle me-1" data-feather="mail" /> Send Email
                          </a>
                          <button className="btn btn-sm btn-secondary" onclick="alert('Viewing history of user 6 is not implemented yet.');">
                            <i className="align-middle me-1" data-feather="clock" /> View History
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>ram@gmail.com</td>
                        <td>+1 (762) 436-8979</td>
                        <td>
                          <a href="site_send_email.html?email=ram@gmail.com" className="btn btn-sm btn-info text-white">
                            <i className="align-middle me-1" data-feather="mail" /> Send Email
                          </a>
                          <button className="btn btn-sm btn-secondary" onclick="alert('Viewing history of user 7 is not implemented yet.');">
                            <i className="align-middle me-1" data-feather="clock" /> View History
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>vybiqiweby@mailinator.com</td>
                        <td>+1 (627) 649-4204</td>
                        <td>
                          <a href="site_send_email.html?email=vybiqiweby@mailinator.com" className="btn btn-sm btn-info text-white">
                            <i className="align-middle me-1" data-feather="mail" /> Send Email
                          </a>
                          <button className="btn btn-sm btn-secondary" onclick="alert('Viewing history of user 8 is not implemented yet.');">
                            <i className="align-middle me-1" data-feather="clock" /> View History
                          </button>
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
            <p className="text-center">Developed @ the easylearn academy</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
        );
    }
}