import React from "react";
import "../Styles/Services.scss";
import Airport from "../Image/airport.jpg";
import Business from "../Image/busines.jpg";
import P2P from "../Image/p2p.jpg";
import Event from "../Image/event.jpg";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const services = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
} 
  
  return (
    <div>
      <div className="service-header">
        <h5>Our Services</h5>
        <div className="buttons">
          <button>Book Now</button>
          <Link to="/contact"><button onClick={scrollToTop}>Get A Quote</button></Link>
        </div>
      </div>

      <div className="s-row1">
        <img src={Airport} alt="travel" width={350} height={300} />
        <div className="desc">
          <Fade left>
            <h3>AIRPORT TRAVEL</h3>
          </Fade>
          <Fade right>
            <p>
              -LOGO- provides reliable, comfortable and private luxury airport
              transportation at affordable rates. We take the safety of our
              clients seriously and ensure that our cars are professionally
              maintained. We guarantee on-time service and 24-hour availability
              while offering competitive travel rates, discounts, group account
              rates, and Frequent Rider Discounts. Our professional chauffeurs
              are knowledgeable about the airport regulations that govern
              passenger pickups and drop-offs. Whether traveling on business or
              planning a vacation to go to your favorite destination, we can
              provide you with a professional and efficient car service to and
              from O’Hare & Midway airport. Our Chauffeur can Meet & Greet you
              at the luggage area with your name on our sign at an additional
              cost. He will then, assist you with your luggage to the car and
              get you to your destination safely. With our regular pick up
              (Curbside Pickup), our professional chauffeur will wait for you in
              the designated Limo holding lot near the airport and touch base
              with you when your flight lands. We operate a range of vehicles
              including Lincoln Town Car Sedans, SUV’s, Limousines and Stretch
              SUV’s.
            </p>
          </Fade>
        </div>
      </div>

      <div className="s-row2">
        <div className="desc">
          <Fade right>
            <h3>BUSINESS TRAVEL</h3>
          </Fade>
          <Fade left>
            <p>
              Business travelers need a reliable, professional, and efficient
              car service. Let us get you where you need to be, when you need to
              be there. Use every moment of your time efficiently by letting us
              drive while you continue to work, or enjoy a moment of relaxation
              while we take you to your destination. Do you have a group you
              need to transfer to and from a business meeting, convention, or
              trade show? Perhaps you have a client meeting and wish to arrange
              travel on their behalf? -LOGO- can meet your
              client in style, providing a first impression that will impress.
              Ask us about discounted corporate rates for large volumes of
              business!
            </p>
          </Fade>
        </div>
        <img src={Business} alt="travel" width={400} height={300} />
      </div>

      <div className="s-row3">
        <img src={P2P} alt="travel" width={350} height={320} />
        <div className="desc">
          <Fade left>
            <h3>POINT TO POINT</h3>
          </Fade>
          <Fade right>
            <p>
              There’s always a good time to ride around in style. Whether it is
              dinner out with friends in Chicago or the suburbs, a sporting
              event or just to and from your favorite nightclub, enjoy your
              evening and leave the driving to us! Going to a concert? Why fight
              the traffic? Sit back, enjoy some drinks and let -LOGO- take you
              to and from the game! To make your Night Special we operate a
              range of vehicles including Lincoln Town Car Stretch Limousines,
              Ford Excursion and Hummer SUV Limousines.
            </p>
          </Fade>
        </div>
      </div>

      <div className="s-row4">
        <div className="desc">
          <Fade right>
            <h3>SPECIAL EVENTS</h3>
          </Fade>
          <Fade left>
            <p>
              Whatever your event, we can add that touch of elegance to your
              transportation plans. Prom is a special event in any young
              person’s calendar; why not travel in awe-inspiring class? Need
              transportation for a wedding or a quinceanera? Maybe you just want
              to plan a girls or boys night on the town. -LOGO- can do the driving for your important events! We also
              provide chauffeur services for corporate and sporting events,
              shopping trips and sightseeing tours, and much more. Let -LOGO- help you craft the perfect special event.
              We have Lincoln Town Car sedans, stretch limousines, SUVs, and
              stretch SUVs for your special needs. 
            </p>
          </Fade>
        </div>
        <img src={Event} alt="travel" width={350} height={300} />
      </div>
    </div>
  );
};

export default services;
