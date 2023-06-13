import React from "react";
import '../styles/Serve.css';
import { FaCode, FaCodeBranch, FaLaptopCode,FaUnity } from  "react-icons/fa";


const Serve = () => {
   
    return(
        <div className="services">
        <button id="services">
             <FaUnity className="icon" /> SERVICES  </button>
             <div className="contents">
             <h1 > My   <span style={{ color: '#f7b500' }}> Specializations</span> </h1> 
             
             <div className="special"> 
             <div className="content1">
                <h2>Website Design </h2>
                <p>I created digital products with unique ideas use Figma & Framer </p>
                <span>12+ PROJECTS</span>
             </div>
             < FaCode className="icon" style={{ fontSize: '30px', color: '#f7b500' }} />
             </div>

              
             <div className="special"> 
             <div className="content1">
                <h2>Development </h2>
                <p>I build website go live with Framer, Webflow or WordPress </p>
                <span>14+ PROJECTS</span>
             </div>
             <FaCodeBranch className="icon" style={{ fontSize: '30px', color: '#f7b500' }} />
             </div>

             
             <div className="special"> 
             <div className="content1">
                <h2>SEO/Marketing</h2>
                <p>Increase the traffic for your website with SEO optimized </p>
                <span>24+ PROJECTS</span>
             </div>
             <FaLaptopCode className="icon" style={{ fontSize: '30px', color: '#f7b500' }} />
             </div>
        
             </div>
        
        </div>
       
    );
};
export default Serve;