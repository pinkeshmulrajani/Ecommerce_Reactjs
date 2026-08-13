import React, { useState } from 'react';
import Sidebar from '../Layouts/sidebar';
import Footer from '../Layouts/footer';
import { ToastContainer } from 'react-toastify';
import { getBaseUrl } from '../common';
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showError, showMessage } from '../message';

export default function AddCategory() {

  const [categories, setCategories] = useState([]);
  // create state variable for each and every input
  var [title, setTitle] = useState('');
  var [photo, setPhoto] = useState('');
  var [islive, setIsLive] = useState('');
  // create hook of useNavigate
  let navigate = useNavigate();

  let insertCategory = (e) => {
    e.preventDefault();
    // console.log(title, photo, islive);
    let apiAddress = getBaseUrl() + "insert_category.php";
    let form = new FormData();
    form.append("title", title);
    form.append("photo", photo);
    form.append('islive', islive);
    let option = {
      url: apiAddress,
      method: 'post',
      responseType: 'json',
      data: form,
    };
    axios(option).then((response) => {
      // console.log(response.data);
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
          setTimeout(() => {
            navigate("/category");
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
                      <span className="text-bg-primary p-1">Add category</span> - Category management
                    </h4>
                  </div>
                  <div className="card-body">
                    <form method="post" onSubmit={insertCategory}>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="photo" className="form-label">Photo</label>
                        <input type="file" className="form-control" id="photo" name="photo" required onChange={(e) => setPhoto(e.target.files[0])} />
                      </div>
                      {/* need radio buttons for is_live */}
                      <div className="mb-3">
                        <label className="form-label">Is Live?</label>
                        <div>
                          <input className="form-check-input" type="radio" name="islive" id="yes" value='1' required onChange={(e) => setIsLive(e.target.value)} />
                          <label className="form-check-label" htmlFor="yes">Yes</label>
                        </div>
                        <div>
                          <input className="form-check-input" type="radio" name="islive" id="no" value='0' required onChange={(e) => setIsLive(e.target.value)} />
                          <label className="form-check-label" htmlFor="no">No</label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary me-2">Save Category</button>
                      <button type="reset" className="btn btn-secondary">Clear all</button>
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