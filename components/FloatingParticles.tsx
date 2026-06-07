'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  // Generate coordinates and parameters for 15 subtle particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1, // 1px to 4px
    x: Math.random() * 100, // percentage x
    y: Math.random() * 100, // percentage y
    duration: Math.random() * 20 + 20, // 20s to 40s
    delay: Math.random() * -20, // negative delay to start mid-animation
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Interactive/static glowing background grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-slate-500/20 shadow-sm"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ['0vh', '-100vh'],
            x: ['0vw', `${Math.random() * 10 - 5}vw`],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
