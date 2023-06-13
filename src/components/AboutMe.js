import React from "react";
import '../styles/AboutMe.css';
import { FiUser } from "react-icons/fi";


const About = () => {
   
    return(
        <div className="about">
        <button id="about">
             <FiUser className="icon" /> AboutMe  </button>
             <div className="contents">
             <h1 className="scroll-animation"> Every great design begin with an even  <span style={{ color: '#f7b500' }}> better story</span> </h1>  
        <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious,
           and perpetually working on improving my chopsone design problem at a time.!</p>
             </div>
        
        </div>
       
    );
};
export default About;