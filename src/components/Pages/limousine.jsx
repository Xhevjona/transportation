import React from "react";
import "../Styles/limousine.scss";
import Limousine from "../Image/Stretch-Limo.png";

const limousine = () => {
  return (
    <div>
      <div className="product-img">
        <img src={Limousine} alt="lincoln" width={420} height={300} />
        <div className="product-desc">
          <h1>Lincoln Stretch Limousine</h1>
          <p>
            Lincoln MKT Stretch is the staple of classic limousines; available
            in six or eight seater, these vehicles deliver class, style and
            impact. Popular for wedding parties, bachelor parties, prom, or just
            a night on the town, share a ride with your friends and loved ones
            in the luxurious comfort of this iconic classic.
          </p>
          <button >Book Now</button>
        </div>
      </div>

      <div className="specifics">
        <div className="spec1">
          <h7>Features</h7>
          <p>
            Capacity:  6-8 Passengers Comfortably, 6 Bags, 3 carry-on
            <br />
            Entertainment:  CD Stereo, DVD/Video, iPod Connection
            <br />
            Comfort:  Climate Control System, Integrated Bar, Fiber Optic Lighting
            <br />
            Cabin: Large Luggage Capacity
            <br />
            Standard Services: Water, Ice, Daily Newspaper
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

export default limousine;
