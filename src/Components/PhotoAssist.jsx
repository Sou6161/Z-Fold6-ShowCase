import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import PhotoAssistVideo from "../Videos/PhotoAssistVideo.mp4";

const PhotoAssist = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  // Photo element refs for unique animations
  const photoElementsRef = useRef([]);

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

  // Enhanced Photo Editing Elements Animation
  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        const photoElements = photoElementsRef.current;

        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: "power2.inOut" },
        });

        photoElements.forEach((el, index) => {
          // Complex animation with multiple transformations
          tl.fromTo(
            el,
            {
              rotation: index % 2 === 0 ? -10 : 10,
              scale: 0.8,
              opacity: 0.3,
              x: index % 2 === 0 ? -50 : 50,
              y: index % 2 === 0 ? 30 : -30,
            },
            {
              duration: 2.5,
              rotation: index % 2 === 0 ? 10 : -10,
              scale: 1.2,
              opacity: 1,
              x: index % 2 === 0 ? 50 : -50,
              y: index % 2 === 0 ? -30 : 30,
              ease: "power2.inOut",
            },
            index * 0.3 // Staggered start
          );
        });

        // Add a subtle floating effect
        tl.to(
          photoElements,
          {
            duration: 1.5,
            y: "+=20",
            rotation: "+=5",
            ease: "sine.inOut",
            stagger: 0.2,
          },
          "-=2"
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  // Existing text and video animations...
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
            "-=0.6"
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
            "-=0.6"
          );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full sm:mt-[5vh] lg:-mt-20 -ml-5 min-h-screen
      items-center justify-center p-6 lg:p-12 
      "
    >
      <div className="absolute inset-0 bg-blac/30 backdrop-blur-sm"></div>

      {/* Photo Editing Elements */}
      <div className="absolute blur-sm top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        <div
          ref={(el) => photoElementsRef.current.push(el)}
          className="absolute top-1/4 left-1/4 w-24 h-24 
          bg-pink-500/30 rounded-lg transform rotate-12 
          backdrop-blur-sm border border-pink-200/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full p-4 text-white/70"
            fill="currentColor"
          >
            <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </div>

        <div
          ref={(el) => photoElementsRef.current.push(el)}
          className="absolute top-1/2 right-1/4 w-32 h-32 
          bg-purple-500/30 rounded-full transform -rotate-12 
          backdrop-blur-sm border border-purple-200/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full p-5 text-white/70"
            fill="currentColor"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            <path d="M12 7v5l3 3" />
          </svg>
        </div>

        <div
          ref={(el) => photoElementsRef.current.push(el)}
          className="absolute bottom-1/4 left-1/3 w-20 h-20 
          bg-fuchsia-500/30 rounded-xl transform rotate-6 
          backdrop-blur-sm border border-fuchsia-200/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full p-4 text-white/70"
            fill="currentColor"
          >
            <path d="M10 13l-1 2-9-7 2-3 7 8zM11 14l2 3 7-8-2-3z" />
            <path d="M19.5 21c3.038 0 5.5-2.462 5.5-5.5S22.538 10 19.5 10h-13C3.462 10 1 12.462 1 15.5S3.462 21 6.5 21h13z" />
          </svg>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-white">
          <h1
            ref={titleRef}
            className="text-5xl 2xl:text-6xl font-righteous lg:text-6xl  lg:text-nowrap font-black tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-rose-300 via-pink-500 to-fuchsia-500
            background-animate"
          >
            PHOTO ASSIST
          </h1>

          <h2
            ref={subtitleRef}
            className="text-3xl 2xl:text-4xl font-Rajdhani lg:text-4xl font-bold 
            bg-gradient-to-r from-pink-400 to-purple-600 
            bg-clip-text text-transparent
            drop-shadow-2xl"
          >
            Effortless Editing
          </h2>

          <p
            ref={descriptionRef}
            className="text-lg 2xl:text-xl font-Questrial text-white/90 max-w-xl leading-relaxed 
            bg-white/10 p-6 rounded-3xl border border-white/20 
            backdrop-blur-lg shadow-2xl"
          >
            The object-aware engine lets you edit photos to your heart's
            content. With Photo Assist, just hold your finger down on an object
            to move, erase or enlarge it; adjust angles or fill backgrounds just
            as easily.
          </p>
        </div>

        <div className="relative group perspective-1000">
          <div
            className="absolute -inset-2 
            bg-gradient-to-r from-[#FF6B6B] via-[#E64980] to-[#9C27B0]
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
              src={PhotoAssistVideo}
            ></video>

            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-pink-500 to-transparent 
                animate-pulse"
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-purple-500 to-transparent 
                animate-pulse"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoAssist;
