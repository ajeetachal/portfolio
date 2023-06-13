import React from 'react';
import '../styles/Content.css';

const Content = ({ activeSection }) => {
  const renderContent = () => {
    if (activeSection === 'education') {
      return <h2>Education</h2>;
    } else if (activeSection === 'experience') {
      return <h2>Experience</h2>;
    } else if (activeSection === 'portfolio') {
      return <h2>Portfolio</h2>;
    } else {
      return <h2>Please select a section from the menu</h2>;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default Content;
