import React, {useState} from "react";
import "../Styles/Contact.scss";
import Address from "../Image/address.png";
import Phone from "../Image/phone.png";
import Email from "../Image/email.png";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoieGhldmpvbmEiLCJhIjoiY2wxZG1mdDVhMGJqYjNjbjNuMWpkaXpoNSJ9.Gxfz4SZeyv-KDE56SVtJJQ";
const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate subject
    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
      isValid = false;
    } else {
      newErrors.subject = "";
    }

    // Validate message
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {

        setIsSentSuccessfully(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      
      console.log('Form is invalid. Please correct errors.');
    }
  };
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-87.754992);
  // const [lat, setLat] = useState(42.041753);
  // const [zoom, setZoom] = useState(12);

  // useEffect(() => {
  //   if (map.current) return;
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/dark-v10",
  //     center: [lng, lat],
  //     attributionControl: false,
  //     zoom: zoom,
  //   });
  //   const marker = new mapboxgl.Marker({ color: "gold" })
  //     .setLngLat([-87.7547675529179, 42.041853636065426])
  //     .addTo(map.current);
  // });
  // useEffect(() => {
  //   if (!map.current) return;
  //   map.current.on("move", () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  return (
    <div>
      <div className="contact-bg">
        <button onClick={scrollToTop}>Contact Us</button>
      </div>
      <h2>Get in touch with us</h2>
      <div className="wrapper">
        <div className="contact">
          <div className="address">
            <img src={Address} alt="location" width={50} height={50} />
            <div className="address-info">
              <h6>ADDRESS</h6>
              <p>Chicago,Illinois</p>
            </div>
          </div>
          <div className="phone">
            <img src={Phone} alt="number" width={50} height={50} />
            <div className="phone-info">
              <h6>PHONE</h6>
              <p>888-888-8888</p>
            </div>
          </div>
          <div className="email">
            <img src={Email} alt="mail" width={50} height={50} />
            <div className="email-info">
              <h6>EMAIL</h6>
              <p>info@logo.com</p>
            </div>
          </div>
        </div>
        <div className="contact-line"></div>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="name">
              <input
                type="text"
                name="name"
                className="firstName"
                tabIndex="1"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="error">{errors.name}</div>

              <div className="form-email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-email"
                  placeholder="Email"
                  tabIndex="2"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="error">{errors.email}</div>

              </div>
              <div className="subject">
                <input
                  type="text"
                  name="subject"
                  className="firstName"
                  tabIndex="3"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <div className="error">{errors.subject}</div>

              </div>
              <div className="message">
                <textarea
                  placeholder="Message"
                  className="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <div className="error">{errors.message}</div>

              </div>
            </div>
            <button type="submit" className="send">
              Send Message
            </button>
          </form>
        </div>
        {isSentSuccessfully && (
        <div className="success-message">
          <p> Form submitted successfully!</p>
          </div> 

      )}
      </div>

      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" /> */}
    </div>
  );
};

export default Contact;
