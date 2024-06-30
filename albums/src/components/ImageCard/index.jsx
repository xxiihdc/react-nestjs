import React, { useState } from 'react';
import './ImageCard.css';
import { Favorite as FavoriteIcon, Share as ShareIcon, Info as InfoIcon } from '@mui/icons-material';
import Modal from 'react-modal';

const ImageCard = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    console.log("open modal")
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div className="image-card" onClick={openModal}>
        <img src={image.url} alt={image.title} />
        <div className="overlay">
          <div className="title">{image.title}</div>
          <div className="icons">
            <FavoriteIcon className="icon" />
            <ShareIcon className="icon" />
            <InfoIcon className="icon" />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
        closeTimeoutMS={500}
      >
        <h2>{image.title}</h2>
        <img src={image.url} alt={image.title} style={{ width: '100%' }} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ImageCard;
