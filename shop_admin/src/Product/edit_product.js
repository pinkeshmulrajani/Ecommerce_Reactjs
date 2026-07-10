import React from "react";
export default class EditProduct extends React.Component {
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
                    <div className="card-header">
                      <h4 className="card-title mb-0 text-dark">
                        <span className="text-bg-primary p-1">
                          Edit Product
                        </span>{" "}
                        - Product Management
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-9">
                          <form method="post" id="editProductForm">
                            {/* Row 1: Title, Price, Stock */}
                            <div className="row">
                              <div className="col-md-4 mb-3">
                                <label htmlFor="title" className="form-label">
                                  Title <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="title"
                                  name="title"
                                  placeholder="Enter product title"
                                  required
                                  minLength={3}
                                  maxLength={100}
                                  pattern="[a-zA-Z0-9\s\-]+"
                                  title="Title should contain letters, numbers, spaces or hyphens only"
                                  defaultValue="Sample Product"
                                />
                                <small className="form-text text-muted">
                                  Min 3 characters, Max 100 characters
                                </small>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label htmlFor="price" className="form-label">
                                  Price <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="price"
                                  name="price"
                                  placeholder={0.0}
                                  required
                                  step="0.01"
                                  min={0}
                                  title="Please enter a valid price"
                                  defaultValue="99.99"
                                />
                                <small className="form-text text-muted">
                                  Minimum value: 0
                                </small>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label htmlFor="stock" className="form-label">
                                  Stock <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="stock"
                                  name="stock"
                                  placeholder={0}
                                  required
                                  step={1}
                                  min={0}
                                  title="Please enter a valid stock quantity"
                                  defaultValue={50}
                                />
                                <small className="form-text text-muted">
                                  Minimum value: 0
                                </small>
                              </div>
                            </div>
                            {/* Row 2: Weight, Size, Photo */}
                            <div className="row">
                              <div className="col-md-4 mb-3">
                                <label htmlFor="weight" className="form-label">
                                  Weight (kg){" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="weight"
                                  name="weight"
                                  placeholder={0.0}
                                  required
                                  step="0.01"
                                  min={0}
                                  title="Please enter a valid weight"
                                  defaultValue="1.25"
                                />
                                <small className="form-text text-muted">
                                  Minimum value: 0
                                </small>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label htmlFor="size" className="form-label">
                                  Size <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="size"
                                  name="size"
                                  placeholder="e.g., S, M, L, XL"
                                  required
                                  minLength={1}
                                  maxLength={50}
                                  title="Please enter a valid size"
                                  defaultValue="M"
                                />
                                <small className="form-text text-muted">
                                  Max 50 characters
                                </small>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label htmlFor="photo" className="form-label">
                                  Change Photo
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="photo"
                                  name="photo"
                                  accept="image/*"
                                  title="Please select an image file"
                                />
                                <small className="form-text text-muted">
                                  Accepted formats: JPG, PNG, GIF, WebP
                                </small>
                              </div>
                            </div>
                            {/* Row 3: Details */}
                            <div className="row">
                              <div className="col-12 mb-3">
                                <label htmlFor="details" className="form-label">
                                  Details <span className="text-danger">*</span>
                                </label>
                                <textarea
                                  className="form-control"
                                  id="details"
                                  name="details"
                                  rows={4}
                                  placeholder="Enter product details and description"
                                  required
                                  minLength={10}
                                  maxLength={1000}
                                  title="Details should be between 10 and 1000 characters"
                                  defaultValue={
                                    "This is a sample product with detailed description."
                                  }
                                />
                                <small className="form-text text-muted">
                                  Min 10 characters, Max 1000 characters
                                </small>
                              </div>
                            </div>
                            {/* Row 4: Is Live */}
                            <div className="row">
                              <div className="col-12 mb-3">
                                <label className="form-label">
                                  Is Live?{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div>
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="is_live"
                                    id="yes"
                                    defaultValue={1}
                                    required
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="yes"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div>
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="is_live"
                                    id="no"
                                    defaultValue={0}
                                    required
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="no"
                                  >
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="feather-save" /> Save Changes
                                </button>
                                <button
                                  type="reset"
                                  className="btn btn-secondary"
                                >
                                  <i className="feather-x" /> Clear all
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-3">
                          <h4 className="mb-3">Existing Photo</h4>
                          <img
                            src="http://picsum.photos/200"
                            className="img-fluid rounded"
                            alt="Product Image"
                          />
                        </div>
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
