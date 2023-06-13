import React from "react";
import '../styles/resume.css';
import { FiFileText, FiDownload } from "react-icons/fi";
import { MdCardTravel } from "react-icons/md";
import { BsCalendar2Month } from "react-icons/bs";


const Resume = () => {
   
    return(
        <div className="resume">
        <button id="about">
             <FiFileText className="icon" /> Resume  </button>

             <div className="education">
              <h1 className="scroll-animation"> Education & <span style={{ color: '#f7b500' }}> Experience</span> </h1> 
              <p>Download My Resume  <FiDownload className="icon" /> </p>
              <div className="resume-timeline"> 
                 <div className="item1"  >
                    <span className="date"> <BsCalendar2Month className="icon" /> 2020 - Present</span>
                     <h2> <MdCardTravel className="icon"  />Framer Desinger &amp; Developer</h2>
                     <p>Brunodee Agency</p>                                   
                     <h2> <MdCardTravel className="icon"  /> Front-End WordPress Developer</h2>
                     <p>Envato Market</p>                    
                 </div> 
                 <div className="item1">
                    <span className="date"> <BsCalendar2Month className="icon" />2013 - 2019</span>
                    <h2> <MdCardTravel className="icon"  /> Webflow Developer &amp; Co-Founder</h2>
                    <p>Designflow Studio</p>
                    <h2> <MdCardTravel className="icon"  /> Web Designer</h2>
                    <p>Freelance</p>
                    <h2> <MdCardTravel className="icon"  /> Leader Team of Marketing</h2>
                    <p>AHA Marketing Agency</p>
                </div>        
             </div>
            
            </div>
        
        </div>
       
    );
};
export default Resume;