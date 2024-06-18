import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">☺️ Happy Interactive.</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-red-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-red-300">About</a></li>
          <li><a href="/services" className="text-white hover:text-red-300">Services</a></li>
          <li><a href="/contact" className="text-white hover:text-red-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;