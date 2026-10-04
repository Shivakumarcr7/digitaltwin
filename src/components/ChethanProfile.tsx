"use client";

import { motion } from "framer-motion";
import { X, GraduationCap, Briefcase, Network } from "lucide-react";

interface ChethanProfileProps {
  onClose: () => void;
}

export default function ChethanProfile({ onClose }: ChethanProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center bg-black overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/Man_walking_and_posing_1080p_20261004215702_3.mp4" type="video/mp4" />
      </video>

      {/* LEFT CONTENT PANEL - GLASSMORPHISM */}
      <div className="relative z-10 w-full md:w-1/2 lg:w-[45%] h-full bg-gradient-to-r from-black via-black/90 to-transparent p-8 md:p-16 flex flex-col justify-center border-r border-white/5 backdrop-blur-[4px]">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 md:left-8 w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 rounded-full flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
        >
          <X size={18} className="text-white" />
        </button>

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-xl mt-12"
        >
          {/* HEADER */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
            Chetan <span className="text-cyan-400">Kumar V</span>
          </h1>
          <p className="text-sm md:text-base text-cyan-200 font-semibold uppercase tracking-[0.2em] mb-10">
            Assistant Professor • AI & ML
          </p>

          <div className="space-y-10">
            {/* EDUCATION */}
            <div>
              <h3 className="flex items-center gap-3 text-white font-medium mb-4 border-b border-white/10 pb-2 uppercase tracking-wider text-xs">
                <GraduationCap className="text-cyan-400" size={18} /> Education
              </h3>
              <ul className="text-gray-300 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
                  <div>
                    <strong className="text-white block">M.Tech (8.23 CGPA)</strong>
                    SJCE, Mysore, VTU — 2009
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
                  <div>
                    <strong className="text-white block">B.E.</strong>
                    NIE, Mysore, University of Mysore — 2001
                  </div>
                </li>
              </ul>
            </div>

            {/* DOMAIN EXPERTISE */}
            <div>
              <h3 className="flex items-center gap-3 text-white font-medium mb-4 border-b border-white/10 pb-2 uppercase tracking-wider text-xs">
                <Briefcase className="text-cyan-400" size={18} /> Professional & Teaching Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["Storage Area Networks", "Software Engineering", "Machine Learning", "Cloud Computing", "Big Data"].map((skill) => (
                  <span key={skill} className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-gray-200 shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* RESEARCH */}
            <div>
              <h3 className="flex items-center gap-3 text-white font-medium mb-4 border-b border-white/10 pb-2 uppercase tracking-wider text-xs">
                <Network className="text-cyan-400" size={18} /> PhD & Research
              </h3>
              <div className="text-gray-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="block text-cyan-300 font-medium mb-2">Research Area: Big Data Analytics</span>
                VTU research scholar under Dr. Umesh D R. Focused on assistive systems for improvising the behavior of intellectually disabled children (Autism Spectrum Disorder) over IoT and Wireless Body Area Networks.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
