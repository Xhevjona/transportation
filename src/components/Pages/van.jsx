import React from "react";
import "../Styles/van.scss";
import Van from "../Image/Sprinter-Van.png";

const van = () => {
  
  return (
    <div>
      <div className="product-img">
        <img src={Van} alt="lincoln" width={420} height={270} />
        <div className="product-desc">
          <h1>Mercedes Sprinter Van</h1>
          <p>
            This popular limousine is built on the robust Hummer design,
            providing the ultimate in style and luxury. The saying “bigger is
            better” can certainly justified when hiring this party on wheels. A
            bold statement of style, this limousine is sure to be noticed and
            always turns heads. Ideal for large group outings, our stretch
            Hummers in Chicago can accommodate 20-30 passengers.
          </p>
          <button >Book Now</button>
        </div>
      </div>

      <div className="specifics">
        <div className="spec1">
          <h7>Features</h7>
          <p>
            Capacity: 20 – 30 Passengers Maximum
            <br />
            Entertainment: CD Stereo, iPod Connection, DVD, Flat Screen TV’s
            <br />
            Comfort: Leather Seating, Climate Control System
            <br />
            Cabin: laser lights, fiber optic lighting
            <br />
            Standard Services: Bars with Coolers and Champagne Flute’s
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

export default van;
