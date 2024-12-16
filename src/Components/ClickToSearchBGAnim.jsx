import React from 'react';
import { motion } from "framer-motion";

const ClickToSearchBGAnim = () => {
  // Custom search-related animated elements
  const searchElements = [
    { type: 'circle', color: 'cyan' },
    { type: 'magnify', color: 'blue' },
    { type: 'gesture', color: 'purple' },
    { type: 'data', color: 'indigo' }
  ];

  return (
    <>
      {searchElements.map((element, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '3rem',
            height: '3rem',
            borderRadius: element.type === 'circle' ? '50%' : '10px',
            background: `radial-gradient(circle at 30% 30%, 
              var(--tw-gradient-stops) from-${element.color}-400 via-${element.color}-500 to-${element.color}-600)`,
            boxShadow: `0 0 20px rgba(${
              element.color === 'cyan' ? '56,189,248' :
              element.color === 'blue' ? '37,99,235' :
              element.color === 'purple' ? '124,58,237' :
              '55,48,163'
            }, 0.4)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7
          }}
        >
          {element.type === 'magnify' && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          )}
          {element.type === 'gesture' && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18.42 9.28l-3.82-3.82a4.42 4.42 0 0 0-6.25 0l-3.82 3.82a4.42 4.42 0 0 0 0 6.25l3.82 3.82a4.42 4.42 0 0 0 6.25 0l3.82-3.82a4.42 4.42 0 0 0 0-6.25z"></path>
            </svg>
          )}
          {element.type === 'data' && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18"/>
              <path d="M18 17V9"/>
              <path d="M13 17V5"/>
              <path d="M8 17v-3"/>
            </svg>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default ClickToSearchBGAnim;