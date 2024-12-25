import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import DarkAndDarkerFullVideo from "../Videos/DarkAndDarkerFullVideo.mp4";

const DarkandDarkerVideo = () => {
  const [isInView, setIsInView] = useState(false);
  const textAnimations = [useAnimation(), useAnimation(), useAnimation()];
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoSize, setVideoSize] = useState({ width: "100%", height: "100%" });

  useEffect(() => {
    const updateVideoSize = () => {
      if (videoRef.current && containerRef.current) {
        const videoAspectRatio = 16 / 9; // Assuming 16:9 video, adjust if different
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const containerAspectRatio = containerWidth / containerHeight;

        if (containerAspectRatio > videoAspectRatio) {
          // Container is wider than video aspect ratio
          setVideoSize({
            width: "100%",
            height: "90%",
            objectFit: "cover"
          });
        } else {
          // Container is taller than video aspect ratio
          setVideoSize({
            width: "100%",
            height: "90%",
            objectFit: "cover"
          });
        }
      }
    };

    // Initial size update
    updateVideoSize();

    // Update on window resize
    window.addEventListener('resize', updateVideoSize);
    return () => window.removeEventListener('resize', updateVideoSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          animateTextSequence();
        }
      },
      { threshold: 0.3 }
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
        ease: [0.645, 0.045, 0.355, 1],
      }
    };

    await Promise.all([
      textAnimations[0].start({
        ...baseAnimation,
        transition: { ...baseAnimation.transition, delay: 0.2 }
      }),
      textAnimations[1].start({
        ...baseAnimation,
        transition: { ...baseAnimation.transition, delay: 0.4 }
      }),
      textAnimations[2].start({
        ...baseAnimation,
        transition: { ...baseAnimation.transition, delay: 0.6 }
      })
    ]);
  };

  return (
    <div ref={containerRef} className="relative   h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        className="absolute top-[40vh]   2xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
        style={{
          width: videoSize.width,
          height: videoSize.height,
          objectFit: videoSize.objectFit
        }}
        src={DarkAndDarkerFullVideo}
      />

      {/* Animated Text */}
      <div className="absolute top-16 font-Exo left-0 w-full flex flex-col items-center z-10">
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
              className="text-3xl md:text-4xl lg:text-6xl lg:-mt-7 l:text-6xl 2xl:text-6xl font-extrabold 
                bg-gradient-to-r from-purple-600 via-green-500 to-cyan-500
                bg-clip-text text-transparent
                drop-shadow-[0_5px_10px_rgba(25,25,255,0.5)]
                transform-gpu"
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
          <div className="bg-black/50 rounded-xl p-4 max-w-md ">
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