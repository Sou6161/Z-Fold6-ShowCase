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
        threshold: 0.3 // Increased threshold for smoother trigger
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
    const baseAnimation = {
      opacity: [0, 1],
      scale: [0.9, 1],
      rotateX: [45, 0],
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1], // Cubic bezier for smooth easing
      }
    };

    // Animate words with stagger
    await Promise.all([
      textAnimations[0].start({
        ...baseAnimation,
        transition: {
          ...baseAnimation.transition,
          delay: 0.2
        }
      }),
      textAnimations[1].start({
        ...baseAnimation,
        transition: {
          ...baseAnimation.transition,
          delay: 0.4
        }
      }),
      textAnimations[2].start({
        ...baseAnimation,
        transition: {
          ...baseAnimation.transition,
          delay: 0.6
        }
      })
    ]);
  };

  return (
    <div ref={videoRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        playsInline
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={DarkAndDarkerFullVideo}
      />

      {/* Animated Text */}
      <div className="absolute top-10 font-Exo left-0 w-full flex flex-col items-center z-10">
        <div className="flex space-x-4">
          {[
            { text: "GET", delay: 0 },
            { text: "FULLY", delay: 0.2 },
            { text: "IMMERSED", delay: 0.4 }
          ].map((word, index) => (
            <motion.h1
              key={word.text}
              animate={textAnimations[index]}
              initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
              className="text-6xl font-extrabold 
                bg-gradient-to-r from-purple-600 via-green-500 to-cyan-500
                bg-clip-text text-transparent
                drop-shadow-[0_5px_10px_rgba(25,25,255,0.5)]
                transform-gpu" // Added for better performance
            >
              {word.text}
            </motion.h1>
          ))}
        </div>
      </div>

      {/* Additional Dynamic Elements */}
      <div className="absolute bottom-10 left-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="container mx-auto px-4"
        >
          <div className="bg-black/50 rounded-xl p-4 max-w-md">
            <p className="text-white font-Rajdhani text-lg italic">
              Embark on an epic journey through shadows and light
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DarkandDarkerVideo;