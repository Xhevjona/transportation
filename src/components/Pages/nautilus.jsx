import React from "react";
import "../Styles/lincoln.scss";
import Nautilus from "../Image/Lincoln-Nautilus.png";

const nautilus = () => {
  
  return (
    <div>
      <div className="product-img">
        <img src={Nautilus} alt="lincoln" width={420} height={300} />
        <div className="product-desc">
          <h1>Lincoln Nautilus</h1>
          <p>
            Lincoln Nautilus crossover vehicles have a slightly higher profile
            with a quiet interior. With state-of-the-art quality technology, it
            delivers a very smooth ride. A1 Classic Limo Group Nautilus vehicles
            have large front and back view windows, moon-roofs,
            passenger-controlled audio, and internal environmental settings.
            They feature heated, air-conditioned, and reclining back seats. It’s
            a perfect vehicle to travel to/from O’Hare, Midway airport, a
            special occasion event, and anything in between.
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

export default nautilus;
