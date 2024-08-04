import React from "react";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import "./style.css";

const withHover = (WrappedComponent) => {
  return ({ image, ...props }) => {
    return (
      <div className="image-card-wrapper">
        <WrappedComponent image={image} {...props} />
        <div className="overlay">
          <div className="title">{image.title}</div>
          <div className="icons">
            <FavoriteIcon className="icon" />
            <ShareIcon className="icon" />
            <InfoIcon className="icon" />
          </div>
        </div>
      </div>
    );
  };
};

export default withHover;
