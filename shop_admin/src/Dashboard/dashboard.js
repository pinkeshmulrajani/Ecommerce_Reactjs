import React, { useEffect, useState } from "react";
import Footer from "../Layouts/footer";
import Sidebar from "../Layouts/sidebar";
import axios from 'axios';
import { getBaseUrl } from '../common';

export default function Dashboard() {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        if(summary === null) {
            let apiAddress = getBaseUrl() + "summery.php";
            let option = {
                'url' : apiAddress,
                'method' : "get",
                'responseType' : 'json',
            };

            axios(option).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if(error !== 'no') {
                    alert('error');
                } else {
                    setSummary(response.data[1]);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    });
    return (
        <div className="wrapper">
            <Sidebar />
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.categories : "0"}</h1>
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.products : "0"}</h1>
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.users : "0"}</h1>
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.daily : "0"}</h1>
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.weekly : "0"}</h1>
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.monthly : "0"}</h1>
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
                                        <h1 className="mt-1 mb-3">{summary ? summary.yearly : "0"}</h1>
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
                <Footer />
            </div>
        </div>
    );
}