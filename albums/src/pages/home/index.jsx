import React, { useEffect, useState, useRef } from 'react';
import './Home.css'
import ImageCard from '../../components/ImageCard';
import { get } from '../../services/apiService.js';
import { useNavigate } from 'react-router-dom';
import withImageHover from '../../hoc/withImageHover';

const HomePage = () => {
  const ImageCardWithHover = withImageHover(ImageCard);
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  const [columns, setColumns] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const resp = await get("/image");
        setImages(Array.isArray(resp.data) ? resp.data : []);
      } catch (error) {
        setImages([]);
      }
    };
    fetchImg();
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const newColumns = distributeImagesBySize(images, 3, containerWidth);
        setColumns(newColumns);
      }
    };
    updateColumns();

    window.addEventListener('resize', updateColumns);
    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, [images]);


  const distributeImagesBySize = (items, numOfColumns, columnWidth) => {
    const columns = Array.from({ length: numOfColumns }, () => []);
    const columnHeights = Array(numOfColumns).fill(0);
  
    items.forEach((item) => {
      const aspectRatio = item.height / item.width;
      
      let minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
      
      const scaledHeight = columnWidth * aspectRatio;
      
      columns[minHeightIndex].push({ ...item, scaledHeight });
      
      columnHeights[minHeightIndex] += scaledHeight;
    });

    return columns;
  };

  return (
    <div className='w-screen px-2' ref={containerRef}>
      <div className="images-container">
        {
          columns.map((column, colIndex) => (
            <div className="column" key={colIndex}>
              {
                column.map((image, index) => (
                  <div onClick={() => navigate(`/image/${image.name}`)}>
                  <ImageCardWithHover  
                    key={index}
                    image={{url: `${process.env.PUBLIC_URL}/${image.name}`, title: image.name}}
                  />
                  </div>
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
