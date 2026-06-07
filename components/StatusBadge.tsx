'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative inline-flex items-center"
    >
      {/* Glow aura */}
      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-md" />
      
      {/* Badge container */}
      <div className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/20 text-xs font-mono font-medium tracking-wide text-red-400 shadow-xl shadow-black/40 backdrop-blur-md">
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="uppercase select-none">🔒 403 • Internal Access Only</span>
      </div>
    </motion.div>
  );
}
