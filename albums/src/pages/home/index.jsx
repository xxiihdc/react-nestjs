import React, { useEffect, useState } from 'react';
import './Home.css'
import ImageCard from '../../components/ImageCard';
import SearchBar from '../../components/SearchBar';


const HomePage = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const imageArray = Array.from(Array(10).keys()).map((index) => ({
      url: index % 2 === 0 ? `${process.env.PUBLIC_URL}/img1.jpeg` : `${process.env.PUBLIC_URL}/img2.jpeg`,
      title: `title ${index}`,
      height: Math.floor(Math.random() * 200) + 100,
    }));
    
    setImages(imageArray);

  }, [])

  const distributeImagesByHeight = (items, numOfColumns) => {
    const columns = Array.from({ length: numOfColumns }, () => []);
    const columnHeights = Array(numOfColumns).fill(0);

    items.forEach((item) => {
      let minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columns[minHeightIndex].push(item);
      columnHeights[minHeightIndex] += item.height;
    });

    return columns;
  };

  const columns = distributeImagesByHeight(images, 3);

  return (
    <div className='container'>
      <div className="navbar">
        <SearchBar/>
      </div>
      <div className="images-container">
        {
          columns.map((column, colIndex) => (
            <div className="column" key={colIndex}>
              {
                column.map((image, index) => (
                  <ImageCard key={index} image={image} />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
