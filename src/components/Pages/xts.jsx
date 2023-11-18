import React from "react";
import "../Styles/xts.scss"; 
import XTS from "../Image/Cadillac-XTS.png";

const xts = () => {
  
  return (
    <div>
      <div className="product-img">
        <img src={XTS} alt="lincoln" width={420} height={300} />
        <div className="product-desc">
          <h1>Cadillac XTS</h1>
          <p>
            If you are seeking a luxurious sedan car rental that is both fun on
            the road and practical, look no further than the Cadillac XTS. This
            sedan has elegant stylish design and is also packed with all of the
            latest high-tech features and a spacious, comfortable interior for
            passengers. The Cadillac XTS from A1 Classic Limousine Group is
            perfect for any occasion and ideal for O’Hare or Midway airport
            transportation and premier event travel. The Cadillac XTS is our
            most affordable sedan to make your travel arrangements.
          </p>
          <button >Book Now</button>
        </div>
      </div>

      <div className="specifics">
        <div className="spec1">
          <h7>Features</h7>
          <p>
            Capacity: 1 – 3 Passengers,3 Bags
            <br />
            Entertainment: CD Stereo, iPod Connection
            <br />
            Comfort: Leather Seating, Climate Control System
            <br />
            Cabin: Large Luggage Capacity
            <br />
            Standard Services: Water
          </p>
        </div>
        <div className="vertical"></div>
        <div className="spec2">
          <h7>Service</h7>
          <p>
            Exceptional, mint condition vehicles less than 3 years old
            <br />
            Chauffeur will arrive 5-15 minutes prior to scheduled pick-up time
            <br />
            24/7 customer service, professional chauffeurs, flight tracking
            <br />
            Reconfirmation call, e-mail or text prior to pick-up
            <br />
            100% money back on-time pick-up & customer satisfaction guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default xts;
