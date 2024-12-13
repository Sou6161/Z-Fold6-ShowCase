import React  from 'react';
import { motion } from 'framer-motion';

const SamsungFoldBackground = () => {
  // Create samsung-inspired color palette
  const samsungColors = [
    'rgba(0, 119, 255, 0.6)',   // Samsung Blue
    'rgba(255, 85, 85, 0.6)',   // Vibrant Red
    'rgba(103, 58, 183, 0.6)',  // Deep Purple
    'rgba(255, 255, 255, 0.4)', // Subtle White
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.7 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {[...Array(80)].map((_, i) => {
        // Generate unique movement patterns inspired by folding mechanism
        const movementVariants = {
          initial: { 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0.2,
            rotate: Math.random() * 360
          },
          animate: { 
            x: [
              Math.random() * window.innerWidth, 
              window.innerWidth / 2 + (Math.random() - 0.5) * 200,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight, 
              window.innerHeight / 2 + (Math.random() - 0.5) * 200,
              Math.random() * window.innerHeight
            ],
            opacity: [0, 0.7, 0],
            scale: [0.2, 1.2, 0.2],
            rotate: [
              Math.random() * 360,
              Math.random() * 720,
              Math.random() * 360
            ]
          }
        };

        return (
          <motion.div
            key={i}
            initial={movementVariants.initial}
            animate={movementVariants.animate}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              backgroundColor: samsungColors[i % samsungColors.length],
              borderRadius: Math.random() > 0.5 ? '50%' : '10%',
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10
            }}
            className="absolute blur-sm transform"
          />
        );
      })}
      
      {/* Fold-inspired central blur effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [0.5, 1.2, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-gradient-to-r from-blue-500/30 to-purple-500/30 
        w-1/2 h-1/2 rounded-full blur-2xl"
      />
    </motion.div>
  );
};

export default SamsungFoldBackground;