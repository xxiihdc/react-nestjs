import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
  return (
    <div>
      <div className="image-card">
        <img src={image.url} alt={image.title} />
      </div>
    </div>
  );
};

export default ImageCard;
