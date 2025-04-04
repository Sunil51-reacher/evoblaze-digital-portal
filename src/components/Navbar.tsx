
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-evoblaze-blue">Evo<span className="text-evoblaze-orange">blaze</span></span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link to="/" className="px-3 py-2 font-medium hover:text-evoblaze-blue">Home</Link>
            <Link to="/services" className="px-3 py-2 font-medium hover:text-evoblaze-blue">Services</Link>
            <Link to="/about" className="px-3 py-2 font-medium hover:text-evoblaze-blue">About Us</Link>
            <Button asChild className="ml-4 bg-evoblaze-blue hover:bg-evoblaze-blue/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-evoblaze-blue hover:text-evoblaze-blue/80 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link to="/" className="block px-3 py-2 font-medium hover:text-evoblaze-blue" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 font-medium hover:text-evoblaze-blue" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about" className="block px-3 py-2 font-medium hover:text-evoblaze-blue" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block px-3 py-2 font-medium hover:bg-evoblaze-blue/10 text-evoblaze-blue" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
