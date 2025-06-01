import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-bold">Simulatrix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/simulations" className="text-gray-700 hover:text-primary font-medium">
              Simulations
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/admin">
              <Button variant="primary" size="sm">
                Admin Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2">
              Home
            </Link>
            <Link to="/simulations" className="text-gray-700 hover:text-primary font-medium py-2">
              Simulations
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2">
              Contact
            </Link>
            <Link to="/admin" className="text-primary font-medium py-2">
              Admin Dashboard
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-gray-100">
          <div className="container mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search simulations..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <button
                onClick={toggleSearch}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};