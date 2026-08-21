import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import { getBaseUrl, getImageBase } from '../common';
import axios from 'axios';
import { showError } from '../message';
import { ToastContainer } from 'react-toastify';

export default class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    let apiAddress = getBaseUrl() + "category.php";
    let options = {
      url: apiAddress,
      method: 'get',
      responseType: 'json',
    };

    axios(options).then((response) => {
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      } else {
        let total = response.data[1]['total'];
        if (total === 0) {
          showError('Categories Not Found.');
        } else {
          response.data.splice(0, 2);
          this.setState({
            categories: response.data
          });
        }
      }
    }).catch((error) => {
      showError(error);
    });
  }

  render() {
    return (
      <>
        <ToastContainer />
        <Header />
        <section className="product-category my-5 footer-padding">
          <div className="container">
            <div className="section-title">
              <h5>Our Categories</h5>
            </div>
            <div className="category-section">
              {this.state.categories.map((item) => {
                return (
                  <Link to={"/product/" + item.id} className='wrapper-detau=ils'>
                    <div className='product-wrapper' data-aos="fade-right" data-aos-duration='100'>
                      <div className='wrapper-img'>
                        <img src={getImageBase() + "category/" + item.photo} alt="dress" />
                      </div>
                      <div className='wrapper-info'>
                        {item.title}
                      </div>
                    </div>
                  </Link>
                )
              })};
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}