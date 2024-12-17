import { motion } from "framer-motion";
import AIStarIcon from "../ModelImages/GalaxyAIStarIcon.png";
import HeroModel from "../ModelImages/HeroSectionModelImage-Photoroom.png";
import VideosSection from "../Components/VideosSection";
import ModelVideoUserScroll from "../Components/ModelVideoUserScroll";
import ColorModels from "../Components/ColorModels";
import MidHeroSection from "../Components/MidHeroSection";
import ClickToSearch from "../Components/ClickToSearch";
import NoteAssist from "../Components/NoteAssist";
import DarkandDarkerVideo from "../Components/DarkandDarkerVideo";

const ModelSection = () => {
  return (
    <>
      <div className="relative h-[57.6vh] bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>

        {/* Main content container */}
        <div className="relative container mx-auto px-4 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="lg:w-1/2 text-white space-y-8 z-10">
            <motion.div
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-4 py-1 text-sm"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              New Release 2024
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-7xl font-bold font-['Exo_2'] leading-tight"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Galaxy Z Fold
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                {" "}
                6
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <img src={AIStarIcon} alt="Galaxy AI" className="w-8 h-8" />
                <span className="text-xl font-semibold">Galaxy AI</span>
              </div>
              <div className="text-xl">
                is <span className="text-blue-400 font-semibold">here</span>
              </div>
            </motion.div>

            <motion.button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              Feel The Live Demo
            </motion.button>
          </div>

          {/* Phone Image */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0 z-10"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 50,
              duration: 0.2,
              delay: 1,
            }}
          >
            <img
              src={HeroModel}
              alt="Galaxy Z Fold 6"
              className="w-full max-w-2xl mx-auto  drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[57.5vh] left-0 right-0 h-px bg-gradient-to-r from-transparent  via-purple-500 to-transparent"></div>
      </div>
      <div className="h-[43vh] bg-gradient-to-b from-black to-gray-900 relative  overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative left-[20vw] top-[10vh] inline-flex items-center gap-3 text-3xl md:text-4xl font-bold"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"
            >
              Galaxy AI
            </motion.span>

            <motion.img
              src={AIStarIcon}
              alt="Galaxy AI"
              className="w-10 h-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            />

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
            >
              is here
            </motion.span>
          </motion.div>

          {/* Description Section */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative top-20 mt-8 max-w-2xl mx-auto text-lg text-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-transparent bg-clip-text leading-relaxed"
          >
            Put <span className="font-semibold">PC-like power</span> in your
            pocket with
            <span className="font-semibold"> Galaxy Z Fold6</span>. More
            powerful than ever with its
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}
              super-slim, productive screen
            </span>
            . Now super-charged with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Galaxy AI
            </span>{" "}
            on foldables.
          </motion.p>
        </div>
      </div>

      <VideosSection />
      <ModelVideoUserScroll />
      <ColorModels />
      <MidHeroSection />
      <ClickToSearch />
      <DarkandDarkerVideo />
    </>
  );
};

export default ModelSection;
