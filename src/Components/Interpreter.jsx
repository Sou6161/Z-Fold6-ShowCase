import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import InterpreterVideo from "../Videos/InterpreterVideo.mp4";
import NoteAssistBGAnim from "./NoteAssistBGAnim"; // Assuming you want to reuse the background animation
import InterpreterTechParticles from "./InterpreterTechParticles";

const Interpreter = () => {
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
            ease: "power4.out",
            duration: 1.2,
          },
        });

        // Animate text elements from bottom to top with smooth stagger
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
            "-=0.7" // Overlap with previous animation
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
            "-=0.7" // Overlap with previous animation
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
            ease: "power4.out",
            duration: 1.5,
          },
        });

        entranceTl.fromTo(
          videoContainer,
          {
            opacity: 0,
            x: -200, // Start 200px to the left
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
      className="relative w-full min-h-scree overflow-hidden 
      flex items-center justify-center p-6 lg:p-12"
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative group perspective-1000">
          <div
            className="absolute -inset-2 
            bg-gradient-to-r from-[#11A1CB] via-[#2575FC] to-[#0F4FC7]
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
              src={InterpreterVideo}
            ></video>

            {/* Futuristic video overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-blue-500 to-transparent 
                animate-pulse"
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
                animate-pulse"
              ></div>
            </div>
          </div>

          {/* Floating tech elements */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 
            bg-gradient-to-br from-blue-400 to-cyan-600 
            rounded-full blur-2xl opacity-30 animate-blob"
          ></div>
          <div
            className="absolute -bottom-10 -left-10 w-24 h-24 
            bg-gradient-to-br from-cyan-400 to-blue-600 
            rounded-full blur-2xl opacity-30 animate-blob animation-delay-2000"
          ></div>
        </div>

        <div className="order-1 lg:order-2 space-y-8 text-white">
          <h1
            ref={titleRef}
            className="text-6xl font-righteous lg:text-7xl font-black tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-300 via-cyan-500 to-indigo-500
            background-animate"
          >
            INTERPRETER
          </h1>

          <h2
            ref={subtitleRef}
            className="text-4xl font-Rajdhani lg:text-5xl font-bold 
            bg-gradient-to-r from-cyan-400 to-blue-600 
            bg-clip-text text-transparent
            drop-shadow-2xl"
          >
            Your Ultimate Interpreter Experience
          </h2>

          <p
            ref={descriptionRef}
            className="text-xl font-Questrial text-white/90 max-w-xl leading-relaxed 
            bg-white/10 p-6 rounded-3xl border border-white/20 
            backdrop-blur-lg shadow-2xl"
          >
            Traveling and need to talk with the locals? Interpreter translates
            on the spot whether you're expressing yourself, or listening to a
            global conference in a foreign language or to a tour guide.
          </p>
        </div>
      </div>

      {/* Floating tech particles */}
      <InterpreterTechParticles />
    </div>
  );
};

export default Interpreter;
