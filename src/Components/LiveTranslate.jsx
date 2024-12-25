import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const LiveTranslate = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Text animation refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  // Animated elements refs
  const animatedElementsRef = useRef([]);

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
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animated Background Elements Animation
  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        const elements = animatedElementsRef.current;

        // Create a smooth enter animation
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 100,
            scale: 0.6,
            rotation: 45
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2
          }
        );

        // Create a continuous subtle movement
        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: "sine.inOut", duration: 3 }
        });

        elements.forEach((el, index) => {
          tl.to(el, {
            y: index % 2 === 0 ? "+=30" : "-=30",
            rotation: index % 2 === 0 ? "+=15" : "-=15",
            scale: index % 2 === 0 ? 1.1 : 0.9,
          }, index * 0.3);
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  // Text and Image Animations
  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
            duration: 1.2
          }
        });

        // Entrance animations with smoother, more gradual approach
        tl.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.7,
            filter: "blur(20px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5
          }
        )
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.7,
            filter: "blur(20px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5
          },
          "-=1"
        )
        .fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.7,
            filter: "blur(20px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5
          },
          "-=1"
        );

        // Image animation with smoother entrance
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            x: 200,
            scale: 0.8,
            rotation: -15,
            filter: "blur(20px)"
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:-mt-[15vh] min-h-screen -ml-5  2xl:mt-[30vh] 
      items-center justify-center p-6 lg:p-12 
      "
    >
      {/* Animated Background Elements */}
      <div className="absolute blur-sm top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        <div
          ref={(el) => animatedElementsRef.current.push(el)}
          className="absolute top-1/4 left-1/4 w-28 h-28 
          bg-teal-500/30 rounded-lg transform rotate-12 
          backdrop-blur-sm border border-teal-200/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full p-4 text-white/70"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>

        <div
          ref={(el) => animatedElementsRef.current.push(el)}
          className="absolute top-1/2 right-1/4 w-36 h-36 
          bg-emerald-500/30 rounded-full transform -rotate-12 
          backdrop-blur-sm border border-emerald-200/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full p-5 text-white/70"
            fill="currentColor"
          >
            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        <div
          ref={(el) => animatedElementsRef.current.push(el)}
          className="absolute bottom-1/4 left-1/3 w-24 h-24 
          bg-green-500/30 rounded-xl transform rotate-6 
          backdrop-blur-sm border border-green-200/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full p-4 text-white/70"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 bg-blac/30 backdrop-blur-sm"></div>

      <div className="relative top-10 z-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-white">
          <h1
            ref={titleRef}
            className="text-5xl 2xl:text-6xl   font-righteous lg:text-6xl  font-black tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-teal-300 via-emerald-500 to-green-400
            background-animate"
          >
            LIVE TRANSLATE
          </h1>

          <h2
            ref={subtitleRef}
            className="text-3xl 2xl:text-4xl font-Rajdhani lg:text-4xl font-bold 
            bg-gradient-to-r from-teal-400 to-green-600 
            bg-clip-text text-transparent
            drop-shadow-2xl"
          >
            Borderless Phone Calls
          </h2>

          <p
            ref={descriptionRef}
            className="text-lg 2xl:text-xl font-Questrial text-white/90 max-w-xl leading-relaxed 
            bg-white/10 p-6 rounded-3xl border border-white/20 
            backdrop-blur-lg shadow-2xl"
          >
            Translate phone conversations instantly. Break down communication 
            barriers with seamless, real-time voice translation across 
            various apps and languages.
          </p>
        </div>

        <div className="relative group perspective-1000">
          <div
            className="absolute -inset-2 
            bg-gradient-to-r from-[#00B4DB] via-[#0083B0] to-[#00DBDE]
            rounded-[2.5rem] opacity-50 group-hover:opacity-75 
            transition-all duration-1000 animate-pulse blur-2xl"
          ></div>

          <div
            ref={imageRef}
            className="relative z-20 rounded-[2.5rem] overflow-hidden 
            shadow-2xl border-4 border-white/30 
            transform-gpu bg-black/20"
          >
            <img
              src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-live-translate.jpg?imbypass=true"
              alt="Live Translate"
              className="w-full aspect-video object-cover 
              transition-all duration-500 
              group-hover:scale-105 group-hover:brightness-110"
            />

            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-teal-500 to-transparent 
                animate-pulse"
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-green-500 to-transparent 
                animate-pulse"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTranslate;