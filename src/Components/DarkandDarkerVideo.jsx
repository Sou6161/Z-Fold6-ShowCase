import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import DarkAndDarkerFullVideo from "../Videos/DarkAndDarkerFullVideo.mp4";

const DarkandDarkerVideo = () => {
  const [isInView, setIsInView] = useState(false);
  const textAnimations = [
    useAnimation(),
    useAnimation(),
    useAnimation()
  ];
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          animateTextSequence();
        }
      },
      { 
        threshold: 0.1 // Trigger when at least 10% of the component is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const animateTextSequence = async () => {
    // First word "GET"
    await textAnimations[0].start({
      y: [100, 0],
      opacity: [0, 1],
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    });

    // Pause briefly
    await new Promise(resolve => setTimeout(resolve, 500));

    // Second word "FULLY"
    await textAnimations[1].start({
      y: [100, 0],
      opacity: [0, 1],
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    });

    // Pause briefly
    await new Promise(resolve => setTimeout(resolve, 500));

    // Third word "IMMERSED"
    await textAnimations[2].start({
      y: [100, 0],
      opacity: [0, 1],
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    });
  };

  return (
    <div ref={videoRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        playsInline
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={DarkAndDarkerFullVideo}
      />

      {/* Animated Text */}
      <div className="absolute top-10 left-0 w-full flex flex-col items-center z-10">
        <div className="flex space-x-4">
          <motion.h1
            animate={textAnimations[0]}
            initial={{ y: 100, opacity: 0 }}
            className="text-6xl font-extrabold 
            bg-gradient-to-r from-purple-600 via-green-500 to-cyan-500
            bg-clip-text text-transparent
            drop-shadow-[0_5px_10px_rgba(25,25,255,0.5)]"
          >
            GET
          </motion.h1>
          <motion.h1
            animate={textAnimations[1]}
            initial={{ y: 100, opacity: 0 }}
            className="text-6xl font-extrabold 
            bg-gradient-to-r from-purple-600 via-green-500 to-cyan-500
            bg-clip-text text-transparent
            drop-shadow-[0_5px_10px_rgba(25,25,255,0.5)]"
          >
            FULLY
          </motion.h1>
          <motion.h1
            animate={textAnimations[2]}
            initial={{ y: 100, opacity: 0 }}
            className="text-6xl font-extrabold 
            bg-gradient-to-r from-purple-600 via-green-500 to-cyan-500
            bg-clip-text text-transparent
            drop-shadow-[0_5px_10px_rgba(25,25,255,0.5)]"
          >
            IMMERSED
          </motion.h1>
        </div>
      </div>

      {/* Additional Dynamic Elements */}
      <div className="absolute bottom-10 left-0 w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="container mx-auto px-4"
        >
          <div className="bg-black/50 rounded-xl p-4 max-w-md">
            <p className="text-white text-lg italic">
              Embark on an epic journey through shadows and light
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DarkandDarkerVideo;