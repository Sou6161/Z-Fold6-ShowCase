import React, { useState } from "react";
import { motion } from "framer-motion";
import SamsungFoldBackground from "../3DModelBg/SamsungFoldBackground";

// Define color options with their 3D model URLs and button styles
const COLOR_OPTIONS = [
  {
    url: "https://embed.studio.binkies3d.com/live3d/675ab4d5b3f6350053256a2b",
    name: "Silver Shadow",
    buttonColor: "bg-[#999A99]  w-10 h-12 rounded-lg",
  },
  {
    url: "https://embed.studio.binkies3d.com/live3d/675be7e7147a3b005db13a4e",
    name: "Navy",
    buttonColor: "bg-[#313750] w-10 h-12 rounded-lg ",
  },
  {
    url: "https://embed.studio.binkies3d.com/live3d/675be9c6fc8e430054a4882f",
    name: "Pink",
    buttonColor: "bg-pink-200 w-10 h-12 rounded-lg ",
  },
  {
    url: "https://embed.studio.binkies3d.com/live3d/675be9fc5c62790054e2278a",
    name: "Crafted Black",
    buttonColor: "bg-[#454646] w-10 h-12 rounded-lg",
  },
  {
    url: "https://embed.studio.binkies3d.com/live3d/675bea2ea6608f00546b4819",
    name: "White",
    buttonColor: "bg-[#D8D8D7] w-10 h-12 rounded-lg",
  },
];

const ColorModels = () => {
  // State to track the currently selected color
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0].name);
  const [modelUrl, setModelUrl] = useState(COLOR_OPTIONS[0].url);

  // Function to change the color and 3D model
  const handleColorChange = (colorOption) => {
    setSelectedColor(colorOption.name);
    setModelUrl(colorOption.url);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      {/* Background Components */}
      <SamsungFoldBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/80 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1
            className="text-6xl md:text-5xl font-extrabold font-comfortaa bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
          >
            Colourful. Confident. Wonderful
          </h1>
          <p className="text-xl md:text-lg font-Questrial text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
            Colours as bold as you. Be confident, and be a true standout with
            one of the special colours — available only here on Samsung.com
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
            delay: 0.6,
          }}
          className="max-w-xl mx-auto relative mb-8"
        >
          <div
            className="-top-10 relative overflow-hidden rounded-3xl shadow-2xl 
            border-4 border-white/10 bg-black/70 backdrop-blur-lg"
          >
            <motion.iframe
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                type: "tween",
              }}
              className="w-full aspect-video rounded-2xl"
              width="100%"
              height="600"
              src={modelUrl}
              frameBorder="0"
              allowFullScreen
              title="Samsung Z Fold 6 3D Model"
            />
          </div>
          <p className="text-xl font-Questrial font-semibold text-gray-200 text-center mt-4">
            {selectedColor}
          </p>
        </motion.div>

        {/* Color Selection Buttons */}
        <div className="flex justify-center space-x-4 mb-10 ">
          {COLOR_OPTIONS.map((colorOption) => (
            <button
              key={colorOption.name}
              className={`
                ${colorOption.buttonColor} 
                transition-colors duration-300 border-2 border-cyan-500  
              `}
              onClick={() => handleColorChange(colorOption)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorModels;
