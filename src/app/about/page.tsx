"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setIsVideoFinished(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative">
      
      {/* FULL-SCREEN INTRODUCTORY VIDEO SEQUENCE */}
      <AnimatePresence>
        {!isVideoFinished && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              playsInline
              onEnded={handleVideoEnded}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Man_walking_to_bookshelf_20261003114340.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle overlay gradient & Skip button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            
            <div className="absolute bottom-12 z-10 flex flex-col items-center">
              <button 
                onClick={() => setIsVideoFinished(true)}
                className="px-6 py-2.5 bg-black/40 hover:bg-black/60 border border-white/20 text-xs tracking-[0.2em] uppercase backdrop-blur-md transition-all rounded-full shadow-2xl text-gray-300 hover:text-white"
              >
                Skip Intro →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN ABOUT SECTION (Revealed after video sequence) */}
      <div className="max-w-7xl mx-auto px-6 py-28">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVideoFinished ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-cyan-900/40 pb-8"
        >
          <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold">Institutional Profile</span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-widest text-white mt-2 mb-4">
            P.E.S. COLLEGE OF ENGINEERING
          </h1>
          <p className="text-gray-400 tracking-wide text-sm md:text-base max-w-3xl">
            Mandya, Karnataka • Established in 1962 under the People's Education Society
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core History & Overview */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <div className="bg-[#0a0a0a] border border-cyan-500/30 p-8 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500" />
              <h2 className="text-xl font-light text-white mb-4 tracking-wide">Overview & Legacy</h2>
              <p className="mb-4">
                P.E.S. College of Engineering (PESCE), located in Mandya, Karnataka, was started in the year 1962 by the People's Education Society® under the visionary leadership of Late Sri K.V. Shankara Gowda. Over six decades, it has grown into one of Karnataka's oldest and most prestigious engineering institutions.
              </p>
              <p>
                Operating as an autonomous institution affiliated with Visvesvaraya Technological University (VTU), Belagavi, PESCE is recognized by AICTE, approved by UGC, and accredited by NBA and NAAC.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg">
                <Building2 size={24} className="text-cyan-400 mb-3" />
                <h3 className="text-white font-medium text-sm mb-1">Campus & Infrastructure</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Spans a sprawling 62-acre urban campus featuring smart classrooms, advanced R&D labs, and digital libraries.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg">
                <Award size={24} className="text-cyan-400 mb-3" />
                <h3 className="text-white font-medium text-sm mb-1">Accreditation & Ranking</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Ranked in the 201-300 band nationally by NIRF, backed by top-tier NAAC and NBA accreditations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats & Vision */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-cyan-950/30 to-[#0a0a0a] border border-cyan-900/50 p-8 rounded-xl">
              <h3 className="text-xs text-cyan-400 tracking-[0.2em] uppercase font-semibold mb-6">Key Institutional Metrics</h3>
              
              <div className="space-y-4 text-xs tracking-wider">
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Established Year</span>
                  <span className="text-white font-medium">1962</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Affiliation</span>
                  <span className="text-white font-medium">VTU, Belagavi</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Student Body</span>
                  <span className="text-white font-medium">3,500+ Active Students</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Programs Offered</span>
                  <span className="text-white font-medium">B.E., M.Tech, MCA, MBA, Ph.D.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Motto</span>
                  <span className="text-cyan-300 font-medium">"Learning with dedication gives wisdom"</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Explore Department</span>
                <h4 className="text-sm font-medium text-white mt-0.5">AI & ML Digital Twin Ecosystem</h4>
              </div>
              <a 
                href="/team" 
                className="p-3 bg-cyan-600 hover:bg-cyan-500 text-black rounded-lg transition-all shadow-lg flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
