import React from "react";
import '../styles/Introduction.css';
import { FiUser } from "react-icons/fi";


const Intro = () => {
   
    return(
        <div className="intro">
        <button id="intro">
             <FiUser className="icon" /> INTRODUCTION  </button>
        <h1 className="scroll-animation">
        Say Hi from <span style={{ color: '#f7b500' }}> Ajeet Achal</span>, Webflow Designer and Developer
      </h1>  
       <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
       <div className="experince">
        <p><span style={{ color: '#f7b500', fontSize: '66px' }}> 4+ </span> YEARS OF EXPERIENCE</p>
        <p><span style={{ color: '#f7b500', fontSize: '66px' }}> 15+ </span> PROJECTS COMPLETED IN MULTIPLE LANGUAGE</p>
       </div>
        </div>
       
    );
};
export default Intro;