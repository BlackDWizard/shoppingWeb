import React from 'react';
import '../../style/App.css';

export default class TopBar extends React.Component {

  render() {
    return (
      <div>
        <div className="">
          <div className="row">
            <div className="d-inline-flex">

              <a className="btn btn-light" href="#" role="button">About</a>
              &emsp;
              <a className="btn btn-light" href="#" role="button">Contact</a>
              &emsp;
              <a className="btn btn-light" href="#" role="button">Help</a>
              &emsp;
              <a className="btn btn-light" href="#" role="button">FAQs</a>

              <div className="text-right">
                <button className="btn-light" type="button">Sign in</button>
                <div className="dropdown d-inline-flex">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">繁體中文</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">繁體中文</a></li>
                    <li><a className="dropdown-item" href="#">English</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="#" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">Monkey</span>
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
    );
  }
}
