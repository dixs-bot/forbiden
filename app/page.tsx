'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Server, Lock, ExternalLink } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingParticles from '../components/FloatingParticles';
import SecurityShield from '../components/SecurityShield';
import StatusBadge from '../components/StatusBadge';

export default function AccessRestrictedPage() {
  // Motion variations for sequential fade-in entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier
      },
    },
  };

  return (
    <>
      <title>Access Restricted | Secure System</title>
      <meta name="description" content="Secure internal system. Authorized access only." />
      
      <main className="relative min-h-screen flex flex-col items-center justify-between p-6 overflow-hidden text-zinc-100 selection:bg-red-500/20 selection:text-red-300">
        {/* Background Effects */}
        <AnimatedBackground />
        <FloatingParticles />

        {/* Header/Top Navigation Bar (Premium glassmorphism element) */}
        <div className="w-full max-w-7xl flex items-center justify-between z-10 py-4 opacity-75">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Lock className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <span className="text-xs font-mono tracking-widest text-zinc-400 font-semibold">CORE SECURE</span>
          </div>
          
          {/* Tiny blinking green status indicator 'System Secure' */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-xs font-mono text-emerald-400/90 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>System Secure</span>
          </div>
        </div>

        {/* Main Content Area (Glassmorphism Premium Card) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative my-auto max-w-[540px] w-full z-10"
        >
          {/* Card Border glow wrapper */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-zinc-800/40 via-zinc-900/10 to-zinc-950/40 rounded-3xl -z-10" />
          
          {/* Main glass card body */}
          <div className="bg-zinc-950/60 border border-zinc-800/50 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-black/80 backdrop-blur-xl">
            {/* Security Shield Component */}
            <motion.div variants={itemVariants}>
              <SecurityShield />
            </motion.div>

            {/* Status Badge Component */}
            <motion.div variants={itemVariants} className="mb-6">
              <StatusBadge />
            </motion.div>

            {/* Small Badge 'SECURE INTERNAL SYSTEM' */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono tracking-[0.2em] text-zinc-400 font-semibold uppercase">
                SECURE INTERNAL SYSTEM
              </span>
            </motion.div>

            {/* Headline 'Access Restricted' */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2 font-sans bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-400"
            >
              Access Restricted
            </motion.h1>

            {/* Subtitle 'Mohon maaf, project ini tidak dapat diakses secara publik.' */}
            <motion.h2 
              variants={itemVariants}
              className="text-sm font-medium text-red-400/90 tracking-wide mb-6 px-2"
            >
              Mohon maaf, project ini tidak dapat diakses secara publik.
            </motion.h2>

            {/* Separator */}
            <motion.div 
              variants={itemVariants}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-6"
            />

            {/* Main description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm text-zinc-400 leading-relaxed mb-4 text-justify md:text-center"
            >
              Untuk menjaga keamanan database, API, dan informasi internal perusahaan, akses ke sistem ini dibatasi hanya untuk personel yang memiliki otorisasi resmi.
            </motion.p>

            {/* Secondary text */}
            <motion.p 
              variants={itemVariants}
              className="text-xs text-zinc-500 leading-relaxed font-normal"
            >
              Jika Anda merasa memiliki hak akses, silakan hubungi administrator sistem.
            </motion.p>
            
            {/* CTA action buttons for admins */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button 
                className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-not-allowed group"
                disabled
              >
                <Server className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-400" />
                Admin Console
              </button>
              
              <a 
                href="mailto:admin@company.com" 
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-xs font-semibold text-black transition-all duration-200 flex items-center justify-center gap-2"
              >
                Contact Security
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer 'Protected by Company Security Policy Unauthorized access is prohibited.' with dividers */}
        <div className="w-full max-w-xl z-10 mt-auto pt-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-zinc-800" />
            <ShieldAlert className="w-4 h-4 text-zinc-600" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-zinc-800" />
          </div>
          <p className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase select-none leading-relaxed">
            Protected by Company Security Policy
            <br />
            <span className="text-red-500/50">Unauthorized access is prohibited.</span>
          </p>
        </div>
      </main>
    </>
  );
}
