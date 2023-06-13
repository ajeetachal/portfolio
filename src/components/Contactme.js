import React, { useState } from 'react';
import '../styles/Contacme.css';
import { FaBuromobelexperte  } from  "react-icons/fa";


const Contactme = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      work: '',
      mobileNumber: '',
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send the form data to the backend or perform any other actions
      console.log(formData);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        work: '',
        mobileNumber: '',
      });
      // Update the submitted status
      setSubmitted(true);
    };
    
      return (
        <div className="contactform">
         <button id="services">
             <FaBuromobelexperte className="icon" /> Contact  </button>
             <h1 > Contact   < span style={{ color: '#f7b500' }}> Me </span> </h1> 
             <div>
      {submitted ? (
        <p>Thank you for submitting the form!</p>
      ) : (
        <form method='post' action='https://formspree.io/f/moqzgven' onSubmit={handleSubmit} className='formpree'>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Work:
            <input
              type="text"
              name="work"
              value={formData.work}
              onChange={handleChange}
            />
          </label>
          <label>
            Mobile:
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" value="send">Submit</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default Contactme;