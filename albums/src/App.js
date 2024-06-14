import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import HomePage from './pages/home/index';
import PhotoPage from './pages/photos/index';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/photos" element={<PhotoPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
