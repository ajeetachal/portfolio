import React from 'react';
import '../styles/Profile.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Profile = () => {
  const iconSize = 30;

  return (
    <div className="profile"> 
     <div className='part1'>
     <h2>Ajeet Kumar Achal</h2>
      <p>Full-stack Developer</p>
      <p>New Delhi, India-110092</p>
      </div>  
     <div className='part2'>
      <h2 className='tag'>Say Hi from Ajeet achal, Framer Designer and Developer
</h2>
     <div>
      <div className="social-icons">
        <div className="social-icon">
          <FaFacebook size={iconSize} className="icon" />
        </div>
        <div className="social-icon">
          <FaTwitter size={iconSize} className="icon" />
        </div>
        <div className="social-icon">
          <FaInstagram size={iconSize} className="icon" />
        </div>
        <div className="social-icon">
          <FaLinkedin size={iconSize} className="icon" />
        </div>
      </div>
    </div>
     </div>
     <div className='part3'>
     <img src="https://shorturl.at/dknr9" alt="Profile" />
     <button id="hire">
        <FaInstagram className="icon" /> Hire Me!
      </button>
      </div>  
      
    </div>
  );
};

export default Profile;
