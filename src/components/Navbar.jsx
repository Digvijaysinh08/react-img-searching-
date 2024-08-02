import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev); // Toggle menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close menu
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Images Maker</div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/features" className="text-gray-300 hover:text-white">Features</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/login" className="text-white px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
            Login
          </Link>
          <Link to="/signup" className="ml-4 text-white px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700">
            Sign Up
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <MdClose size={24} /> : <PiDotsNineBold size={24} />}
        </button>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col gap-2 justify-center items-center p-6 transition-transform transform translate-x-0"
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white"
            aria-label="Close menu"
          >
            <MdClose size={24} />
          </button>
          <Link to="/" className="text-gray-300 hover:text-white mb-4 text-xl" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/features" className="text-gray-300 hover:text-white mb-4 text-xl" onClick={closeMenu}>
            Features
          </Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white mb-4 text-xl" onClick={closeMenu}>
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white mb-4 text-xl" onClick={closeMenu}>
            Contact
          </Link>
          <div >
          <Link to="/login" className="text-white font-bold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 m-5 text-xl" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/signup" className="text-white m-5  font-bold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-xl" onClick={closeMenu}>
            Sign Up
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
