import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ModelHardwareImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();

  const words = ["Durable.", "Reliable.", "Built to last"];
  
  const wordAnimations = words.map((_, index) => {
    return useTransform(
      scrollY,
      [0, 200],
      [100 * (index + 1), 0]
    );
  });

  const features = [
    {
      title: "Engineered for Endurance",
      description: "Meet our Slim and Innovative FlexHinge.",
      bgGradient: "bg-gradient-to-br via-indigo-900 to-purple-900",
      image: "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-durability-hinge.jpg?imbypass=true",
    },
    {
      title: "Shielded In Aluminum",
      description: "Enhanced Armor Aluminum keeps you protected.",
      bgGradient: "bg-gradient-to-br via-pink-900 to-rose-900",
      image: "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-durability-aluminum.jpg?imbypass=true",
    },
    {
      title: "Truly Tough",
      description: "Strong protection with Corning Gorilla Glass Victus 2.",
      bgGradient: "bg-gradient-to-br via-teal-900 to-cyan-900",
      image: "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-durability-shatterproof.jpg?imbypass=true",
    },
    {
      title: "Stay water-resistant",
      description: "IP48 water resistance for those unexpected spills",
      bgGradient: "bg-gradient-to-br via-purple-900 to-fuchsia-900",
      image: "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-durability-waterproof-a.jpg?imbypass=true",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <div className="  relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section with Scroll Animation */}
      <div className="text-center py-16 px-4  flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          {words.map((word, index) => (
            <motion.span
              key={word}
              style={{ y: wordAnimations[index] }}
              className="text-4xl font-lexend md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Features Carousel */}
      <div className="relative px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl p-12 ${features[activeIndex].bgGradient} shadow-2xl`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-Russo md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {features[activeIndex].title}
                </h2>
                <p className="text-lg font-arvobold text-gray-300 leading-relaxed">
                  {features[activeIndex].description}
                </p>
              </div>
              <div className="relative h-72 md:h-[330px] overflow-hidden rounded-2xl">
                <img
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  className="w-[80vw] 2xl:w-[40vw] h-[40vh] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500/80 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex space-x-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-16 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-8 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="text-white p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500/80 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHardwareImages;