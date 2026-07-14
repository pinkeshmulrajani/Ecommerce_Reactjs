import React from "react";

export default class Dashboard extends React.Component {
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
                            <li className="sidebar-header">
                                Modules
                            </li>
                            <li className="sidebar-item active">
                                <a className="sidebar-link" href="site_dashboard.html">
                                    <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="site_category.html">
                                    <i className="align-middle" data-feather="grid" /> <span className="align-middle">Categories</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="site_product.html">
                                    <i className="align-middle" data-feather="shopping-bag" /> <span className="align-middle">Products</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
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
                            <h1 className="h3 mb-3">Dashboard Overview</h1>
                            <div className="row">
                                <div className="col-sm-6 col-xl-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Categories</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="grid" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">25</h1>
                                            <div className="mb-0">
                                                <span className="text-muted">Total active product categories</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Products</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="shopping-bag" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">150</h1>
                                            <div className="mb-0">
                                                <span className="text-muted">Total items in active inventory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Users</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="users" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">138</h1>
                                            <div className="mb-0">
                                                <span className="text-muted">Registered customers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xl-3 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Daily Orders</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="clock" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">12</h1>
                                            <div className="mb-0">
                                                <span className="badge badge-success-light">+8.2%</span>
                                                <span className="text-muted">Since yesterday</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Weekly Orders</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="calendar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">85</h1>
                                            <div className="mb-0">
                                                <span className="badge badge-success-light">+12.5%</span>
                                                <span className="text-muted">Since last week</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Monthly Orders</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="archive" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">340</h1>
                                            <div className="mb-0">
                                                <span className="badge badge-danger-light">-2.3%</span>
                                                <span className="text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-3 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">Yearly Orders</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i className="align-middle" data-feather="trending-up" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">4,120</h1>
                                            <div className="mb-0">
                                                <span className="badge badge-success-light">+18.7%</span>
                                                <span className="text-muted">Since last year</span>
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