import React from "react";
import "../Styles/navigator.scss";
import Navigator from "../Image/Lincoln-Navigator.png";

const navigator = () => {
 
  return (
    <div>
      <div className="product-img">
        <img src={Navigator} alt="lincoln" width={420} height={280} />
        <div className="product-desc">
          <h1>Lincoln Navigator</h1>
          <p>
            Lincoln Navigator has sleek body lines and chrome body accents make
            it stand out from the crow! It has quite a presence with its V8
            motor as well as a luxurious leather interior. Enjoy a limousine
            with the latest luxuries to set the mood for any special occasion.
          </p>
          <button  >Book Now</button>
        </div>
      </div>

      <div className="specifics">
        <div className="spec1">
          <h7>Features</h7>
          <p>
            Capacity:  4 – 6 Passengers Comfortably, 6 Bags
            <br />
            Entertainment: CD Stereo, DVD/Video, iPod Connection
            <br />
            Comfort:  Leather Seating, Climate Control System, Moonroof
            <br />
            Cabin:  Large Trunk, Third-Row Seating
            <br />
            Standard Services: Water
          </p>
        </div>
        <div className="vertical"></div>
        <div className="spec2">
          <h7>Service</h7>
          <p>
            Exceptional, mint condition vehicles less than 5 years old
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

export default navigator;
