import React, { useEffect, useState } from 'react';
import Sidebar from '../Layouts/sidebar';
import Footer from '../Layouts/footer';
import { data, useNavigate, useParams } from 'react-router-dom';
import { getBaseUrl, getImageBase } from '../common';
import axios from 'axios';
import { showError, showMessage } from '../message';

export default function EditCategory() {
	
	const { categoryid } = useParams();
	let navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [photo, setPhoto] = useState(null);
	const [oldPhoto, setOldPhoto] = useState('');
	const [islive, setIslive] = useState(1);
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([]);

	let fetchCategory = function() {
		const apiAddress = getBaseUrl() + "category.php?id=" + categoryid;

		axios.get(apiAddress).then((response) => {
			if(response.data[0].error !== "no") {
				showError(response.data[0].error);
				return;
			}
			if(response.data[1].total === 0) {
				showError("Category Not Found.");
				return;
			}
			const category = response.data[2];
			setTitle(category.title);
			setIslive(category.islive);
			setCategory(category.categoryid);
			setIslive(Number(category.islive));
			setOldPhoto(category.photo);
		}).catch(() => {
			showError("Unable to Fetch Category.");
		});
	}

	// let fetchCategories = function() {
	// 	if(categories.length == 0) {
	// 		let apiAddress = getBaseUrl() + "category.php";
	// 		let option = {
	// 			'url' : apiAddress,
	// 			'method' : 'get',
	// 			'responseType' : 'json',
	// 		};

	// 		// calling api
	// 		axios(option).then((response) => {
	// 			// console.log(response.data);
	// 			let error = response.data[0]['error'];
	// 			if(error != 'no') {
	// 				alert(error);
	// 			} else {
	// 				// no error
	// 				let total = response.data[1]['total'];
	// 				if(total === 0) {
	// 					alert("Category Not Found.");
	// 				} else {
	// 					showMessage();
	// 					response.data.splice(0, 2);
	// 					setCategories(response.data);
	// 				}
	// 			}
	// 		}).catch((error) => {
	// 			showError();
	// 		});
	// 	}
	// }

	useEffect(() => {
		fetchCategory();
		// fetchCategories();
	}, [categoryid]);

	let updateCategory = function(e) {
		console.log(title, islive, photo);
		let apiAddress = getBaseUrl() + "update_category.php";
		let form = new FormData();
		form.append("id", categoryid);
		form.append("title", title);
		form.append("photo", photo);
		form.append("islive", islive);
		console.log(form);
		let option = {
			url: apiAddress,
			method: 'post',
			responseType: 'json',
			data:form
		};
		// api call
		axios(option).then((response) => {
			// console.log(response.data);
			let error = response.data[0]['error'];
			if(error !== 'no'){
				showError(error);
			} else {
				let success = response.data[1]['success'];
				let message = response.data[2]['message'];
				if(success === 'no') {
					showError(message);
				} else {
					showMessage(message);
					setTimeout(() => {
						navigate("/category");
					},2000);
				}
			}
		}).catch((error) => {
			showError();
		});
		e.preventDefault();
	}

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
						<h1 className="h3 mb-3" />
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0 text-dark">
											<span className="text-bg-primary p-1">Edit category</span> - Category management
										</h4>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-md-9">
												<form method="post" onSubmit={updateCategory}>
													<div className="mb-3">
														<label htmlFor="title" className="form-label">Title</label>
														<input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
													</div>
													<div className="mb-3">
														<label htmlFor="photo" className="form-label">Change Photo</label>
														<input type="file" className="form-control" onChange={(e) => setPhoto(e.target.files[0])} />
													</div>
													{/* need radio buttons for is_live */}
													<div className="mb-3">
														<label className="form-label">Is Live?</label>
														<div className="form-check">
															<input className="form-check-input" type="radio" name="islive" id="yes" value="1" checked={islive === 1} onChange={() => setIslive(1)} />
															<label className="form-check-label" htmlFor="yes">Yes</label>
														</div>
														<div>
															<input className="form-check-input" type="radio" name="islive" id="no" value="0" checked={islive === 0} onChange={() => setIslive(0)} />
															<label className="form-check-label" htmlFor="no">No</label>
														</div>
													</div>
													<button type="submit" className="btn btn-primary me-2">Save changes</button>
													<button type="reset" className="btn btn-secondary">Clear all</button>
												</form>
											</div>
											<div className="col-md-3">
												<h4 className="mb-3">Existing Photo</h4>
												<img src={getImageBase() + "category/" + oldPhoto} className="img-fluid rounded" alt="Category" />
											</div>
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