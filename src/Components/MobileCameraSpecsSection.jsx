import React from "react";
import { motion } from "framer-motion";
import ModelCameraSpecsImage from "../ModelImages/ModelCameraSpecsImage.jpg";

const MobileCameraSpecsSection = () => {
  const specs = [
    {
      mp: "12MP",
      label: "Ultra Wide Camera",
      position: "left-0 top-[24vh]",
      textColor: "text-cyan-400",
      labelColor: "text-gray-400",
    },
    {
      mp: "50MP",
      label: "Wide-angle Camera",
      subtext: "2x Optical Quality Zoom",
      position: "left-0 top-1/5",
      textColor: "text-cyan-400",
      labelColor: "text-gray-400",
    },
    {
      mp: "10MP",
      label: "Telephoto Camera",
      subtext: "3x Optical Zoom",
      position: "left-0 bottom-[22vh]",
      textColor: "text-cyan-400",
      labelColor: "text-gray-400",
    },
    {
      mp: "10MP",
      label: "Cover Camera",
      position: "right-0 top-24",
      textColor: "text-cyan-400",
      labelColor: "text-gray-400",
    },
    {
      mp: "4MP",
      label: "Under Display Camera",
      position: "-right-5 top-1/3",
      textColor: "text-cyan-400",
      labelColor: "text-gray-400",
    },
  ];

  return (
    <div className=" w-full min-h-screen bg-black rounded-xl py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-lexend font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
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
            <div className="relative h-[600px] flex items-center justify-center">
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
                    <h3 className={`text-2xl font-Acme font-bold ${spec.textColor}`}>
                      {spec.mp}
                    </h3>
                    <p className={`text-sm font-arvobold ${spec.labelColor}`}>{spec.label}</p>
                    {spec.subtext && (
                      <p className="text-xs font-arvobold text-gray-500">{spec.subtext}</p>
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
