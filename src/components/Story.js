// Story.js
import React from 'react';

const Story = ({ imageSrc, text }) => {
  return (
    <span className="pop flex-container">
      <div className="pop-img-container">
        <img src={imageSrc} alt="" className="pop-img"/>
      </div>
      <p className="pop-text">{text}</p>
    </span>
  );
};

export default Story;
