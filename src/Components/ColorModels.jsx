import React from 'react';
import { motion } from 'framer-motion';
import SamsungFoldBackground from '../3DModelBg/SamsungFoldBackground';

const ColorModels = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      {/* Samsung Fold Background */}
      <SamsungFoldBackground />

      {/* Background Gradient Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/80 z-0"
      />

      {/* Hero Content Section */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Colourful. Confident. Wonderful
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
            Colours as bold as you. Be confident, and be a true standout with one 
            of the special colours — available only here on Samsung.com
          </p>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 10,
            delay: 0.6
          }}
          className="max-w-xl mx-auto relative"
        >
          <div className="-top-10 relative overflow-hidden rounded-3xl shadow-2xl 
            border-4 border-white/10 bg-black/70 backdrop-blur-lg">
            <motion.iframe
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.8,
                type: "tween"
              }}
              className="w-full aspect-video rounded-2xl"
              width="100%"
              height="600"
              src="https://embed.studio.binkies3d.com/live3d/675ab4d5b3f6350053256a2b"
              frameBorder="0"
              allowFullScreen
              title="Samsung Z Fold 6 3D Model"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ColorModels;