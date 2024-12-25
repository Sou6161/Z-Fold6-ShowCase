import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwitchToGalaxy = () => {
  const features = [
    {
      title: "Simple switching from iOS",
      description:
        "Switching from iOS is so easy! Thanks to Smart Switch, you can transfer your photos, videos, contacts and apps effortlessly.",
      image:
        "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-why-switch-switching.jpg?imbypass=true",
    },
    {
      title: "Seamless sharing",
      description:
        "Send files, data and content between devices, including iOS and PCs. It's a quick and secure way to openly share.",
      image:
        "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-why-switch-sharing.jpg?imbypass=true",
    },
    {
      title: "Your privacy. Secured.",
      description:
        "In Privacy and Security, quickly see which apps are accessing your information, then customize your settings. Plus, with Advanced Intelligence features, you can process data for AI services from your Galaxy device or on the cloud.",
      image:
        "https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-why-switch-secure.jpg?imbypass=true",
    },
    {
      title: "Switch to Galaxy",
      description:
        "Switch to Galaxy, it's easy. Elevate your experience with features exclusive to Galaxy users.",
      image:
        "https://www.slazzer.com/downloads/576cbbf5-bde6-11ef-8be7-4fa7ce85451c/galaxy-z-fold6-features-switch-to-galaxy_prev_ui.png",
    },
    {
      title: "Try Galaxy on your phone",
      description:
        "Experienced the newest Galaxy device yet? How about trying it out now? On your phone! Simply scan the QR code and download to begin.",
      image:
        "https://www.slazzer.com/downloads/b6018f35-bdee-11ef-8be7-4fa7ce85451c/galaxy-z-fold6-features-try-galaxy_prev_ui.png",
    },
  ];

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative -top-[14vh] md:-top-[17vh]  min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black" />

      <motion.div
        variants={fadeInUpVariants}
        initial="initial"
        animate="animate"
        className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-Rajdhani md:text-5xl lg:text-6xl font-bold text-center mb-8">
          <span className="inline-block bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            Why switch to the Galaxy
          </span>
        </h1>
      </motion.div>

      <div className="relative w-full h-full px-4  [&_.swiper-button-next]:text-white [&_.swiper-button-next]:bg-white/10 [&_.swiper-button-next]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:backdrop-blur-sm [&_.swiper-button-next]:transition-all [&_.swiper-button-next]:hover:bg-white/20 [&_.swiper-button-next]:after:text-lg [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:bg-white/10 [&_.swiper-button-prev]:w-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:backdrop-blur-sm [&_.swiper-button-prev]:transition-all [&_.swiper-button-prev]:hover:bg-white/20 [&_.swiper-button-prev]:after:text-lg [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet-active]:bg-blue-500 [&_.swiper-pagination-bullet-active]:w-3 [&_.swiper-pagination-bullet-active]:h-3">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full lg:w-[80vw]  lg:h-[45vh] mx-auto h-[60vh]"
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              className={`${
                index === 3 || index === 4
                  ? "w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] aspect-video"
                  : "w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all duration-300"
              >
                <div className="h-[40vh] p-6 md:p-8 space-y-6 ">
                  <div className="relative h-[15vh] rounded-xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`${
                        index === 3 || index === 4
                          ? "w-[25vw] h-[17vh] object-cover"
                          : " object-cover"
                      } transform group-hover:scale-105 transition-transform duration-700 rounded-xl`}
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-Exo md:text-3xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                      {feature.title}
                    </h2>
                    <p className="text-base font-comfortaa md:text-lg text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative h-[40vh] w-full mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-accessories.jpg?imbypass=true"
            alt=""
            className="w-full h-[35vh] object-cover brightness-200 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-8">
          <h1 className="text-5xl font-Questrial md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Accessories
          </h1>
          <button className="px-8 py-3 font-Exo bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300 border border-white/20 hover:border-white/30">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwitchToGalaxy;
