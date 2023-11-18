import React from "react";
import "../Styles/mkt.scss";
import MKT from "../Image/Lincoln-MKT.png";

const mkt = () => {

  return (
    <div>
      <div className="product-img">
        <img src={MKT} alt="lincoln" width={420} height={270} />
        <div className="product-desc">
          <h1>Lincoln MKT</h1>
          <p>
            The Lincoln MKT is an great crossover ready to keep up with all you
            have on your agenda. The Lincoln MKT can be a great family car
            service option with its spacious interior and smooth, reliable ride.
            The elegant stylish design and impressive features give the Lincoln
            MKT a desirable versatility. It’s a perfect vehicle to travel
            to/from O’Hare, Midway airport, a special occasion event, and
            anything in between.
          </p>
          <button >Book Now</button>
        </div>
      </div>

      <div className="specifics">
        <div className="spec1">
          <h7>Features</h7>
          <p>
            Capacity: 1 – 4 Passengers,4 Bags
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

export default mkt;
