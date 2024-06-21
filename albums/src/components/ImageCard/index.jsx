import React from 'react';
import './ImageCard.css'

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};


export default ImageCard;
