import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/App.css';

export default class Index extends React.Component {



  render() {
    return (
      <div>
        <div className="hero_area">
          {/* <!-- header section strats --> */}
          <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  Giftos
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""></span>
              </button>

              <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Home
                      <span className="sr-only">
                        (current)
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/why">
                      Why Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/testimonial">
                      Testimonial
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <a href="">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  </a>
                  <form className="form-inline ">
                    <button className="btn nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </header>
          {/* <!-- end header section --> */}

        </div>
        {/* <!-- end hero area --> */}

        {/* <!-- why section --> */}

        <section className="why_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Why Shop With Us
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box ">
                  <div className="img-box">
                  </div>
                  <div className="detail-box">
                    <h5>
                      Fast Delivery
                    </h5>
                    <p>
                      variations of passages of Lorem Ipsum available
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box ">
                  <div className="img-box">
                  </div>
                  <div className="detail-box">
                    <h5>
                      Free Shiping
                    </h5>
                    <p>
                      variations of passages of Lorem Ipsum available
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box ">
                  <div className="img-box">
                  </div>
                  <div className="detail-box">
                    <h5>
                      Best Quality
                    </h5>
                    <p>
                      variations of passages of Lorem Ipsum available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end why section --> */}

        {/* <!-- info section --> */}

        <section className="info_section  layout_padding2-top">
          <div className="social_container">
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="info_container ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <h6>
                    ABOUT US
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                  </p>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="info_form ">
                    <h5>
                      Newsletter
                    </h5>
                    <form action="#">
                      <input type="email" placeholder="Enter your email" />
                      <button>
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h6>
                    NEED HELP
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                  </p>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h6>
                    CONTACT US
                  </h6>
                  <div className="info_link-box">
                    <a href="">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span> Gb road 123 london Uk </span>
                    </a>
                    <a href="">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>+01 12345678901</span>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span> demo@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer section --> */}
          <footer className=" footer_section">
            <div className="container">
              <p>
                &copy; <span id="displayYear"></span> All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
              </p>
            </div>
          </footer>
          {/* <!-- footer section --> */}

        </section>

        {/* <!-- end info section --> */}
      </div>
    );
  }
}
