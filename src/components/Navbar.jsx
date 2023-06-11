import React, { useState } from "react";
import Logo from "/public/logo.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full sticky z-50 top-0" data-aos="fade-down" data-aos-once="true">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={Logo} alt="" />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link to="/" className="text-black hover:text-[#F48C06] hover:bg-transparent px-3 py-2 rounded-md text-lg font-medium">
                Home
              </Link>
              <Link to="/about" className="text-black hover:text-[#F48C06] hover:bg-transparent px-3 py-2 rounded-md text-lg font-medium">
                About
              </Link>
              <Link to="/feature" className="text-black hover:text-[#F48C06] hover:bg-transparent px-3 py-2 rounded-md text-lg font-medium">
                Feature
              </Link>
              <Link to="/community" className="text-black hover:text-[#F48C06] hover:bg-transparent px-3 py-2 rounded-md text-lg font-medium">
                Community
              </Link>
              <Link to="/blog" className="text-black hover:text-[#F48C06] hover:bg-transparent px-3 py-2 rounded-md text-lg font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-black hover:text-[#F48C06] hover:bg-transparent px-3 py-2 rounded-md text-lg font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button type="button" className="text-black hover:text-[#F48C06] focus:outline-none focus:text-#F48C06" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-black hover:text-[#F48C06] hover:bg-transparent block px-3 py-2 rounded-md text-lg font-medium">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-[#F48C06] hover:bg-transparent block px-3 py-2 rounded-md text-lg font-medium">
              About
            </Link>
            <Link to="/feature" className="text-black hover:text-[#F48C06] hover:bg-transparent block px-3 py-2 rounded-md text-lg font-medium">
              Feature
            </Link>
            <Link to="/blog" className="text-black hover:text-[#F48C06] hover:bg-transparent block px-3 py-2 rounded-md text-lg font-medium">
              Blog
            </Link>
            <Link to="/community" className="text-black hover:text-[#F48C06] hover:bg-transparent block px-3 py-2 rounded-md text-lg font-medium">
              Community
            </Link>
            <Link to="/contact" className="text-black hover:text-[#F48C06] hover:bg-transparent block px-3 py-2 rounded-md text-lg font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
