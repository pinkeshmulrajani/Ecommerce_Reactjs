import React, { useEffect, useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Layouts/sidebar';
import Footer from '../Layouts/footer';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { getBaseUrl, getImageBase } from '../common';
import { showError, showMessage } from '../message';
import { useCookies } from 'react-cookie';

export default function Category() {

    const [Categories, setCategories] = useState([]);
    const [cookies] = useCookies(['theeasylearn']);
    let navigate = useNavigate();

    useEffect(() => {

        // check whether userid cookies exists or not. if not redirect to login
        if(cookies['userid'] == undefined){
			navigate('/');
		}
        
        // run this code only one time
        if(Categories.length == 0) {
            //     we alway use useEffect hook in function component to get data from server using api calling
            let apiAddress = getBaseUrl() + "category.php";
            let option = {
                'url' : apiAddress,
                'method' : "get",
                'responseType' : 'json',
            };

            // calling api
            axios(option).then((response) => {
                // response.data property has actual response received from server
                console.log(response.data);

                let error = response.data[0]['error'];
                if(error != 'no') {
                    alert('error');
                } else {
                    // no error
                    let total = response.data[1]['total'];
                    if(total === 0) {
                        alert("Category not found")
                    } else {
                        // call function
                        showMessage();
                        // there are few categories (total is not zero)
                        // delete 2 object from beginning as it is not actual data
                        response.data.splice(0, 2);
                        // store remaining  categories into state array
                        setCategories(response.data);
                    }
                }
            }).catch((error) => {
                // alert("could not fetch categories, you are offline or server is not available");
                showError();
            });
        }
    });

    let deleteCategory = (categoryid) => {
        let apiAddress = getBaseUrl() + "delete_category.php?id=" + categoryid;
        let option = {
            url : apiAddress,
            method: 'get',
            responseType: 'json',
        };
        axios(option).then((response) => {
            let error = response.data[0]['error'];
            if(error !== 'no') {
                showError(error);
            } else {
                let temp = Categories.filter((item) => {
                    if(item.id !== categoryid)
                        return item;
                });
                setCategories(temp);
                showMessage(response.data[1]['message']);
            }
        }).catch((error) => {
            showError();
        });
    }

    return (<div className="wrapper">
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
                    {/* <h1 className="h3 mb-3" /> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h4 className="card-title mb-0 text-dark">
                                        <span className="text-bg-primary p-1">Existing Categories</span> - Category
                                        management
                                    </h4>
                                    <Link to="/add-category" className="btn btn-sm btn-primary">Add Category</Link>
                                </div>
                                <div className="card-body">
                                    {/* create html table that display category id, title, photo, islive and button to edit and delete category */}
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Photo</th>
                                                <th>Is Live</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Categories.map((item) => {
                                                return(
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <img src={getImageBase() + "category/" + item.photo} className='img-fluid' />
                                                        </td>
                                                        <td>{item.islive}</td>
                                                        <td>
                                                            <Link to={"/edit-category/" + item.id} className='btn btn-warning'>Edit</Link>
                                                            <button onClick={() => deleteCategory(item.id)} className='btn btn-danger'>Delete</button>
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