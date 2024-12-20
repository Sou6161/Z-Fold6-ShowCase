import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import GalaxyStarIconVideo from "../ModelVideos/GalaxyStarIconVideo.mp4";

const MidHeroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const galaxyAiRef = useRef(null);
  const revolutionizingFoldablesRef = useRef(null);
  const cuttingEdgeAITechnologyRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(galaxyAiRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
      });
      gsap.to(videoRef.current, {
        opacity: 1,
        duration: 1,
        delay: 1,
      });
      gsap.to(revolutionizingFoldablesRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 2,
      });
      gsap.to(cuttingEdgeAITechnologyRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 3,
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[80vh] bg-gradient-to-br from-purple-950 via-black to-slate-900 overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 to-black/50 z-10"></div>

      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-20 text-white text-center max-w-5xl px-6"
      >
        <motion.div
          ref={textRef}
          className="flex flex-col items-center justify-center space-y-6 mb-4"
        >
          <motion.span
            ref={galaxyAiRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            className="text-9xl font-Acme font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
          >
            Galaxy AI
          </motion.span>

          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            autoPlay
            muted
            loop
            playsInline
            className="w-[15vw] max-w-[200px] h-auto rounded-full shadow-2xl border-4 border-white/20"
            src={GalaxyStarIconVideo}
          />

          <motion.h2
            ref={revolutionizingFoldablesRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            className="text-7xl font-Acme font-bold  tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 drop-shadow-2xl"
          >
            Revolutionizing Foldables
          </motion.h2>

          <motion.p
            ref={cuttingEdgeAITechnologyRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mt-6 font-Acme text-2xl font-light text-gray-300 max-w-3xl mx-auto"
          >
            Cutting-edge AI technology meets innovative design, transforming the
            way you interact with mobile devices
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MidHeroSection;