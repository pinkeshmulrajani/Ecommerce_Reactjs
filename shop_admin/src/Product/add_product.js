import Sidebar from '../Layouts/sidebar';
import Footer from '../Layouts/footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBaseUrl } from '../common';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { showError, showMessage } from '../message';
import useVerifyLogin from '../verify-login';


export default function AddProduct() {

    const [categories, setCategories] = useState([]);
    // create state variable for each and every input
    var [category, setCategory] = useState('');
    var [title, setTitle] = useState('');
    var [price, setPrice] = useState('');
    var [size, setSize] = useState('');
    var [weight, setWeight] = useState('');
    var [photo, setPhoto] = useState('');
    var [islive, setIsLive] = useState('');
    var [detail, setDetail] = useState('');
    var [stock, setStock] = useState('');

    // create hook of useNavigate
    let navigate = useNavigate();
    useVerifyLogin();

    useEffect(() => {
        // run this code only one time
        if(categories.length == 0) {
            // we always use useEffect hook in function component to get data from server using api calling
            let apiAddress = getBaseUrl() + "category.php";
            let option = {
                'url' : apiAddress,
                'method' : 'get',
                'responseType' : 'json',
            };

            // calling api
            axios(option).then((response) => {
                // response.data property has actual response received from server
                console.log(response.data);

                let error = response.data[0]['error'];
                if(error != 'no') {
                    alert(error);
                } else {
                    // no error
                    let total = response.data[1]['total'];
                    if(total == 0) {
                        // No category found
                        alert('Category Not Found!');
                    } else {
                        // call function
                        showMessage();
                        // there are few categories (total is not zero)
                        // delete 2 object from beginning as it is not actual data
                        response.data.splice(0, 2);
                        setCategories(response.data);
                    }
                }
            }).catch((error) => {
                showError()
            });
        }
    });

    let insertProduct = (e) => {
        e.preventDefault(); // required to prevent refreshing web page
        console.log(category, title, price, stock, weight, size, islive, detail, photo);
        // api call to store new product on server
        let apiAddress = getBaseUrl() + "insert_product.php";
        // create object of formData class to store input we want to pass in API.
        let form = new FormData();
        form.append("name", title);
        form.append("photo", photo);
        form.append("price", price);
        form.append("stock", stock);
        form.append("detail", detail);
        form.append("categoryid", category);
        form.append("islive", islive);
        // 
        let option = {
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form
        };
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no') {
                showError(error);
            } else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no') {
                    showError(message);
                } else {
                    showMessage(message);
                    // delay script execution by 2 seconds
                    setTimeout(() => {
                        navigate("/product"); // change screen from add_product to product list
                    }, 2000);
                }
            }
        }).catch((error) => {
            showError();
        });
    };

    return (
        <div className="wrapper">
            <ToastContainer />
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
                                            <span className="text-bg-primary p-1">Add product</span> - Product management
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" onSubmit={insertProduct}>
                                            <div className="row g-3">
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="category_id" className="form-label">Category ID</label>
                                                    <select className="form-control" id="category" name="category" required onChange={(e) => setCategory(e.target.value)}>
                                                        <option value="">Select Category</option>
                                                        {categories.map((item) => {
                                                            return(<option value={item.id}>{item.title}</option>)
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input type="text" className="form-control" id="title" name="title" onChange={(e) => setTitle(e.target.value)} required />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input type="number" step="0.01" className="form-control" id="price" name="price" onChange={(e) => setPrice(e.target.value)} required />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="stock" className="form-label">Stock</label>
                                                    <input type="number" className="form-control" id="stock" name="stock" onChange={(e) => setStock(e.target.value)} required />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="weight" className="form-label">Weight</label>
                                                    <input type="number" step="0.01" className="form-control" id="weight" name="weight" onChange={(e) => setWeight(e.target.value)} required />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="size" className="form-label">Size</label>
                                                    <input type="text" className="form-control" id="size" name="size" onChange={(e) => setSize(e.target.value)} required />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="photo" className="form-label">Photo</label>
                                                    <input type="file" className="form-control" id="photo" name="photo" onChange={(e) => setPhoto(e.target.files[0])} required />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label htmlFor="detail" className="form-label">Detail</label>
                                                    <textarea className="form-control" id="detail" name="detail" rows={4} onChange={(e) => setDetail(e.target.value)} required defaultValue={""} />
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <label className="form-label">Is Live?</label>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="islive" id="yes" value='1' onChange={(e) => setIsLive(e.target.value)} required />
                                                        <label className="form-check-label" htmlFor="yes">Yes</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="islive" id="no" value='0' onChange={(e) => setIsLive(e.target.value)} required />
                                                        <label className="form-check-label" htmlFor="no">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-primary">Save Product</button>
                                                <button type="reset" className="btn btn-secondary">Clear all</button>
                                            </div>
                                        </form>
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