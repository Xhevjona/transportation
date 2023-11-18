import React from "react";
import "../Styles/About.scss";
import CountUp from "react-countup";
import Chauffeur from "../Image/driver.png";
import Car from "../Image/car.png";
import Price from "../Image/price.png";
import Time from "../Image/pickup.png";
import Seat from "../Image/seat.png";
import Book from "../Image/book.png";
import Support from "../Image/support.png";
import Hidden from "../Image/hidden.png";

const about = () => {

  return (
    <div>
      <div className="about-bg">
        <h2>Travel With Us</h2>
      </div>
      <div className="buttonss">
        <button>Contact Us</button>
        <button className="book">Book Now</button>
      </div>
      <div className="description">
        <h2>About Us</h2>
        <div className="line">
          <hr />
        </div>
        <p>
          -LOGO- caters to those who desire reliable, safe,
          and comfortable transportation—full-service limousine rental from the
          passenger transportation company with the most meticulously maintained
          fleet and the most professional chauffeurs in Chicago and its
          surrounding cities. For this reason, most consider -LOGO- for all of their limo service to O’Hare or Midway
          Airport. But just in case we have not yet had the opportunity to serve
          you, let us introduce ourselves. Established in 2007, -LOGO- maintains a fleet of 20 new luxury limousines and the
          professional chauffeurs who drive them serve over 3000 satisfied
          customers every month. We have proven time and time again how comfort,
          safety and satisfaction can come at affordable rates and with
          exceptional service. We offer limos to O’Hare and Midway airport and
          also leisure services such as wedding limo service, prom stretch
          limos, corporate transportation, and Chicago private tours. We are a
          member of the NLA & BBB. We welcome the opportunity to earn your
          business!
        </p>
      </div>

      <div className="stats">
        <div className="statistics">
          <div className="establish">
            <div className="countup">
              <CountUp end={2007} duration={5} />
            </div>
            <h6>We were established</h6>
          </div>

          <div className="establish">
            <div className="countup">
              <CountUp end={20} duration={5} />
            </div>
            <h6>Limo's in our fleet</h6>
          </div>

          <div className="establish">
            <div className="countup">
              <CountUp end={3000} duration={5} />+
            </div>
            <h6>Happy clients</h6>
          </div>
        </div>
      </div>
      <div className="why-uss">
        <h2>Why Us?</h2>
      </div>

      <div className="row1">
        <div className="icons">
          <div className="img">
            <img src={Chauffeur} alt="driver" width={150} height={150} />
          </div>
          <h5>Proffesional Chauffeurs</h5>
        </div>
        <div className="icons">
          <div className="img">
            <img src={Car} alt="vehicle" width={150} height={150} />
          </div>
          <h5>Luxury Fleet Selection</h5>
        </div>
        <div className="icons">
          <div className="img">
            <img src={Price} alt="offers" width={150} height={150} />
          </div>
          <h5>Reasonable Prices</h5>
        </div>
        <div className="icons">
          <div className="img">
            <img src={Time} alt="pickup" width={150} height={150} />
          </div>
          <h5>On Time Pickups</h5>
        </div>
      </div>

      <div className="row2">
        <div className="icons">
          <div className="img">
            <img src={Seat} alt="comfortability" width={150} height={150} />
          </div>
          <h5>High Comfortability</h5>
        </div>
        <div className="icons">
          <div className="img">
            <img src={Book} alt="online" width={150} height={150} />
          </div>
          <h5>Easy Booking</h5>
        </div>
        <div className="icons">
          <div className="img">
            <img src={Support} alt="operator" width={150} height={150} />
          </div>
          <h5>24/7 Support</h5>
        </div>
        <div className="icons">
          <div className="img">
            <img src={Hidden} alt="charges" width={150} height={150} />
          </div>
          <h5>No Hidden Charges</h5>
        </div>
      </div>
    </div>
  );
};

export default about;
