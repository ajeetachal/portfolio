import React from "react";
import '../styles/Myskills.css';
import {  FaBuromobelexperte } from  "react-icons/fa";


const Myskills = () => {
   
    return(
        <div className="services">
        <button id="myskills">
             <FaBuromobelexperte className="icon" /> MYSKILLS  </button>
             <div className="contents">
             <h1 > My   <span style={{ color: '#f7b500' }}> Advantages</span> </h1> 

             <div className="skills" >
             <div className="first_row">
                <div className="first"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wordpress_logo_8.png" alt="wordpress" />
                <p>95%</p>
                </div>
                <div className="first"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma" />
                <p>75%</p>
                </div>
                <div className="first"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React js" />
                <p>80%</p>
                </div>
                <div className="first"> 
                <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png" alt="flutter" />
                <p>65%</p>
                </div>
             </div>

             <div className="Second_row">
             <div className="first"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/256px-Electron_Software_Framework_Logo.svg.png?20190331235051" alt="electron" />
                <p>95%</p>
                </div>
                <div className="first"> 
                <img src="https://static.vecteezy.com/system/resources/previews/012/697/295/original/3d-python-programming-language-logo-free-png.png" alt="python" />
                <p>80%</p>
                </div>
                <div className="first"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel" />
                <p>95%</p>
                </div>
                <div className="first"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Android_Studio_Icon_%282014-2019%29.svg/1200px-Android_Studio_Icon_%282014-2019%29.svg.png" alt="Android" />
                <p>75%</p>
                </div>
             </div>
             </div>

            

             
             
        
             </div>
        
        </div>
       
    );
};
export default Myskills;