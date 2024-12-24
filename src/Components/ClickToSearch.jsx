import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import CircleToSearchVideo from "../Videos/CircleToSearchVideo.mp4";
import NoteAssist from "./NoteAssist";
import ClickToSearchBGAnim from "./ClickToSearchBGAnim";
import PhotoAssist from "./PhotoAssist";
import Interpreter from "./Interpreter";
import LiveTranslate from "./LiveTranslate";

const ClickToSearch = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  // Text animation refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current = observer;
      observer.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // GSAP Text Animations
  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
            duration: 1,
          },
        });

        // Animate text elements from bottom to top with stagger
        tl.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        )
          .fromTo(
            subtitleRef.current,
            {
              opacity: 0,
              y: 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            "-=0.6" // Overlap with previous animation
          )
          .fromTo(
            descriptionRef.current,
            {
              opacity: 0,
              y: 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            "-=0.6" // Overlap with previous animation
          );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  // Video GSAP Animation with entrance and idle animations
  useEffect(() => {
    const videoContainer = videoRef.current?.parentElement;
    const video = videoRef.current;

    if (video && videoContainer && isInView) {
      const ctx = gsap.context(() => {
        // Entrance Animation Timeline
        const entranceTl = gsap.timeline({
          defaults: {
            ease: "power3.out",
            duration: 1.5,
          },
        });

        entranceTl.fromTo(
          videoContainer,
          {
            opacity: 0,
            x: 200, // Start 200px to the right
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0, // Move to original position
            scale: 1,
            onComplete: () => {
              // Start idle animation after entrance
              idleTl.restart();
            },
          }
        );

        // Idle Animation Timeline
        const idleTl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: "power1.inOut" },
        });

        idleTl.pause(); // Start paused, will be triggered after entrance

        idleTl
          .fromTo(
            video,
            {
              scale: 1,
              rotation: 0,
              filter: "brightness(100%) contrast(100%)",
            },
            {
              duration: 3,
              scale: 1.03,
              rotation: 1,
              filter: "brightness(110%) contrast(110%) saturate(120%)",
            }
          )
          .to(video, {
            duration: 2,
            boxShadow: "0 0 60px rgba(56,189,248,0.4)",
          });
      }, videoContainer);

      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen  overflow-hidden
     items-center justify-center p-6 lg:p-12 
      bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-20 max-w-6xl sm:mt-10 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-white">
          <h1
            ref={titleRef}
            className="text-5xl 2xl:text-6xl font-righteous lg:text-7xl font-black tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500
            background-animate"
          >
            CIRCLE TO SEARCH
          </h1>

          <h2
            ref={subtitleRef}
            className="text-3xl 2xl:text-4xl font-Rajdhani lg:text-5xl font-bold 
            bg-gradient-to-r from-blue-400 to-purple-600 
            bg-clip-text text-transparent
            drop-shadow-2xl"
          >
            Reimagine Mobile Interaction
          </h2>

          <p
            ref={descriptionRef}
            className="text-lg 2xl:text-xl font-Questrial text-white/90 max-w-xl leading-relaxed 
            bg-white/10 p-6 rounded-3xl border border-white/20 
            backdrop-blur-lg shadow-2xl"
          >
            Transform your smartphone experience with an intuitive circle
            gesture. Effortlessly search across your massive fold-out screen
            using just your finger or the S Pen — productivity reimagined.
          </p>
        </div>

        <div className="relative group perspective-1000">
          <div
            className="absolute -inset-2 
            bg-gradient-to-r from-[#6A11CB] via-[#2575FC] to-[#0F4C75]
            rounded-[2.5rem] opacity-50 group-hover:opacity-75 
            transition-all duration-1000 animate-pulse blur-2xl"
          ></div>

          <div
            className="relative z-20 rounded-[2.5rem] overflow-hidden 
            shadow-2xl border-4 border-white/30 
            transform-gpu bg-black/20"
          >
            <video
              ref={videoRef}
              playsInline
              muted
              autoPlay
              loop
              className="w-full aspect-video object-cover 
              transition-all duration-500 
              group-hover:scale-105 group-hover:brightness-110"
              src={CircleToSearchVideo}
            ></video>
            <h1></h1>

            {/* Futuristic video overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
                animate-pulse"
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-purple-500 to-transparent 
                animate-pulse"
              ></div>
            </div>
          </div>

          {/* Floating tech elements */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 
            bg-gradient-to-br from-cyan-400 to-blue-600 
            rounded-full blur-2xl opacity-30 animate-blob"
          ></div>
          <div
            className="absolute -bottom-10 -left-10 w-24 h-24 
            bg-gradient-to-br from-purple-400 to-indigo-600 
            rounded-full blur-2xl opacity-30 animate-blob animation-delay-2000"
          ></div>
        </div>
      </div>

      {/* Floating tech particles */}
      <ClickToSearchBGAnim />
      <NoteAssist />
      <PhotoAssist />
      <Interpreter/>
      <LiveTranslate/>
    </div>
  );
};

export default ClickToSearch;
