import React, { useState } from 'react';
import './ImageCard.css';
import { Favorite as FavoriteIcon, Share as ShareIcon, Info as InfoIcon } from '@mui/icons-material';
import Modal from 'react-modal';


const comments = [
  {
    avatarUrl: 'https://i.pravatar.cc/300',
    name: 'Commenter Name 1',
    content: 'This is the first comment.'
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300',
    name: 'Commenter Name 2',
    content: 'This is the second comment.'
  }
];


const AuthorDetails = ({avatarUrl, name, followers, totalComments}) => {
    <div className="mb-4">
    <div className="flex items-center mb-2">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full mr-4 shadow-lg" />
      <span className="font-semibold text-lg block">{name}</span>
    </div>
    <div className="text-sm text-gray-500">
      <span>{followers} Followers</span>
    </div>
    <div className="text-sm text-gray-600 mb-2">
      <span>{totalComments} Comments</span>
    </div>
  </div>
}

const Comment = ({ avatarUrl, name, content }) => (
  <div className="mb-4">
    <div className="flex items-start">
      <img src={avatarUrl} alt={name} className="w-8 h-8 rounded-full mr-3 shadow-md" />
      <span className="font-semibold text-sm block">{name}</span>
    </div>
    <p className="text-sm text-gray-700 mt-1">{content}</p>
  </div>
);

const ImageCard = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
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
      >
        <div className="flex">
          <div className="w-1/2 p-0 me-3 pe-3 overflow-hidden rounded-lg">
            <img src={image.url} alt={image.title} className="w-auto h-auto object-cover  rounded-lg" />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-start">
            {/* Author */}
            <AuthorDetails
              avatarUrl="https://i.pravatar.cc/300"
              name="Author Name"
              followers={1234}
              totalComments={567}
            />

            <div className="space-y-6">
              {comments.map((comment, index) => (
                <Comment 
                  key={index}
                  avatarUrl={comment.avatarUrl}
                  name={comment.name}
                  content={comment.content}
                  />
              ))}
            </div>
          </div>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default ImageCard;
