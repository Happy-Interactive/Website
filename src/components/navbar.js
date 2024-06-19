// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">☺️ Happy Interactive</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-red-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-red-300">About</Link></li>
          <li><Link to="/services" className="text-white hover:text-red-300">Services</Link></li>
          <li><Link to="/contact" className="text-white hover:text-red-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
