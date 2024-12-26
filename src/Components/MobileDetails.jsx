import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileCameraSpecsSection from "./MobileCameraSpecsSection";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Reusable animation component
const AnimatedText = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          type: "spring",
          stiffness: 100,
        },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const MobileDetails = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP scroll-triggered animations
    const sections = sectionRef.current.querySelectorAll(".animate-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          scale: 0.9,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="  relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b23] to-[#24243e] text-white overflow-x-hidden w-full"
    >
      <div className="max-w-[90vw] mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6 animate-section"
        >
          <AnimatedText delay={0.2}>
            <h1 className="text-4xl font-francois md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-400">
              Our Most Immersive Smartphone Gaming
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <p className="text-lg font-Questrial md:text-xl max-w-3xl mx-auto text-gray-300">
              Fold open a mobile gaming beast with a massive screen made better
              with the Vision Booster's powerful brightness and clarity even in
              broad daylight.
            </p>
          </AnimatedText>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  2xl:grid-cols-3 gap-4 md:gap-8 animate-section">
          {[
            {
              title: "2600 nits",
              subtitle: "Screen Brightness",
              icon: "✨",
              gradient: "from-[#8E2DE2]  via-[#4A00E0] to-[#2196F3]",
              description:
                "Ultra-bright display that cuts through sunlight with unprecedented clarity",
            },
            {
              title: "1.5x",
              subtitle: "Brighter Display",
              icon: "🌟",
              gradient: "from-[#FF6B6B] via-[#6A11CB] to-[#2575FC]",
              description:
                "Revolutionary display technology that redefines visual experience",
            },
            {
              title: "Snapdragon®",
              subtitle: "8 Gen 3",
              icon: "🚀",
              gradient: "from-[#11998e] via-red-500 to-[#5D4157]",
              description:
                "Cutting-edge processor delivering unparalleled performance",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
              className={`
                relative overflow-hidden 
                bg-gradient-to-br ${item.gradient} 
                rounded-3xl 
                shadow-2xl 
                transform transition-all 
                duration-300 
                group
                p-6
                border-2 border-transparent
                hover:border-white/20
              `}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10 text-white">
                <div className="text-4xl md:text-5xl mb-4 opacity-80">{item.icon}</div>
                <h2 className="text-3xl  md:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  {item.title}
                </h2>
                <p className="text-lg font-righteous md:text-xl font-medium mb-4 opacity-90">
                  {item.subtitle}
                </p>
                <p className="text-sm font-arvobold opacity-70 italic">{item.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Gaming Performance */}
        <div className="flex flex-col  2xl:ml-[25vw]  md:flex-row items-center gap-6 md:gap-12 animate-section">
          <div className="flex-1 space-y-6 w-full ">
            <AnimatedText>
              <h2 className="text-3xl md:text-nowrap 2xl:text-nowrap  font-Russo md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Powerful Gaming Performance
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p className="text-lg font-Questrial text-center md:text-xl text-gray-300">
                Enjoy silky-smooth gaming with Vulkan, even in AAA games.
                Snapdragon® 8 Gen 3 for Galaxy renders graphics that are
                absolutely fire.
              </p>
            </AnimatedText>
            <div className="grid grid-cols-3 gap-2 md:gap-4 font-Acme">
              {[
                { title: "GPU", value: "19%", subtitle: "Faster Graphics" },
                { title: "NPU", value: "42%", subtitle: "AI Performance" },
                { title: "CPU", value: "18%", subtitle: "Overall Speed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 md:p-4 rounded-xl text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm">{stat.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <img
              src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-snapdragon.jpg?imbypass=true"
              alt="Mobile Device"
              className="w-[30vw] sm:w-[20vw] lg:w-[12vw]   xl:w-[10vw] 2xl:w-[6vw] 2xl:mx-0 object-cover mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Battery Section */}
        <div className="text-center space-y-6 animate-section">
          <AnimatedText>
            <h2 className="text-3xl font-Russo md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Game Harder. Game Longer.
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-lg font-Questrial md:text-xl max-w-3xl mx-auto text-gray-300">
              Our battery ensures all-day enjoyment. It's not just a massive
              battery, but also leverages a more efficient display.
            </p>
          </AnimatedText>
          <div className="flex font-Acme flex-wrap justify-center gap-4 md:gap-12">
            {[
              { icon: "🎵", title: "Music", duration: "77 hrs" },
              { icon: "🎬", title: "Videos", duration: "23 hrs" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-4 md:p-6 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  {item.duration}
                </h3>
                <p>{item.title} Playback</p>
              </motion.div>
            ))}
          </div>
        </div>
        <MobileCameraSpecsSection />
      </div>
    </div>
  );
};

export default MobileDetails;