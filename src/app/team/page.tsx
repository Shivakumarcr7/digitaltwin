"use client";

import { motion } from "framer-motion";
import { Crown, Star, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const team = [
    { name: "Shivkumar", role: "President", icon: Crown, delay: 0.1 },
    { name: "Nandish", role: "Secretary", icon: User, delay: 0.2 },
    { name: "Pavan Bhargav", role: "Vice President", icon: Star, delay: 0.3 },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* BACKGROUND VIDEO PLACEHOLDER */}
      {/* Swap the src here once you have your team background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      >
        <source src="/videos/Anime_leaders_walking_forward_20261006180306.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-0 pointer-events-none"></div>

      {/* NAVIGATION */}
      <Link href="/" className="absolute top-8 left-8 z-50 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-cyan-400 text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-md">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      {/* CENTRAL CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center mt-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            TACHYON <span className="text-cyan-500">CORE</span>
          </h1>
          <p className="text-cyan-200 uppercase tracking-[0.3em] text-sm font-semibold">
            The minds behind the ecosystem
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: member.delay, duration: 0.5 }}
              className="bg-black/40 border border-white/10 backdrop-blur-md p-10 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 group shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <member.icon size={32} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
              <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">{member.role}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
