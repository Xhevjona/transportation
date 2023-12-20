import React, { useState } from 'react';
import "../Styles/Booking.scss";

const CarBookingForm = () => {
    const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    pickupDate: '',
    returnDate: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    pickupDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.pickupDate.trim()) {
      newErrors.pickupDate = 'Pickup Date is required';
    }

    if (!formData.returnDate.trim()) {
      newErrors.returnDate = 'Return Date is required';
    } else if (formData.pickupDate >= formData.returnDate) {
      newErrors.returnDate = 'Return Date must be after Pickup Date';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission, e.g., send data to server
      setIsSentSuccessfully(true);
        setFormData({ fullName: "", email: "", pickupDate: "", returnDate: "" });
      console.log('Form is invalid. Please correct errors.');
    }
  };

  return (
    <div>
    <div className='book-title'>
        <h2>Book Online</h2>
    </div>
    <div className='booking-form'>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Full Name</p>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <div className='error'> {errors.fullName && <span>{errors.fullName}</span>}</div>
       </label>
      <br />
     
      <label>
        <p>Email</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
       <div className='error'> {errors.email && <span>{errors.email}</span>}</div>
      </label>
      <br />

      <label>
        <p>Pickup Date</p>
        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
        />
        <div className='error'>{errors.pickupDate && <span>{errors.pickupDate}</span>}</div>
      </label>
      <br />

      <label>
        <p>Return Date</p>
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate} 
          onChange={handleChange}
        />
       <div className='error'> {errors.returnDate && <span>{errors.returnDate}</span>}</div>
      </label>
      <br />
      <button type="submit" className='onlinebutton'>Book Car</button>
    </form>
    </div>
    {isSentSuccessfully && (
        <div className="success-message">
          <p> Thank you for submitting! <br/> We will send you a message shortly to confirm your booking.</p>
          </div> 

      )}
    </div>
  );
};

export default CarBookingForm;