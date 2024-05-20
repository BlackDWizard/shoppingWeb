import React from 'react';
import '../../style/App.css';
import '../../style/responsive.css';
import '../../style/style.css';

export default class MainBody extends React.Component {


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

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="shop.html">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="why.html">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
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
          {/* <!-- slider section --> */}

          <section className="slider_section">
            <div className="slider_container">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              Welcome To Our <br />
                              Gift Shop
                            </h1>
                            <p>
                              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                            </p>
                            <a href="">
                              Contact Us
                            </a>
                          </div>
                        </div>
                        <div className="col-md-5 ">
                          <div className="img-box">
                            <img src="images/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              Welcome To Our <br />
                              Gift Shop
                            </h1>
                            <p>
                              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                            </p>
                            <a href="">
                              Contact Us
                            </a>
                          </div>
                        </div>
                        <div className="col-md-5 ">
                          <div className="img-box">
                            <img src="images/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              Welcome To Our <br />
                              Gift Shop
                            </h1>
                            <p>
                              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                            </p>
                            <a href="">
                              Contact Us
                            </a>
                          </div>
                        </div>
                        <div className="col-md-5 ">
                          <div className="img-box">
                            <img src="images/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn-box">
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <img src="images/line.png" alt="" />
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- end slider section --> */}
        </div>
        {/* <!-- end hero area-- > */}

        {/* < !--shop section-- > */}

        <section className="shop_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Latest Products
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Ring
                      </h6>
                      <h6>
                        Price
                        <span>
                          $200
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Watch
                      </h6>
                      <h6>
                        Price
                        <span>
                          $300
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Teddy Bear
                      </h6>
                      <h6>
                        Price
                        <span>
                          $110
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p4.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Flower Bouquet
                      </h6>
                      <h6>
                        Price
                        <span>
                          $45
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p5.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Teddy Bear
                      </h6>
                      <h6>
                        Price
                        <span>
                          $95
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p6.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Flower Bouquet
                      </h6>
                      <h6>
                        Price
                        <span>
                          $70
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p7.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Watch
                      </h6>
                      <h6>
                        Price
                        <span>
                          $400
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p8.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>
                        Ring
                      </h6>
                      <h6>
                        Price
                        <span>
                          $450
                        </span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>
                        New
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="">
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* <!--end shop section-- > */}

        {/* < !--saving section-- > */}

        <section className="saving_section ">
          <div className="box">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="img-box">
                    <img src="images/saving-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>
                        Best Savings on <br />
                        new arrivals
                      </h2>
                    </div>
                    <p>
                      Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Buy Now
                      </a>
                      <a href="#" className="btn2">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--end saving section-- > */}

        {/* < !--why section-- > */}

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

        {/* <!--end why section-- > */}


        {/* < !--gift section-- > */}

        <section className="gift_section layout_padding-bottom">
          <div className="box ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5">
                  <div className="img_container">
                    <div className="img-box">
                      <img src="images/gifts.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>
                        Gifts for your <br />
                        loved ones
                      </h2>
                    </div>
                    <p>
                      Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Buy Now
                      </a>
                      <a href="#" className="btn2">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!--end gift section-- > */}


        {/* < !--contact section-- > */}

        <section className="contact_section ">
          <div className="container px-0">
            <div className="heading_container ">
              <h2 className="">
                Contact Us
              </h2>
            </div>
          </div>
          <div className="container container-bg">
            <div className="row">
              <div className="col-lg-7 col-md-6 px-0">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 px-0">
                <form action="#">
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="d-flex ">
                    <button>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!--end contact section-- > */}

        {/* < !--client section-- > */}
        <section className="client_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Testimonial
              </h2>
            </div>
          </div>
          <div className="container px-0">
            <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>
                          Morijorch
                        </h5>
                        <h6>
                          Default model text
                        </h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>
                          Rochak
                        </h5>
                        <h6>
                          Default model text
                        </h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>
                          Brad Johns
                        </h5>
                        <h6>
                          Default model text
                        </h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel_btn-box">
                <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!--end client section-- > */}

        {/* < !--info section-- > */}

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

        {/* <!--end info section-- > */}
      </div>
    );
  }
}
