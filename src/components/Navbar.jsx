import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="text-white py-3 w-full h-20 absolute top-0 left-0 bg-black">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <img src="" alt="Logo" className="h-8" />
        
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'px-4 py-2 bg-gray-700 rounded' : 'px-4 py-2'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/findwork"
              className={({ isActive }) => 
                isActive ? 'px-4 py-2 bg-gray-700 rounded' : 'px-4 py-2'
              }
            >
              Find Work
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/findfreelancers"
              className={({ isActive }) => 
                isActive ? 'px-4 py-2 bg-gray-700 rounded' : 'px-4 py-2'
              }
            >
              Find Freelancers
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login"
              className={({ isActive }) => 
                isActive ? 'px-4 py-2 bg-gray-700 rounded' : 'px-4 py-2'
              }
            >
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/signup"
              className={({ isActive }) => 
                isActive ? 'px-4 py-2 bg-gray-700 rounded' : 'px-4 py-2'
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        {/* Post a Project Button */}
        <NavLink 
          to="/post-project" 
          className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        >
          <span className="block rounded-full bg-black px-6 py-2 text-sm font-medium group-hover:bg-transparent">
            Post a Project
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
