import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Home className="w-8 h-8 text-indigo-600" /> */}
            <img 
            src="https://know.dayrade.com/public/stylesheets/icon/Nester-Logo.svg" 
            alt="Logo" 
            className="w-8 h-8 rounded-full"
          />
            <span className="text-xl font-serif">Luxury Real Estate</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/listings"
              className={`${
                location.pathname === '/listings'
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              Listings
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;