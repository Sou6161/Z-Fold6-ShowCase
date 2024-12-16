import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const InterpreterTechParticles = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    const container = particlesContainerRef.current;
    
    // Create translation-themed particles
    const createParticles = () => {
      const particleTypes = [
        {
          shape: 'language',
          render: () => (
            <div className="absolute rounded-full bg-cyan-500/30 
              flex items-center justify-center text-white 
              font-bold text-xs p-2 border border-cyan-300/50">
              🌐
            </div>
          ),
          animationProps: {
            morphTo: {
              borderRadius: '50%',
              scale: 1.5,
              backgroundColor: 'rgba(6, 182, 212, 0.5)',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
            }
          }
        },
        {
          shape: 'communication',
          render: () => (
            <div className="absolute rounded-full bg-blue-500/30 
              flex items-center justify-center text-white 
              font-bold text-xs p-2 border border-blue-300/50">
              💬
            </div>
          ),
          animationProps: {
            morphTo: {
              borderRadius: '20%',
              scale: 1.4,
              backgroundColor: 'rgba(59, 130, 246, 0.5)',
              boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)'
            }
          }
        },
        {
          shape: 'connection',
          render: () => (
            <div className="absolute rounded-full bg-indigo-500/30 
              flex items-center justify-center text-white 
              font-bold text-xs p-2 border border-indigo-300/50">
              🔗
            </div>
          ),
          animationProps: {
            morphTo: {
              borderRadius: '10%',
              scale: 1.6,
              backgroundColor: 'rgba(99, 102, 241, 0.5)',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
            }
          }
        }
      ];

      // Create multiple particles
      for (let i = 0; i < 8; i++) {
        const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        const particle = document.createElement('div');
        particle.className = 'absolute opacity-0';
        particle.innerHTML = particleType.render().props.children;
        container.appendChild(particle);

        // Random positioning
        const startX = Math.random() * container.offsetWidth;
        const startY = Math.random() * container.offsetHeight;

        // GSAP Animation
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.fromTo(
          particle,
          {
            x: startX,
            y: startY,
            opacity: 0,
            scale: 1,
            rotation: 0
          },
          {
            duration: 3,
            x: startX + (Math.random() * 200 - 100),
            y: startY + (Math.random() * 200 - 100),
            opacity: 1,
            scale: 1,
            rotation: 360,
            ease: 'power1.inOut',
            ...particleType.animationProps
          }
        );
      }
    };

    createParticles();
  }, []);

  return (
    <div 
      ref={particlesContainerRef}
      className="absolute inset-0 overflow-hidden  pointer-events-none z-10"
    />
  );
};

export default InterpreterTechParticles;