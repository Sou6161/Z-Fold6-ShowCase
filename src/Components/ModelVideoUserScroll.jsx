import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ModelScrollVideo from "../ModelVideos/UserScrollModelVideo.mp4";

const ModelVideoUserScroll = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unsubscribe = scrollYProgress.on((progress) => {
      if (isVideoActive) {
        video.currentTime = progress * video.duration;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isVideoActive]);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;

    if (!videoContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVideoActive(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust threshold for better activation point
        root: null,
      }
    );

    observer.observe(videoContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-[#0f172a] via-[#b7a585] to-[#334155] 
      text-white overflow-hidden"
    >
      {/* Layered Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1e40af]/20 via-[#6366f1]/3  0 to-[#8b5cf6]/20 mix-blend-overlay pointer-events-none"></div>

      {/* Quote Section */}
      <div
        className="h-[80vh] flex flex-col items-center justify-center z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 px-4"
        >
          <motion.h1
            className="text-3xl font-Rajdhani  md:text-5xl font-bold mb-2 tracking-tight text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            " Truly replicates a traditional phone
            <br />
            while doubling as a sleek tablet "
          </motion.h1>
          <motion.span
            className="text-xl md:text-2xl font-light text-gray-300 italic"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            — CNET
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 px-4"
        >
          <motion.h1
            className="text-3xl font-Rajdhani md:text-5xl font-bold mb-2 tracking-tight text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            " Simply the best big foldable phone "
          </motion.h1>
          <motion.span
            className="text-xl md:text-2xl font-light text-gray-300 italic"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            — PC Mag
          </motion.span>
        </motion.div>
      </div>

      {/* Video Section */}
      <div
        ref={videoContainerRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center z-20  sm:px- md:px-"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: isVideoActive ? 1 : 0.8,
          }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-full h-full  md:max-w-[100vw] lg:max-w-[100vw] xl:max-w-[100vw] aspect-video overflow-hidden shadow-2xl"
        >
          <video
            id="ScrollModel"
            ref={videoRef}
            src={ModelScrollVideo}
            className="w-full h-full object-cover"
            playsInline
            muted
            autoPlay
            loop
            controls={false}
            style={{
              pointerEvents: isVideoActive ? "auto" : "none",
              opacity: isVideoActive ? 1 : 1,
            }}
          />
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const delay = Math.random() * 10;
          const duration = Math.random() * 10 + 5;

          return (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                scale: [0, 1, 0],
                opacity: [0, 0.3, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ModelVideoUserScroll;
