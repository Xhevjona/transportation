import React from "react";
import "../Styles/Fleet.scss";
import Sedan1 from "../Image/Lincoln-Nautilus.png";
import Sedan2 from "../Image/Lincoln-MKT.png";
import Sedan3 from "../Image/Lincoln-Continental.png";
import Sedan4 from "../Image/Cadillac-XTS.png";
import Suv1 from "../Image/Lincoln-Navigator.png";
import Suv2 from "../Image/Cadillac-Escalade.png";
import Suv3 from "../Image/Chevrolet-Suburban.png";
import Suv4 from "../Image/GMC-Yukon.png";
import Limo1 from "../Image/Stretch-Limo.png";
import Limo2 from "../Image/Sprinter-Van.png";
import Bag from "../Image/bag.png";
import Passenger from "../Image/passenger.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

const fleet = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
} 
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="fleet"> 
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

      <h3>OUR RANGE OF SEDANS</h3>
      <div className="sedans">
       <Slider {...settings}>
       <Link to="/lincoln-nautilus"> <div className="ccard" onClick={scrollToTop} >
          <div className="wrapp">
            <h4>Lincoln Nautilus (Lux Crossover)</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>1-4 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>4 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Sedan1} alt="sedans" width={210} height={120} />
        </div></Link>

       <Link to="/lincoln-mkt" > <div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Lincoln MKT (Lux Crossover)</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>1-4 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>4 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Sedan2} alt="sedans" width={210} height={120} />
        </div></Link>

        <Link to="/lincoln-continental"><div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Lincoln Continental (Lux Sedan)</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>1-3 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>3 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn">Book Now</button>
          <img src={Sedan3} alt="sedans" width={210} height={120} />
        </div></Link>

        <Link to="/cadillac-xts"><div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Cadillac XTS (Lux Sedan)</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>1-3 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>3 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Sedan4} alt="sedans" width={210} height={120} />
        </div></Link>
        </Slider>
      </div>
      

      <h3>OUR RANGE OF PRIVATE SUV'S</h3>
      <div className="suv">
      <Slider {...settings}>
    <Link to="/lincoln-navigator"><div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Lincoln Navigator</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>4-6 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>6 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Suv1} alt="sedans" width={210} height={120} />
        </div></Link>

      <Link to="/cadillac-escalade">  <div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Cadillac Escalade</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>4-6 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>6 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Suv2} alt="sedans" width={210} height={120} />
        </div></Link>

       <Link to="/chevrolet-suburban"><div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Chevrolet Suburban</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>4-6 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>6 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Suv3} alt="sedans" width={210} height={120} />
        </div></Link>

       <Link to="/gmc-yukon"> <div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>GMC Yukon</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>4-6 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>6 Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn">Book Now</button>
          <img src={Suv4} alt="sedans" width={210} height={120} />
        </div></Link>
        </Slider>
      </div>

      <h3>OUR RANGE OF STRETCH SUV'S & LIMOUSINES</h3>

      <div className="limos">
      <Slider {...settings}>
     <Link to="/lincoln-stretch-limousine"> <div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Lincoln Stretch Limousine</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>6-8 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>6 Bags ,3 Carry-on</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn">Book Now</button>
          <img src={Limo1} alt="sedans" width={210} height={120} />
        </div></Link>

        <Link to="/sprinter-van"><div className="ccard" onClick={scrollToTop}>
          <div className="wrapp">
            <h4>Sprinter Van</h4>
            <div className="info">
              <div className="line1">
                <div className="image">
                  <img
                    src={Passenger}
                    width={23}
                    height={23}
                    alt="passengers"
                  />
                </div>
                <h6>20-30 Passengers</h6>
              </div>
              <div className="line2">
                <div className="image">
                  <img src={Bag} alt="bags" width={30} height={30} />
                </div>
                <h6>Bags</h6>
              </div>
            </div>
          </div>
          <button className="fleet-btn" >Book Now</button>
          <img src={Limo2} alt="sedans" width={230} height={120} />
        </div></Link>
        </Slider> 
      </div>  
    </div>
  );
};

export default fleet;
