import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroLoaderPage = ({ setShowIntro }) => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
      onComplete: () => {
        setShowIntro(false);
      },
    });

    // Initial state for text
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      opacity: 0.3,
      scale: 0.95,
    });

    // Animate each line
    tl.current.to(line1Ref.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
    })
      .to(line1Ref.current, {
        opacity: 0.3,
        scale: 0.95,
        duration: 1,
      })
      .to(line2Ref.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
      })
      .to(line2Ref.current, {
        opacity: 0.3,
        scale: 0.95,
        duration: 1,
      })
      .to(line3Ref.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
      })
      .to(line3Ref.current, {
        opacity: 0.3,
        scale: 0.95,
        duration: 1,
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          containerRef.current.style.pointerEvents = "none";
        },
      });

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [setShowIntro]);

  return (
    <div
      ref={containerRef}
      className="fixed  inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
      style={{ height: "100dvh", width: "100dvw" }}
    >
      <div className="text-center space-y-8">
        <h1
          ref={line1Ref}
          className="text-6xl md:text-8xl font-bold text-white transform transition-all"
        >
          GET READY
        </h1>
        <h1
          ref={line2Ref}
          className="text-6xl md:text-8xl font-bold text-white transform transition-all"
        >
          TO BE
        </h1>
        <h1
          ref={line3Ref}
          className="text-6xl md:text-8xl font-bold text-white transform transition-all"
        >
          AMAZED
        </h1>
      </div>
    </div>
  );
};

export default IntroLoaderPage;