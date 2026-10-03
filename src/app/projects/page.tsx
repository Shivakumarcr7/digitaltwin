"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-sans text-white select-none">
      
      {/* 1. BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/videos/Students_building_engineering_pr…_20261003120225.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Very light overlay so the background video is fully vivid */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* 2. UI LAYER */}
      <div className="relative z-20 flex flex-col h-full max-w-5xl mx-auto px-6 py-16 justify-between">
        
        {/* HEADER */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-light tracking-[0.2em] text-white drop-shadow-md">PROJECTS ECOSYSTEM</h1>
            <p className="text-xs text-cyan-300 tracking-widest mt-1">P.E.S. COLLEGE OF ENGINEERING, MANDYA</p>
          </div>
          <a 
            href="/"
            className="px-5 py-2.5 bg-white/5 border border-white/15 hover:bg-white/10 text-xs tracking-widest transition-all backdrop-blur-xl rounded-lg shadow-xl"
          >
            ← BACK TO HOME
          </a>
        </div>

        {/* CENTER TRANSPARENT GLASS CONTAINER WITH EMPTY LIST */}
        <div className="my-auto flex flex-col items-center text-center">
          <div className="w-full bg-white/[0.02] border border-white/15 p-10 backdrop-blur-2xl shadow-[0_16px_40px_0_rgba(0,0,0,0.3)] rounded-2xl relative overflow-hidden max-w-2xl">
            {/* Glowing neon accent bar */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-violet-500 shadow-[0_0_15px_rgba(6,182,212,1)]" />
            
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-cyan-400 backdrop-blur-md">
              <FolderGit2 size={24} />
            </div>

            <h2 className="text-2xl font-light tracking-wider mb-2 drop-shadow">Active Projects</h2>
            <p className="text-xs text-gray-200 tracking-wide mb-8 max-w-md mx-auto drop-shadow">
              Collaborative initiatives, research prototypes, and digital twin deployments managed by the ecosystem.
            </p>

            {/* FULLY TRANSPARENT EMPTY LIST STATE */}
            {projects.length === 0 ? (
              <div className="py-12 border border-dashed border-white/15 rounded-xl bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center">
                <Sparkles size={28} className="text-cyan-300 mb-2 animate-pulse" />
                <p className="text-sm text-gray-200 font-light tracking-wide">No projects listed yet.</p>
                <p className="text-[11px] text-gray-300 mt-1">Populate this array whenever you are ready to showcase your work.</p>
              </div>
            ) : (
              <div className="space-y-3 text-left">
                {projects.map((proj, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md">
                    <h3 className="text-sm font-medium">{proj.title}</h3>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-gray-300 tracking-widest drop-shadow">
          <span>STATUS: PROJECTS ARCHIVE READY</span>
          <span>TACHYON ECOSYSTEM</span>
        </div>

      </div>
    </main>
  );
}
