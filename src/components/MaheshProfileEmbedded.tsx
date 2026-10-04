"use client";

import { motion } from "framer-motion";
import { X, GraduationCap, Briefcase, Network } from "lucide-react";
import { useEffect } from "react";

interface MaheshProfileProps {
  onClose: () => void;
}

export default function MaheshProfileEmbedded({ onClose }: MaheshProfileProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="relative w-full h-[calc(100vh-14rem)] flex items-stretch bg-black overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      >
        <source src="/videos/Professor_walking_and_posing_20261005005220.mp4" type="video/mp4" />
      </video>

      {/* LEFT CONTENT PANEL */}
      <div className="relative z-10 w-full md:w-[55%] lg:w-[45%] flex flex-col justify-center bg-gradient-to-r from-black via-black/90 to-transparent p-8 md:p-12 border-r border-white/5 backdrop-blur-[2px] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:left-8 md:top-8 w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 rounded-full flex items-center justify-center transition-all backdrop-blur-md cursor-pointer z-50"
        >
          <X size={18} className="text-white" />
        </button>

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-xl mt-12 md:mt-0 md:ml-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Dr. Mahesh <span className="text-cyan-400">Kaluti</span>
          </h1>
          <p className="text-xs md:text-sm text-cyan-200 font-semibold uppercase tracking-[0.2em] mb-6">
            Associate Professor | AI & ML
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="flex items-center gap-3 text-white font-medium mb-3 border-b border-white/10 pb-2 uppercase tracking-wider text-xs">
                <GraduationCap className="text-cyan-400" size={18} /> Education
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
                  <div>
                    <strong className="text-white block">Ph.D.</strong>
                    Computer Science & Engineering
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-white font-medium mb-3 border-b border-white/10 pb-2 uppercase tracking-wider text-xs">
                <Briefcase className="text-cyan-400" size={18} /> Professional & Teaching Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "Machine Learning", "Data Mining", "Neural Networks"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-200 shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-white font-medium mb-3 border-b border-white/10 pb-2 uppercase tracking-wider text-xs">
                <Network className="text-cyan-400" size={18} /> Office
              </h3>
              <div className="text-gray-300 text-xs leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 shadow-lg">
                <span className="block text-cyan-300 font-medium mb-1">Staff Room, First Floor</span>
                Department of Artificial Intelligence & Machine Learning, P.E.S. College of Engineering, Mandya.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
