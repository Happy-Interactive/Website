// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
