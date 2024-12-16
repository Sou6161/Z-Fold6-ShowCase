import React from "react";
import { motion } from "framer-motion";

const NoteAssistBGAnim = () => {
  // Custom note-related animated elements
  const noteElements = [
    { type: "pen", color: "pink" },
    { type: "document", color: "purple" },
    { type: "text", color: "red" },
    { type: "audio", color: "rose" },
  ];

  return (
    <>
      {noteElements.map((element, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5,
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
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "3rem",
            height: "3rem",
            borderRadius: "10px",
            background: `radial-gradient(circle at 30% 30%, 
              var(--tw-gradient-stops) from-${element.color}-400 via-${element.color}-500 to-${element.color}-600)`,
            boxShadow: `0 0 20px rgba(${
              element.color === "pink"
                ? "219,39,119"
                : element.color === "purple"
                ? "124,58,237"
                : element.color === "red"
                ? "220,38,38"
                : "244,63,94"
            }, 0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
          }}
        >
          {element.type === "pen" && (
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
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          )}
          {element.type === "document" && (
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
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
          )}
          {element.type === "text" && (
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
              <path d="M17 6.1H3" />
              <path d="M21 12.1H3" />
              <path d="M15.1 18H3" />
            </svg>
          )}
          {element.type === "audio" && (
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
              <path d="M12 2v10" />
              <path d="M18.29 8.79C17.32 5.96 14.86 4 12 4c-2.9 0-5.4 2.1-5.9 5" />
              <path d="M5 11v6h4l6 3V8l-6 3H5z" />
            </svg>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default NoteAssistBGAnim;
