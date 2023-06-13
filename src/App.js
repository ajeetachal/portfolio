import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Intro from './components/Introduction';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Serve from './components/Serve';
import Myskills from './components/Myskills';
import Testimonials from './components/Testimonials';
import Contactme from './components/Contactme';
import { BiUserCircle, BiUserCheck, BiFile, BiBriefcase, BiCodeAlt, BiCoinStack, BiSupport   } from "react-icons/bi";

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (activeSection !== '') {
      const element = document.getElementById(activeSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };
  const menuItemStyle = {
    display: 'inline-block',
    margin: '0.5rem',
    cursor: 'pointer',
    backgroundColor: '#f7b500',

  }; 

  const menuIconStyle = {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '12px',
    backgroundColor: '#38b7bf',
    Color: '#fff',
    border: '0.5px solid #38b7bf',

  };
 
  const menuStyle = {
    position: 'sticky',
    top: '16rem',
    left: '90%',
    height: 'fit-content',
    overflowy: 'auto',
    display: 'grid',    
    padding: '2px',
    justifycontent: 'spacebetween',
    backgroundColor: '#f7b500',
    width: 'fit-content',
    borderRadius: '12px',
    zIndex: '1',

    
  }
  

  return (
    <div className="app">
      
      <div className="sections">
        <Profile />

        <div className="below"  >
        <div className="menu" style={menuStyle}>
        <ul style={{ listStyleType: 'none', padding: '0.2rem', display: 'grid',  }}>
          <li onClick={() => handleMenuClick('intro')} style={menuItemStyle}><BiUserCircle className="ic"  style={menuIconStyle} /></li>
          <li onClick={() => handleMenuClick('about-me')} style={menuItemStyle}><BiUserCheck  className="ic" style={menuIconStyle}  /></li>
          <li onClick={() => handleMenuClick('resume')} style={menuItemStyle}><BiFile  className="ic" style={menuIconStyle}  /></li>
          <li onClick={() => handleMenuClick('serve')} style={menuItemStyle}><BiBriefcase  className="ic" style={menuIconStyle}  /></li>
          <li onClick={() => handleMenuClick('myskills')} style={menuItemStyle}><BiCodeAlt  className="ic" style={menuIconStyle}  /></li>
          <li onClick={() => handleMenuClick('testimonials')} style={menuItemStyle}><BiCoinStack  className="ic" style={menuIconStyle} /></li>
          <li onClick={() => handleMenuClick('contactme')} style={menuItemStyle}><BiSupport className="ic"  style={menuIconStyle} /></li>
        </ul>
      </div>
        <div className="content">
          <div id="intro">
            <Intro />
          </div>
          <div id="about-me">
            <AboutMe />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="serve">
            <Serve />
          </div>
          <div id="myskills">
            <Myskills />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contactme">
            <Contactme />
          </div>
        </div>
       
        </div>
      
      </div>
    </div>
  );
};

export default App;
