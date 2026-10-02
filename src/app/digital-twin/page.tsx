"use client";

import { useState } from "react";
import Link from "next/link";
import { facultyData } from "@/data/faculty";
import { motion, AnimatePresence } from "framer-motion";

export default function DigitalTwinPage() {
  const [activeFloor, setActiveFloor] = useState<"ground" | "first">("ground");
  const [currentVideo, setCurrentVideo] = useState<string>("/videos/gemini_generated_video_2e505ee3.mp4");
  const [selectedRoomName, setSelectedRoomName] = useState<string>("Main Department Exterior");
  const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);

  // Find Chetan Kumar V from the faculty roster as the default lead
  const defaultLead = facultyData.find(f => f.name.includes("Chetan Kumar")) || facultyData[2];

  const handleSelectRoom = (roomName: string, videoPath: string) => {
    setSelectedRoomName(roomName);
    setCurrentVideo(videoPath);
  };

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-sans text-white select-none">
      
      {/* 1. CINEMATIC DYNAMIC VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video 
          key={currentVideo}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000"
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
        {/* Lighter gradient overlay so the background video shines through */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-cyan-950/10 mix-blend-overlay pointer-events-none" />
      </div>

      {/* 2. UI NAVIGATION & HEADERS */}
      <div className="relative z-20 flex flex-col h-full max-w-7xl mx-auto px-6 py-8 justify-between pointer-events-none">
        
        {/* TOP HEADER */}
        <div className="flex justify-between items-center border-b border-cyan-500/20 pb-6 pointer-events-auto">
          <div>
            <h1 className="text-2xl font-light tracking-[0.2em] text-white drop-shadow-md">AI/ML DEPARTMENT DIGITAL TWIN</h1>
            <p className="text-xs text-cyan-400 tracking-widest mt-1 drop-shadow">P.E.S. COLLEGE OF ENGINEERING, MANDYA</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-black/40 border border-cyan-500/30 p-1 rounded backdrop-blur-md flex shadow-lg">
              <button 
                onClick={() => setActiveFloor("ground")}
                className={`px-4 py-2 text-xs tracking-widest transition-all ${activeFloor === "ground" ? "bg-cyan-500/30 text-cyan-200 border border-cyan-500/60 shadow" : "text-gray-300 hover:text-white"}`}
              >
                GROUND FLOOR
              </button>
              <button 
                onClick={() => setActiveFloor("first")}
                className={`px-4 py-2 text-xs tracking-widest transition-all ${activeFloor === "first" ? "bg-cyan-500/30 text-cyan-200 border border-cyan-500/60 shadow" : "text-gray-300 hover:text-white"}`}
              >
                FIRST FLOOR
              </button>
            </div>

            <Link 
              href="/"
              className="px-6 py-2.5 bg-red-950/40 border border-red-500/40 hover:bg-red-900/60 text-red-200 text-xs tracking-widest transition-all backdrop-blur shadow-lg"
            >
              EXIT TO WEBSITE
            </Link>
          </div>
        </div>

        {/* MIDDLE INTERACTIVE FROSTED GLASS ROOM SELECTOR PANEL */}
        <div className="my-auto max-w-xl pointer-events-auto">
          <div className="bg-black/45 border border-cyan-500/30 p-8 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            
            <span className="text-[10px] text-cyan-300 tracking-[0.3em] uppercase block mb-1 font-semibold drop-shadow">
              Active Environment Node
            </span>
            <h2 className="text-2xl font-light text-white mb-4 drop-shadow-md">{selectedRoomName}</h2>
            
            <p className="text-gray-200 text-xs leading-relaxed mb-6 drop-shadow">
              Exploring spatial telemetry. Select a facility below to glide through the entrance corridor and shift the immersive video background directly into that room.
            </p>

            <div className="space-y-3">
              <h3 className="text-[10px] text-gray-300 tracking-widest uppercase font-medium">
                {activeFloor === "ground" ? "Ground Floor Rooms & Offices" : "First Floor Labs & Classrooms"}
              </h3>

              {activeFloor === "ground" ? (
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleSelectRoom("1st Year Classroom", "/videos/Students_walking_across_college_…_20261002144623.mp4")}
                    className="p-3 text-left border border-white/10 hover:border-cyan-400 bg-black/40 hover:bg-cyan-950/40 backdrop-blur transition-all text-xs tracking-wider shadow"
                  >
                    ▶ 1st Year Classroom
                  </button>
                  <button 
                    onClick={() => handleSelectRoom("2nd Year Staff Room", "/videos/Students_walking_across_college_…_20261002152604.mp4")}
                    className="p-3 text-left border border-white/10 hover:border-cyan-400 bg-black/40 hover:bg-cyan-950/40 backdrop-blur transition-all text-xs tracking-wider shadow"
                  >
                    ▶ 2nd Year Staff Room
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleSelectRoom("AI/ML Computer Lab 01", "/videos/Students_walking_across_college_…_20261002152604.mp4")}
                    className="p-3 text-left border border-white/10 hover:border-purple-400 bg-black/40 hover:bg-purple-950/40 backdrop-blur transition-all text-xs tracking-wider shadow"
                  >
                    ▶ AI/ML Computer Lab 01
                  </button>
                  <button 
                    onClick={() => handleSelectRoom("4th Year Project Section", "/videos/Students_walking_across_college_…_20261002144623.mp4")}
                    className="p-3 text-left border border-white/10 hover:border-purple-400 bg-black/40 hover:bg-purple-950/40 backdrop-blur transition-all text-xs tracking-wider shadow"
                  >
                    ▶ 4th Year Section
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Faculty Lead:</span>
              <button 
                onClick={() => setSelectedFaculty(defaultLead)}
                className="text-xs text-cyan-300 hover:underline tracking-wider font-medium drop-shadow"
              >
                {defaultLead.name} ({defaultLead.designation}) →
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER STATUS */}
        <div className="border-t border-cyan-500/20 pt-4 flex justify-between items-center text-[10px] text-gray-400 tracking-widest pointer-events-auto drop-shadow">
          <span>STATUS: IMMERSIVE VIDEO EXPLORATION ACTIVE</span>
          <span>P.E.S. COLLEGE OF ENGINEERING, MANDYA</span>
        </div>

      </div>

      {/* FACULTY MODAL */}
      {selectedFaculty && (
        <div className="absolute inset-0 z-50 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="bg-black/60 border border-cyan-500/40 p-8 max-w-lg w-full relative shadow-2xl backdrop-blur-2xl">
            <h2 className="text-2xl font-light text-white mb-1">{selectedFaculty.name}</h2>
            <p className="text-cyan-400 text-xs tracking-widest mb-6">{selectedFaculty.designation}</p>
            
            <div className="space-y-3 mb-8 text-xs text-gray-200">
              <div><strong className="text-gray-400">Department:</strong> {selectedFaculty.department}</div>
              <div><strong className="text-gray-400">Qualification:</strong> {selectedFaculty.education}</div>
              <div><strong className="text-gray-400">Office:</strong> {selectedFaculty.office}, {selectedFaculty.floor}</div>
            </div>

            <button 
              onClick={() => setSelectedFaculty(null)}
              className="px-6 py-3 border border-white/20 hover:border-white text-xs tracking-widest text-gray-200 transition-all bg-black/50 backdrop-blur"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
