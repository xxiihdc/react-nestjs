import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from '../../components/ImageCard';

const PhotoPage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get('https://api.example.com/photos');
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map(photo => (
        <ImageCard key={photo.id} image={photo} />
      ))}
    </div>
  );
};

export default PhotoPage;
