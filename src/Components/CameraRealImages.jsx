  import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CameraRealImages = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // GSAP animations for text elements
    textRefs.current.forEach((text, index) => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });

    // GSAP animations for images and videos
    imageRefs.current.forEach((img, index) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: index * 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className=" relative min-h-screen w-full bg-gradient-to-br from-indigo-950 via-cyan-900 to-emerald-950"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-32">
        {/* First Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-white space-y-6">
            <motion.h1
              ref={(el) => (textRefs.current[0] = el)}
              className="text-5xl  font-chakra lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Extremely detail-oriented
            </motion.h1>
            <motion.p
              ref={(el) => (textRefs.current[1] = el)}
              className="text-xl font-comfortaa text-gray-300"
            >
              With our high-resolution, 50MP camera, witness every detail come
              to life with stunning clarity and vibrancy.
            </motion.p>
          </div>
          <motion.div
            ref={(el) => (imageRefs.current[0] = el)}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-[60vh] object-cover rounded-2xl shadow-2xl"
              src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-high-resolution-top.jpg?imbypass=true"
              alt="High resolution camera sample"
            />
            <div className="absolute  bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
              Captured by Galaxy Z Fold6 #withGalaxy
            </div>
          </motion.div>
        </motion.div>

        {/* AI Zoom Section */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-white space-y-6">
            <motion.h1
              ref={(el) => (textRefs.current[2] = el)}
              className="text-5xl  font-chakra lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Crystal-clear zoom. Powered by AI
            </motion.h1>
            <motion.p
              ref={(el) => (textRefs.current[3] = el)}
              className="text-xl font-comfortaa text-gray-300"
            >
              Zoom way, way, way in while keeping noise down and resolution
              clear with ProVisual Engine.25 Its sharp analysis of the zoomed-in
              region enhances your shot dramatically.
            </motion.p>
          </div>
          <motion.div
            ref={(el) => (imageRefs.current[1] = el)}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <video
              className="w-full h-[60vh] object-cover"
              autoPlay
              muted
              playsInline
              loop
              src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/videos/galaxy-z-fold6-features-camera-ai-zoom.webm?imbypass=true"
            />
          </motion.div>
        </motion.div>

        {/* Zoom Map Section */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            ref={(el) => (imageRefs.current[2] = el)}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-[60vh] object-cover"
              src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-ai-zoom-zoommap.jpg?imbypass=true"
              alt="Zoom map feature"
            />
          </motion.div>
          <div className="text-white space-y-6">
            <motion.h1
              ref={(el) => (textRefs.current[4] = el)}
              className="text-5xl font-chakra lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400"
            >
              Zoom Map
            </motion.h1>
            <motion.p
              ref={(el) => (textRefs.current[5] = el)}
              className="text-xl font-comfortaa text-gray-300"
            >
              Use the Zoom Map to get your bearings when you're zoomed in; it'll
              make navigation a breeze
            </motion.p>
          </div>
        </motion.div>

        {/* Super HDR Section */}
        <motion.div
          className="relative text-center space-y-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-white space-y-6">
            <motion.h1
              ref={(el) => (textRefs.current[6] = el)}
              className="text-5xl font-chakra lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400"
            >
              Brighten things up with Super HDR
            </motion.h1>
            <motion.p
              ref={(el) => (textRefs.current[7] = el)}
              className="text-xl font-comfortaa text-gray-300"
            >
              See it, believe it. Super HDR puts the right emphasis on details
              to pop and impress, even before you take the picture.
            </motion.p>
          </div>
          <motion.div
            ref={(el) => (imageRefs.current[3] = el)}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-[70vh] object-cover"
              src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-super-hdr.jpg?imbypass=true"
              alt="Super HDR demonstration"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements with new colors */}
      {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div> */}
    </div>
  );
};

export default CameraRealImages;
