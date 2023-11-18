import React from "react";
import "../Styles/yukon.scss";
import Yukon from "../Image/GMC-Yukon.png";

const yukon = () => {
 
  return (
    <div>
      <div className="product-img">
        <img src={Yukon} alt="lincoln" width={420} height={300} />
        <div className="product-desc">
          <h1>GMC Yukon</h1>
          <p>
            Our luxurious GMC Yukon will give you the most comfortable and
            stylish limo ride you’ve ever taken in Chicago, O’Hare or Midway
            Airport. A popular choice for traveling families, the GMC Yukon is a
            roomy limo ride where you can relax or work on your way to O’Hare or
            Midway airport.
          </p>
          <button  >Book Now</button>
        </div>
      </div>

      <div className="specifics">
        <div className="spec1">
          <h7>Features</h7>
          <p>
            Capacity: 4 – 6 Passengers Comfortably, 6 Bags
            <br />
            Entertainment: CD Stereo, DVD/Video
            <br />
            Comfort: Leather Seating, Climate Control System, Moonroof
            <br />
            Cabin: Large Trunk, Third-Row Seating
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

export default yukon;
