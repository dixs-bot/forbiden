'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-[#030303] overflow-hidden">
      {/* Soft animated background gradients */}
      <motion.div
        className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(24,24,37,0.5)_0%,rgba(3,3,3,0)_70%)] blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(16,24,48,0.45)_0%,rgba(3,3,3,0)_70%)] blur-[80px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[20%] right-[15%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.03)_0%,rgba(3,3,3,0)_60%)] blur-[60px]"
        animate={{
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Noise Texture Overlay using Data URI SVG Noise */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
