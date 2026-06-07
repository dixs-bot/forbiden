'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function SecurityShield() {
  return (
    <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-6">
      {/* Background radial glow */}
      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl w-32 h-32 -translate-x-4 -translate-y-4" />
      
      {/* Animated glowing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-red-500/20 w-24 h-24"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Inner glowing core */}
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-b from-red-950/30 to-red-900/10 border border-red-500/10 flex items-center justify-center w-20 h-20"
        animate={{
          boxShadow: [
            '0 0 10px 0px rgba(239, 68, 68, 0.1)',
            '0 0 20px 2px rgba(239, 68, 68, 0.25)',
            '0 0 10px 0px rgba(239, 68, 68, 0.1)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Shield className="w-9 h-9 text-red-500/90 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
      </motion.div>
    </div>
  );
}
