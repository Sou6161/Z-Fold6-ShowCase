import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Video1 from "../Videos/Video1.mp4";
import Video2 from "../Videos/Video2.webm";
import Video3 from "../Videos/Video3.webm";
import Video4 from "../Videos/Video4.webm";

const VideosSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);

  const VideosHeading = [
    "Ultra-Light, Thin Design",
    "Circle it. Search it. Boost Productivity",
    "Note Assist Simplifies Your Workflow",
    "Powerful, Impressive Gaming",
  ];

  const videos = [
    { src: Video1, type: "video/mp4" },
    { src: Video2, type: "video/webm" },
    { src: Video3, type: "video/webm" },
    { src: Video4, type: "video/webm" },
  ];

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (activeIndex < videos.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });

    if (videoRefs.current[activeIndex]) {
      videoRefs.current[activeIndex].play();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  const getParallaxStyle = (index) => {
    const isActive = index === activeIndex;
    const direction = index < activeIndex ? -1 : 1;
    const offset = isActive ? 0 : `${direction * 100}%`;
    const scale = isActive ? 1 : 0.85;
    
    return {
      transform: `translate3d(0, ${offset}, 0) scale(${scale})`,
      transition: 'transform 0.8s ease-out',
    };
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-screen bg-[#030712] ${
        isInView ? " relative top-0" : "relative"
      }`}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.03] mix-blend-soft-light" />

      {/* Videos stack */}
      <div className="relative h-screen flex flex-col gap-0">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`h-screen ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-800`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={getParallaxStyle(index)}
            >
              <source src={video.src} type={video.type} />
            </video>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="space-y-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  Feature {index + 1}
                </p>
                <h2 className="text-3xl font-Questrial font-bold text-white">
                  {VideosHeading[index]}
                </h2>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-8 -translate-y-1/2">
          {activeIndex > 0 && (
            <button
              onClick={handleLeftClick}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
            >
              <ChevronLeft className="text-white" size={32} />
            </button>
          )}
          
          {activeIndex < videos.length - 1 && (
            <button
              onClick={handleRightClick}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
            >
              <ChevronRight className="text-white" size={32} />
            </button>
          )}
        </div>

        {/* Scroll indicator */}
        {isInView && (
          <div className="absolute bottom-8 right-8 flex gap-2">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosSection;