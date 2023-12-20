import React from "react";
import "../Styles/Home.scss";
import Fade from "react-reveal";
import Car1 from "../Image/Lincoln-Continental.png";
import Car2 from "../Image/Lincoln-Navigator.png";
import Car3 from "../Image/Cadillac-XTS.png";
import RR from "../Image/rolls-royce.jpg";
import Service from "../Image/service.jpg";
import Business from "../Image/business.jpg";
import Airport from "../Image/airport.jpg";
import Event from "../Image/event.jpg";
import Chauffeur from "../Image/driver.png";
import Car from "../Image/car.png";
import Price from "../Image/price.png";
import Time from "../Image/pickup.png";
import Seat from "../Image/seat.png";
import Book from "../Image/book.png";
import Support from "../Image/support.png";
import Hidden from "../Image/hidden.png";
import { Link } from "react-router-dom";
const home = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div>
      <div className="background"></div> 
      <div className="logo">
        <Fade right>
          <h1>LOGO</h1>
        </Fade>
        <Fade left>
          <h5>The luxury everyone can afford.</h5>
        </Fade>
      </div>
      <Link to="/online-booking">
    <button class="btn draw-border" >Book Now</button>
    </Link>
      <div className="our-fleet">
        <h3>
          Our Fleet
          <div className="hr-line">
            <hr />
          </div>
        </h3>
        <p>
          Our fleet is ready to transport you for all your business or events
          needs.
        </p>
      </div>

      <div className="slide">
        <div className="car1">
          <img src={Car1} alt="lincoln" width={250} height={150} />
          <h6>Lincoln Continental</h6>
          <p>Passengers:6-8 Luggage:6</p>
        </div>

        <div className="car2">
          <img src={Car2} alt="chevy" width={250} height={150} />
          <h6>Lincoln MKT</h6>
          <p>Passengers:1-4 Luggage:4</p>
        </div>

        <div className="car3">
          <img src={Car3} alt="limo" width={250} height={150} />
          <h6>Lincoln Continental</h6>
          <p>Passengers:6-8 Luggage:6</p>
        </div>
      </div>

      <div className="view-all">
        <Link to="/fleet">
          <button onClick={scrollToTop}>View All</button>
        </Link>
      </div>

      <div className="travel">
        <img src={RR} alt="rolls-royce" className="travel-img" width={690} height={570} />
        <div className="text">
          <Fade right>
            <h2>TRAVEL WITH US</h2>
          </Fade>
          <Fade left>
            <p>
              We have proven time and time again how comfort, safety and
              satisfaction can come at affordable rates and with exceptional
              service.Our fleet consists of only the highest quality, late-model
              luxury vehicles – Lincoln Town Car sedans, SUV’s, stretch
              limousines, and stretch SUV limousines.
            </p>
          </Fade>
          <Fade right>
            <Link to="/about">
              <button className="learn-more" onClick={scrollToTop}>
                Learn More <i class="fa fa-arrow-right"></i>
              </button>
            </Link>
          </Fade>
        </div>
      </div>

      <div className="service">
        <div className="quote">
          <Fade left>
            <h2>
              LOOKING TO FIND THE BEST RATES FOR YOUR NEXT TRANSPORTATION?
            </h2>
          </Fade>
          <Fade right>
            <Link to="/contact">
              <button className="quote-btn" onClick={scrollToTop}>Get A Quote</button>
            </Link>
          </Fade>
        </div>
        <img className="quote-img" src={Service} alt="travel" width={870} height={520} />
      </div>

      <div className="our-services">
        <h3>
          Our Services
          <div className="hr-line"> 
            <hr />
          </div>
        </h3>
        <p>We provide the best transportation services that you can rely on.</p>
      </div>

      <div className="service-group">
        <div className="service1">
          <img src={Business} alt="corporate" width={220} height={240} />
          <h6>Corporate Travel</h6>
          <p>
            Business travelers need a reliable, professional, and efficient car
            service.
          </p>
          <Link to="/services"><span onClick={scrollToTop}>See More</span></Link>
        </div>
        <div className="service2">
          <img src={Airport} alt="corporate" width={220} height={240} />
          <h6>Airport Travel</h6>
          <p>
            We provide reliable, comfortable and luxury airport transportation
            at affordable rates.
          </p>
          <Link to="/services"> <span onClick={scrollToTop}>See More</span></Link>
        </div>
        <div className="service3">
          <img src={Event} alt="corporate" width={220} height={240} />
          <h6>Special Events</h6>
          <p>
            Whatever your event, we can add that touch of elegance to your
            transportation plans.
          </p>
          <Link to="/services"> <span onClick={scrollToTop}>See More</span></Link>
        </div>
      </div>

      <div className="view-all">
        <Link to="/services">
          <button onClick={scrollToTop}>View All</button>
        </Link>
      </div>

      <div className="why-us">
        <h3>
          Why Us?
          <div className="hr-line">
            <hr />
          </div>
        </h3>
        <p>
          Your satisfaction is our priority goal, which is why we are dedicated
          to provide our clients safe, enjoyably and punctual travel.
        </p>
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

      <div className="footer-bg">
        <div className="container">
          <Fade right>
            <h2>Or anywhere you need us to take</h2>
          </Fade>
          <Fade left>
            <p>
              Not only taking you to night parties,birthdays weddings, but we
              also take you anywhere you want to go.
            </p>
          </Fade>
          <div className="call-btn">
            <button className="call-btn">Call Now 888-888-8888</button>
          </div>
          <Link to="/online-booking">
          <button className="book-btn" onClick={scrollToTop}> Book Online </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default home;
