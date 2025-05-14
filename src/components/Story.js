// Story.js
import React from 'react';

const Story = ({ imageSrc, text }) => {
  return (
    <div className="pop flex-container">
      <div className="pop-img-container">
        <img src={imageSrc} alt="" className="pop-img" />
      </div>
      <p className="pop-text">{text}</p>
    </div>
  );
};

export default Story;
