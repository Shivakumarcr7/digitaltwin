"use client";

import { useState, Suspense } from "react";
import ChethanProfileEmbedded from "@/components/ChethanProfileEmbedded";
import MaheshProfileEmbedded from "@/components/MaheshProfileEmbedded";
import { facultyData, FacultyProfile } from "@/data/faculty";
import { User, ArrowRight, ArrowLeft, X, Building2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

export default function FacultyPage() {
  const [showChethan, setShowChethan] = useState(false);
  const [showMahesh, setShowMahesh] = useState(false);
  const [selectedFaculty, setSelectedFaculty] =
    useState<FacultyProfile | null>(null);

  const [showcaseStep, setShowcaseStep] = useState<
    "preview" | "character"
  >("preview");

  const currentIndex = selectedFaculty
    ? facultyData.findIndex((f) => f.id === selectedFaculty.id)
    : 0;

  // ----------------------------------------------------------
  // Open faculty
  // Chetan Kumar V -> new cinematic profile
  // Other faculty -> existing interactive modal
  // ----------------------------------------------------------

  const handleFacultyClick = (faculty: FacultyProfile) => {
    if (
      faculty.name.toLowerCase().includes("chetan kumar") ||
      faculty.name.toLowerCase().includes("chethan kumar")
    ) {
      setSelectedFaculty(null);
      setShowChethan(true);
      return;
    }

    setShowChethan(false);
    setSelectedFaculty(faculty);
    setShowcaseStep("preview");
  };

  // ----------------------------------------------------------
  // Next faculty
  // ----------------------------------------------------------

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % facultyData.length;
    const nextFaculty = facultyData[nextIdx];

    setSelectedFaculty(null);

    if (
      nextFaculty.name.toLowerCase().includes("chetan kumar") ||
      nextFaculty.name.toLowerCase().includes("chethan kumar")
    ) {
      setShowChethan(true);
      return;
    }

    setShowChethan(false);
    setSelectedFaculty(nextFaculty);
    setShowcaseStep("preview");
  };

  // ----------------------------------------------------------
  // Previous faculty
  // ----------------------------------------------------------

  const handlePrev = () => {
    const prevIdx =
      (currentIndex - 1 + facultyData.length) % facultyData.length;

    const prevFaculty = facultyData[prevIdx];

    setSelectedFaculty(null);

    if (
      prevFaculty.name.toLowerCase().includes("chetan kumar") ||
      prevFaculty.name.toLowerCase().includes("chethan kumar")
    ) {
      setShowChethan(true);
      return;
    }

    setShowChethan(false);
    setSelectedFaculty(prevFaculty);
    setShowcaseStep("preview");
  };

  // ----------------------------------------------------------
  // CLOSE CINEMATIC PROFILE
  // ----------------------------------------------------------

  const closeChethanProfile = () => {
    setShowChethan(false);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 px-4 pb-20 select-none overflow-x-hidden flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-8 z-20 relative">
          <h1 className="text-3xl md:text-4xl font-extralight tracking-widest text-cyan-400 mb-2 uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Faculty
          </h1>
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-white uppercase">
            AI / ML Network
          </h2>
        </div>

        {showChethan ? (
          <div className="w-full max-w-7xl z-30 relative pb-16 mt-4">
            <button onClick={() => setShowChethan(false)} className="mb-6 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-cyan-400 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md">&larr; Back to Network Map</button>
            <ChethanProfileEmbedded onClose={() => setShowChethan(false)} />
          </div>
        ) : showMahesh ? (
          <div className="w-full max-w-7xl z-30 relative pb-16 mt-4">
            <button onClick={() => setShowMahesh(false)} className="mb-6 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-cyan-400 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md">&larr; Back to Network Map</button>
            <MaheshProfileEmbedded onClose={() => setShowMahesh(false)} />
          </div>
        ) : (
          <div className="relative w-full max-w-4xl h-[900px] mt-4 mx-auto font-mono">
            
            {/* SVG NETWORK LINES */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" filter="url(#neonGlow)">
                {/* 1 to 2 & 3 */}
                <line x1="50%" y1="10%" x2="25%" y2="30%" />
                <line x1="50%" y1="10%" x2="75%" y2="30%" />
                
                {/* 2 to 4 & 5 */}
                <line x1="25%" y1="30%" x2="15%" y2="55%" />
                <line x1="25%" y1="30%" x2="50%" y2="55%" />
                
                {/* 3 to 6 */}
                <line x1="75%" y1="30%" x2="85%" y2="55%" />
                
                {/* 5 to 6 (Horizontal) */}
                <line x1="50%" y1="55%" x2="85%" y2="55%" />
                
                {/* 4 to 7 */}
                <line x1="15%" y1="55%" x2="30%" y2="80%" />
                
                {/* 6 to 8 */}
                <line x1="85%" y1="55%" x2="70%" y2="80%" />
                
                {/* 7 to 8 (Horizontal) */}
                <line x1="30%" y1="80%" x2="70%" y2="80%" />
              </g>
            </svg>

            {/* RADIAL FACULTY PROFILES PLACED ON NODES */}
            {facultyData.slice(0, 9).map((faculty, index) => {
              // Exact coordinate mapping matching the ASCII art
              const positions = [
                { x: 50, y: 10 }, // 01 (Top Center)
                { x: 25, y: 30 }, // 02 (Mid Upper Left)
                { x: 75, y: 30 }, // 03 (Mid Upper Right)
                { x: 15, y: 55 }, // 04 (Far Left)
                { x: 50, y: 55 }, // 05 (Center)
                { x: 85, y: 55 }, // 06 (Far Right)
                { x: 30, y: 80 }, // 07 (Mid Lower Left)
                { x: 70, y: 80 }, // 08 (Mid Lower Right)
                { x: 50, y: 95 }  // 09 (Bottom Center - Standalone)
              ];
              const pos = positions[index] || { x: 50, y: 50 };
              
              return (
                <div 
                  key={index}
                  onClick={() => { if(faculty.name && faculty.name.includes("Chetan")) setShowChethan(true); else if(faculty.name && faculty.name.includes("Mahesh")) setShowMahesh(true); }}
                  className="absolute z-10 group cursor-pointer"
                  style={{
                    left: pos.x + '%',
                    top: pos.y + '%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="flex flex-col items-center">
                    
                    {/* The Node Dot */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#050505] border border-cyan-500/40 group-hover:bg-cyan-900/30 group-hover:border-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-cyan-700 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>

                    {/* Node Label */}
                    <div className="mt-3 text-center w-32 md:w-40 bg-black/80 px-2 py-1.5 rounded border border-white/5 group-hover:border-cyan-500/40 backdrop-blur-md transition-colors shadow-lg">
                      <h3 className="text-[10px] md:text-xs font-bold text-gray-200 uppercase tracking-widest group-hover:text-white">{faculty.name}</h3>
                      <p className="text-[8px] text-cyan-600 uppercase tracking-[0.2em] mt-1 group-hover:text-cyan-400">
                        {faculty.designation || "Faculty"}
                      </p>
                    </div>

                    {/* Interactive Badge */}
                    {faculty.name && (faculty.name.includes("Chetan") || faculty.name.includes("Mahesh")) && (
                      <div className="absolute top-16 bg-cyan-500 text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.8)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20 pointer-events-none">
                        Watch Profile
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
