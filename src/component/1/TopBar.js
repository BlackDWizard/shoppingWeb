import React from 'react';
import '../../style/App.css';
import '../../style/style.css';

export default class TopBar extends React.Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="d-inline-flex align-items-center h-100">
                <a className="text-body mr-3" href="#">About</a>
                <a className="text-body mr-3" href="#">Contact</a>
                <a className="text-body mr-3" href="#">Help</a>
                <a className="text-body mr-3" href="#">FAQs</a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">Sign in</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Sign up</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">TWD</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">TWD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">繁體中文</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">繁體中文</a></li>
                    <li><a className="dropdown-item" href="#">English</a></li>
                  </ul>
                </div>
              </div>
              <div className="d-inline-flex align-items-center d-block d-lg-none">
                <a href="#" className="btn px-0 ml-2">
                  <i className="fas fa-heart text-dark"></i>
                  <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                </a>
                <a href="#" className="btn px-0 ml-2">
                  <i className="fas fa-shopping-cart text-dark"></i>
                  <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
              <a href="#" className="text-decoration-none">
                <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
              </a>
            </div>
            <div className="col-lg-4 col-6 text-left">
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for products" />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
              <p className="m-0">Customer Service</p>
              <h5 className="m-0">+012 345 6789</h5>
            </div>
          </div>
        </div >
      </div>
    );
  }
}
