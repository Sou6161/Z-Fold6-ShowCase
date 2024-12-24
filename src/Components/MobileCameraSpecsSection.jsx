import React from "react";
import { motion } from "framer-motion";
import ModelCameraSpecsImage from "../ModelImages/ModelCameraSpecsImage.jpg";

const MobileCameraSpecsSection = () => {
  const specs = [
    {
      mp: "12MP",
      label: "Ultra Wide Camera",
      position: "left-[30vw] 2xl:left-0 top-[9vh]  2xl:top-[33vh]",
      textColor: "text-cyan-400",
      labelColor: "text-purple-500",
    },
    {
      mp: "50MP",
      label: "Wide-angle Camera",
      subtext: "2x Optical Quality Zoom",
      position: "left-[28vw] 2xl:left-0 2xl:top-[22vh] top-[15vh]",
      textColor: "text-cyan-400",
      labelColor: "text-purple-500",
    },
    {
      mp: "10MP",
      label: "Telephoto Camera",
      subtext: "3x Optical Zoom",
      position: "left-[30vw] 2xl:left-0 bottom-[11vh] 2xl:bottom-[21vh] ",
      textColor: "text-cyan-400",
      labelColor: "text-purple-500",
    },
    {
      mp: "10MP",
      label: "Cover Camera",
      position: "right-[6vw] 2xl:right-[0vw] top-[0vh] 2xl:top-24",
      textColor: "text-cyan-400",
      labelColor: "text-purple-500",
    },
    {
      mp: "4MP",
      label: "Under Display Camera",
      position: " left-[57vw] sm:left-[62vw]  2xl:left-[80vh] top-[5vh] sm:top-[7vh] 2xl:top-1/3",
      textColor: "text-cyan-400",
      labelColor: "text-purple-500",
    },
  ];

  return (
    <div className="w-[93vw] -ml-5   min-h-screen bg-black rounded-xl py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl 2xl:text-4xl   font-lexend font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Turn Pro. ProVisual Engine
          </h2>
          <p className="text-xl  font-Rajdhani text-gray-300 max-w-3xl mx-auto">
            Meet Fold's most powerful camera system yet. Topped with an upgraded
            NPU, mind-blowing specs and ProVisual Engine, it'll transform your
            multimedia experience.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] 2xl:h-[600px] flex items-center justify-center">
              <img
                src={ModelCameraSpecsImage}
                alt="Galaxy Z Fold Camera System"
                className="max-w-full h-auto object-contain"
              />

              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`absolute ${spec.position} flex flex-col items-center`}
                >
                  <div className="text-center">
                    <h3 className={`text-md 2xl:text-2xl font-Acme font-bold ${spec.textColor}`}>
                      {spec.mp}
                    </h3>
                    <p className={`text-[2vw] 2xl:text-sm font-arvobold ${spec.labelColor}`}>{spec.label}</p>
                    {spec.subtext && (
                      <p className="text-[2vw] 2xl:text-xs font-arvobold text-lime-500">{spec.subtext}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileCameraSpecsSection;
