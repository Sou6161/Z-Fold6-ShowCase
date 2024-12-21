import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
  Laptop,
  Tv,
  Watch,
  Headphones
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Top Banner */}
      <motion.div 
        className="bg-blue-600 text-white text-center py-2 text-sm"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pre-order Galaxy Z Fold6 now and get exclusive launch offers
      </motion.div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            SAMSUNG
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-1">
                Mobile <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute  hidden group-hover:block w-48 bg-gray-600 mt-2 p-4 rounded-lg shadow-xl">
                <ul className="space-y-2">
                  <li className="hover:text-blue-500">Galaxy Z Fold6</li>
                  <li className="hover:text-blue-500">Galaxy S Series</li>
                  <li className="hover:text-blue-500">Galaxy A Series</li>
                  <li className="hover:text-blue-500">Compare</li>
                </ul>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>TV & Audio</motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>Computing</motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>Appliances</motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>Galaxy AI</motion.div>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="hidden md:block cursor-pointer"
            >
              <Search className="w-6 h-6" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="hidden md:block cursor-pointer"
            >
              <User className="w-6 h-6" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            <motion.button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-6 space-y-4 bg-gray-900">
          <div className="flex items-center gap-2 py-2 border-b border-gray-800">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>Mobile</span>
          </div>
          <div className="flex items-center gap-2 py-2 border-b border-gray-800">
            <Tv className="w-5 h-5 text-blue-500" />
            <span>TV & Audio</span>
          </div>
          <div className="flex items-center gap-2 py-2 border-b border-gray-800">
            <Laptop className="w-5 h-5 text-blue-500" />
            <span>Computing</span>
          </div>
          <div className="flex items-center gap-2 py-2 border-b border-gray-800">
            <Watch className="w-5 h-5 text-blue-500" />
            <span>Galaxy Watch</span>
          </div>
          <div className="flex items-center gap-2 py-2 border-b border-gray-800">
            <Headphones className="w-5 h-5 text-blue-500" />
            <span>Accessories</span>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;