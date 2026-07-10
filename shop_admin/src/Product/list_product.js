import React from "react";

export default class ListProduct extends React.Component {
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
                <a className="sidebar-link">
                  <span className="align-middle text-white">Dashboards</span>
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
              <h1 className="h3 mb-3" />
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h4 className="card-title mb-0 text-dark">
                        <span className="text-bg-primary p-1">
                          Existing Products
                        </span>{" "}
                        - Product Management
                      </h4>
                      <button type="submit"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="feather-plus" /> Add Product
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>Product ID</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Stock</th>
                              <th>Weight</th>
                              <th>Size</th>
                              <th>Photo</th>
                              <th>Is Live</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Premium Headphones</td>
                              <td>$99.99</td>
                              <td>45</td>
                              <td>0.35 kg</td>
                              <td>Standard</td>
                              <td>
                                <a
                                  data-fancybox="gallery"
                                  href="https://picsum.photos/id/1035/1200/800"
                                >
                                  <img
                                    src="http://picsum.photos/50"
                                    className="img-fluid rounded"
                                    alt="Product Image"
                                  />
                                </a>
                              </td>
                              <td>
                                <span className="badge bg-success">Yes</span>
                              </td>
                              <td>
                                <a
                                  href="site_edit_product.html"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="feather-edit" /> Edit
                                </a>
                                <button className="btn btn-sm btn-danger">
                                  <i className="feather-trash" /> Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Wireless Mouse</td>
                              <td>$29.99</td>
                              <td>120</td>
                              <td>0.15 kg</td>
                              <td>M</td>
                              <td>
                                <a
                                  data-fancybox="gallery"
                                  href="https://picsum.photos/id/1050/1200/800"
                                >
                                  <img
                                    src="http://picsum.photos/50"
                                    className="img-fluid rounded"
                                    alt="Product Image"
                                  />
                                </a>
                              </td>
                              <td>
                                <span className="badge bg-success">Yes</span>
                              </td>
                              <td>
                                <a
                                  href="site_edit_product.html"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="feather-edit" /> Edit
                                </a>
                                <button className="btn btn-sm btn-danger">
                                  <i className="feather-trash" /> Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>USB-C Cable</td>
                              <td>$15.99</td>
                              <td>200</td>
                              <td>0.05 kg</td>
                              <td>2M</td>
                              <td>
                                <a
                                  data-fancybox="gallery"
                                  href="https://picsum.photos/id/1065/1200/800"
                                >
                                  <img
                                    src="http://picsum.photos/50"
                                    className="img-fluid rounded"
                                    alt="Product Image"
                                  />
                                </a>
                              </td>
                              <td>
                                <span className="badge bg-danger">No</span>
                              </td>
                              <td>
                                <a
                                  href="site_edit_product.html"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="feather-edit" /> Edit
                                </a>
                                <button className="btn btn-sm btn-danger">
                                  <i className="feather-trash" /> Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Portable Speaker</td>
                              <td>$79.99</td>
                              <td>35</td>
                              <td>0.8 kg</td>
                              <td>Standard</td>
                              <td>
                                <a
                                  data-fancybox="gallery"
                                  href="https://picsum.photos/id/1080/1200/800"
                                >
                                  <img
                                    src="http://picsum.photos/50"
                                    className="img-fluid rounded"
                                    alt="Product Image"
                                  />
                                </a>
                              </td>
                              <td>
                                <span className="badge bg-success">Yes</span>
                              </td>
                              <td>
                                <a
                                  href="site_edit_product.html"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="feather-edit" /> Edit
                                </a>
                                <button className="btn btn-sm btn-danger">
                                  <i className="feather-trash" /> Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Phone Stand</td>
                              <td>$24.99</td>
                              <td>85</td>
                              <td>0.2 kg</td>
                              <td>L</td>
                              <td>
                                <a
                                  data-fancybox="gallery"
                                  href="https://picsum.photos/id/1095/1200/800"
                                >
                                  <img
                                    src="http://picsum.photos/50"
                                    className="img-fluid rounded"
                                    alt="Product Image"
                                  />
                                </a>
                              </td>
                              <td>
                                <span className="badge bg-success">Yes</span>
                              </td>
                              <td>
                                <a
                                  href="site_edit_product.html"
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="feather-edit" /> Edit
                                </a>
                                <button className="btn btn-sm btn-danger">
                                  <i className="feather-trash" /> Delete
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
                  <p className="text-center">
                    Developed © the easylearn academy
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
