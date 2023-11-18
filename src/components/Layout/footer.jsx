import React from "react";
import "../Styles/Footer.scss";

const footer = () => (
  <div className="footer">
   <h1 className="footer-logo">LOGO</h1>
    <div className="line">
      <hr />
    </div>

    <h6>Chicago,Illinois</h6>
    <h6>Toll Free: 888-888-8888</h6>
    <h6>Text Us: 777-777-7777</h6>
    <h6>Email: info@email.com</h6>


    <div className="rating">
      <div className="google"> 
          <div className="googleIcon">
            <i className="fab fa-google"></i>
          </div>
          <div className="google-review">
            <h6>Google Rating</h6>
            <h6>
              4.8 <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </h6>
            <h6>Based on 347 reviews</h6>
          </div>
      </div>

      <div className="yelp">
        <div className="yelpIcon"><i className="fab fa-yelp"></i></div>
        <div className="yelp-review">
            <h6>Yelp Rating</h6>
            <h6>
              5.0 <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </h6>
            <h6>Based on 532 reviews</h6>
          </div>
      </div>
    </div>

    <div className="social">
    <i class="fab fa-facebook"></i>
    <i class="fa fa-envelope"></i>
    <i class="fab fa-instagram"></i>
    </div>

    <div className="copyright">
        <p>© 2022. All Rights Reserved.</p>
    </div>



  </div>
);

export default footer;
