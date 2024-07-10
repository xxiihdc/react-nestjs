import React from 'react';
import { CircularProgress } from '@mui/material';
import './LoadingOverlay.css'

const LoadingOverlay = () => {
  return (
    <div className='loading-overlay'>
      <CircularProgress color="primary" />
    </div>
  );
};

export default LoadingOverlay;
