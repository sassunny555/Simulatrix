import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Facebook, Instagram, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-white text-2xl font-heading font-bold">Simulatrix</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Interactive science for curious minds. Explore simulations across physics, 
              chemistry, biology, mathematics, engineering, and astronomy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/simulations" className="text-gray-400 hover:text-white transition-colors">
                  All Simulations
                </Link>
              </li>
              <li>
                <Link to="/subjects/physics" className="text-gray-400 hover:text-white transition-colors">
                  Physics
                </Link>
              </li>
              <li>
                <Link to="/subjects/chemistry" className="text-gray-400 hover:text-white transition-colors">
                  Chemistry
                </Link>
              </li>
              <li>
                <Link to="/subjects/biology" className="text-gray-400 hover:text-white transition-colors">
                  Biology
                </Link>
              </li>
              <li>
                <Link to="/subjects/mathematics" className="text-gray-400 hover:text-white transition-colors">
                  Mathematics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest simulations and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="primary" size="sm" className="!py-2">
                <Send size={16} />
              </Button>
            </form>
            <div className="mt-8">
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Simulatrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};