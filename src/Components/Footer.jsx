import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Smartphone,
  Shield,
  CreditCard,
  Headphones,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" relative -top-[14vh]  md:-top-[17vh] bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Pre-Footer Highlights */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <Smartphone className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">Galaxy Z Fold6</h4>
              <p className="text-sm text-gray-400">Pre-order now</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <Shield className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">Samsung Care+</h4>
              <p className="text-sm text-gray-400">Protection plan</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <CreditCard className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">Flexible Payment</h4>
              <p className="text-sm text-gray-400">0% financing available</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <Headphones className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm text-gray-400">Expert assistance</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Product Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Galaxy Z Fold6</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Specifications</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Compare Models</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Galaxy AI Features</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Accessories</span>
              </motion.li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Contact Us</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Service Locations</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>Community</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <ChevronRight className="w-4 h-4" />
                <span>FAQ</span>
              </motion.li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>1-800-SAMSUNG</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@samsung.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Find a Store</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for Galaxy Z Fold6 news and exclusive offers
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <motion.button
                className="w-full px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#1DA1F2" }}
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#4267B2" }}
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#E1306C" }}
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#FF0000" }}
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="text-gray-400 text-sm">
              © {currentYear} Samsung. All rights reserved. | Privacy Policy |
              Terms of Use
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
