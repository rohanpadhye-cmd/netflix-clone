import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <nav className="absolute w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-red-600 text-4xl font-bold">NETFLIX</Link>
          <div className="flex space-x-4">
            {isLandingPage ? (
              <Link 
                to="/signin" 
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Sign In
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-gray-300">Browse</button>
                <button className="text-white hover:text-gray-300">My List</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
