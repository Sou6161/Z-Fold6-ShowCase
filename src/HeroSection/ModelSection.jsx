import { motion } from "framer-motion";
import AIStarIcon from "../ModelImages/GalaxyAIStarIcon.png";
import HeroModel from "../ModelImages/HeroSectionModelImage-Photoroom.png";
import VideosSection from "../Components/VideosSection";
import ModelVideoUserScroll from "../Components/ModelVideoUserScroll";
import ColorModels from "../Components/ColorModels";
import MidHeroSection from "../Components/MidHeroSection";
import ClickToSearch from "../Components/ClickToSearch";
import DarkandDarkerVideo from "../Components/DarkandDarkerVideo";
import MobileDetails from "../Components/MobileDetails";
import CameraRealImages from "../Components/CameraRealImages";
import ModelHardwareImages from "../Components/ModelHardwareImages";
import SwitchToGalaxy from "../Components/SwitchToGalaxy";
import FrequentlyAskQues from "../Components/FrequentlyAskQues";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ModelSection = () => {
  return (
    <>
      <div className="relative z-50">
        <Header />
      </div>
      
      {/* Hero Section */}
      <div className="relative h-[82vh] sm:h-[95vh] md:h-[70vh] lg:h-[57.6vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>

        {/* Main content container */}
        <div className="relative container mx-auto px-4 pt-16 sm:pt-20 pb-16 sm:pb-32 flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-8 z-10 text-center lg:text-left">
            <motion.div
              className="inline-block font-Exo bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              New Release 2024
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-Rajdhani leading-tight"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Galaxy Z Fold
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"> 6</span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 font-Questrial"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <img src={AIStarIcon} alt="Galaxy AI" className="w-6 sm:w-8 h-6 sm:h-8" />
                <span className="text-lg sm:text-xl font-semibold">Galaxy AI</span>
              </div>
              <div className="text-lg sm:text-xl">
                is <span className="text-blue-400 font-semibold">here</span>
              </div>
            </motion.div>

            <motion.button
              className="bg-gradient-to-r font-Exo from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              Feel The Live Demo
            </motion.button>
          </div>

          {/* Phone Image */}
          <motion.div
            className=" w-[110vw]   sm:w-3/4 lg:w-1/2 mt-8 lg:mt-0 z-10"
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
              className="w-full h-[50vh] -ml-5   brightness-110 contrast-125 2xl:w-full 2xl:max-w-2xl mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      {/* Bottom Section */}
      <div className="h-[50vh]   sm:h-[60vh] md:h-[50vh] lg:h-[43vh] bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-center mt-8 sm:mt-16  lg:mt-[10vh] inline-flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-bold"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r font-Rajdhani from-red-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"
            >
              Galaxy AI
            </motion.span>

            <motion.img
              src={AIStarIcon}
              alt="Galaxy AI"
              className="w-8 sm:w-10 h-8 sm:h-10"
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
              className="bg-gradient-to-r font-Rajdhani from-blue-400 to-purple-400 text-transparent bg-clip-text"
            >
              is here
            </motion.span>
          </motion.div>

          {/* Description Section */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative font-Exo mt-6 sm:mt-8 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg text-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-transparent bg-clip-text leading-relaxed px-4"
          >
            Put <span className="font-semibold">PC-like power</span> in your pocket with
            <span className="font-semibold"> Galaxy Z Fold6</span>. More powerful than ever with its
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> super-slim, productive screen</span>
            . Now super-charged with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Galaxy AI</span>{" "}
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
      <MobileDetails />
      <CameraRealImages />
      <ModelHardwareImages />
      <SwitchToGalaxy />
      <FrequentlyAskQues />
      <Footer />
    </>
  );
};

export default ModelSection;
