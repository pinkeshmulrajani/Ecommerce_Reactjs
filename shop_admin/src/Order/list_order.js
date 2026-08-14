import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Layouts/sidebar';
import Footer from '../Layouts/footer';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { getBaseUrl } from '../common';
import { showError, showMessage } from '../message';

export default function ListOrder() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if(orders.length === 0) {
			let apiAddress = getBaseUrl() + "orders.php";
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
					let total = response.data[1]['total'];
					if(total === 0) {
						alert("Order not found")
					} else {
						showMessage();
						response.data.splice(0, 2);
						setOrders(response.data);
					}
				}
			}).catch((error) => {
				showError();
			});
		}
	});

	const getStatusBadge = (status) => {
		if (status === 1) {
			return <span className="badge bg-warning">Pending</span>;
		} else if (status === 2) {
			return <span className="badge bg-info">Confirmed</span>;
		} else if (status === 3) {
			return <span className="badge bg-primary">Shipped</span>;
		} else if (status === 4) {
			return <span className="badge bg-success">Completed</span>;
		} else if (status === 5) {
			return <span className="badge bg-danger">Cancelled</span>;
		} else {
			return <span className="badge bg-secondary">Unknown</span>;
		}
	};
	return (
		<div className="wrapper">
			<Sidebar />
			<ToastContainer />
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
											<span className="text-bg-primary p-1">Existing Orders</span> - Orders list
										</h4>
									</div>
									<div className="card-body">
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
												{orders.map((item) => {
													return (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.billdate}</td>
															<td>{item.fullname}</td>
															<td>{`${item.address1}, ${item.address2}, ${item.city} - ${item.pincode}`}</td>
															<td>${item.amount}</td>
															<td>{getStatusBadge(item.orderstatus)}</td>
															<td>
																<Link to={"/order-detail/" + item.id} className="btn btn-sm btn-primary">
																	<i className="align-middle" data-feather="eye" /> View Detail
																</Link>
															</td>
														</tr>
													);
												})}
											</tbody>
 										</table>
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