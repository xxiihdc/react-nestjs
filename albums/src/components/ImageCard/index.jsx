import React from 'react';
import styled from 'styled-components';

const ImageCard = ({ image }) => {
  return (
    <Card>
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </Card>
  );
};

const Card = styled.div`
  margin: 1rem;
  img {
    width: 100%;
    height: auto;
  }
  p {
    text-align: center;
  }
`;

export default ImageCard;
