import React, { useState } from 'react';
import '../styles/Testimonials.css';
import {  FaBuromobelexperte } from  "react-icons/fa";
import { GrPrevious,GrNext } from "react-icons/gr";



const feedbackData = [
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    comment: 'Working with Ajeet Achal was an absolute pleasure. His expertise in web development is truly remarkable. He understood our requirements perfectly and delivered a stunning website that exceeded our expectations. Ajeets attention to detail and commitment to excellence are commendable. I highly recommend Ajeet Achal for any web development project!',
    profilePicture: 'https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=',
  },
  {
    name: 'Jane Smith',
    designation: 'Marketing Manager, XYZ Inc.',
    comment: 'Ajeet Achal is a highly skilled web developer who transformed our online presence. His technical prowess and creative approach resulted in a visually appealing and user-friendly website. Ajeets ability to effectively communicate and collaborate made the entire development process smooth and efficient. He consistently delivered high-quality work and went above and beyond to ensure our satisfaction. I cant thank Ajeet enough for his exceptional work! ',
    profilePicture: 'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
  },
  {
    name: 'David Williams',
    designation: 'CTO, PQR Corporation',
    comment: 'I had the pleasure of working with Ajeet Achal on a complex web development project... His technical prowess and creative approach resulted in a visually appealing and user-friendly website. Ajeets ability to effectively communicate and collaborate made the entire development process smooth and efficient. He consistently delivered high-quality work and went above and beyond to ensure our satisfaction.',
    profilePicture: 'https://t4.ftcdn.net/jpg/01/44/94/63/360_F_144946314_8FFdVY6c2WJkCWB5CpIQCtymYJlhqqmp.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleForwardClick = () => {
    if (currentIndex < feedbackData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBackwardClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const { name, designation, comment, profilePicture } = feedbackData[currentIndex];

  return (
    <div className="comment-container">
         <button id="services">
             <FaBuromobelexperte className="icon" /> Testimonials  </button>
             <h1 > My   <span style={{ color: '#f7b500' }}> Specializations</span> </h1> 

      <div className="comment" style={{ }}>
        <div className="profiles">
          <img src={profilePicture} alt="Profile" />
          <div className='details'>
            <h2>{name}</h2>
            <p>{designation}</p>
          </div>
        </div>
        <p style={{fontWeight: '300'}}>{comment}</p>
      </div>
      <div className="comment-navigation">
        <button onClick={handleBackwardClick} disabled={currentIndex === 0}>
        <GrPrevious className="icon" /> 
        </button>
        <span>{`${currentIndex + 1}/${feedbackData.length}`}</span>
        <button onClick={handleForwardClick} disabled={currentIndex === feedbackData.length - 1}>
        <GrNext className="icone" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
