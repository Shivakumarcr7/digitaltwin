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
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000"
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-cyan-950/10 mix-blend-overlay pointer-events-none" />
      </div>

      {/* 2. UI NAVIGATION & HEADERS */}
      <div className="relative z-20 flex flex-col h-full max-w-7xl mx-auto px-6 py-8 justify-between pointer-events-none">
        
        {/* TOP HEADER */}
        <div className="flex justify-between items-center border-b border-cyan-900/40 pb-6 pointer-events-auto">
          <div>
            <h1 className="text-2xl font-light tracking-[0.2em] text-white">AI/ML DEPARTMENT DIGITAL TWIN</h1>
            <p className="text-xs text-cyan-400 tracking-widest mt-1">P.E.S. COLLEGE OF ENGINEERING, MANDYA</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-black/85 border border-cyan-500/30 p-1 rounded backdrop-blur-md flex">
              <button 
                onClick={() => setActiveFloor("ground")}
                className={`px-4 py-2 text-xs tracking-widest transition-all ${activeFloor === "ground" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50" : "text-gray-400 hover:text-white"}`}
              >
                GROUND FLOOR
              </button>
              <button 
                onClick={() => setActiveFloor("first")}
                className={`px-4 py-2 text-xs tracking-widest transition-all ${activeFloor === "first" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50" : "text-gray-400 hover:text-white"}`}
              >
                FIRST FLOOR
              </button>
            </div>

            <Link 
              href="/"
              className="px-6 py-2.5 bg-red-950/60 border border-red-500/40 hover:bg-red-900/60 text-red-200 text-xs tracking-widest transition-all backdrop-blur"
            >
              EXIT TO WEBSITE
            </Link>
          </div>
        </div>

        {/* MIDDLE INTERACTIVE ROOM SELECTOR PANEL */}
        <div className="my-auto max-w-xl pointer-events-auto">
          <div className="bg-black/80 border border-cyan-500/30 p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
            
            <span className="text-[10px] text-cyan-400 tracking-[0.3em] uppercase block mb-1">
              Active Environment Node
            </span>
            <h2 className="text-2xl font-light text-white mb-4">{selectedRoomName}</h2>
            
            <p className="text-gray-300 text-xs leading-relaxed mb-6">
              Exploring spatial telemetry. Select a facility below to glide through the entrance corridor and shift the immersive video background directly into that room.
            </p>

            <div className="space-y-3">
              <h3 className="text-[10px] text-gray-400 tracking-widest uppercase">
                {activeFloor === "ground" ? "Ground Floor Rooms & Offices" : "First Floor Labs & Classrooms"}
              </h3>

              {activeFloor === "ground" ? (
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleSelectRoom("1st Year Classroom", "/videos/Students_walking_across_college_…_20261002144623.mp4")}
                    className="p-3 text-left border border-gray-800 hover:border-cyan-500 bg-black/50 hover:bg-cyan-950/30 transition-all text-xs tracking-wider"
                  >
                    ▶ 1st Year Classroom
                  </button>
                  <button 
                    onClick={() => handleSelectRoom("2nd Year Staff Room", "/videos/Students_walking_across_college_…_20261002152604.mp4")}
                    className="p-3 text-left border border-gray-800 hover:border-cyan-500 bg-black/50 hover:bg-cyan-950/30 transition-all text-xs tracking-wider"
                  >
                    ▶ 2nd Year Staff Room
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleSelectRoom("AI/ML Computer Lab 01", "/videos/Students_walking_across_college_…_20261002152604.mp4")}
                    className="p-3 text-left border border-gray-800 hover:border-purple-500 bg-black/50 hover:bg-purple-950/30 transition-all text-xs tracking-wider"
                  >
                    ▶ AI/ML Computer Lab 01
                  </button>
                  <button 
                    onClick={() => handleSelectRoom("4th Year Project Section", "/videos/Students_walking_across_college_…_20261002144623.mp4")}
                    className="p-3 text-left border border-gray-800 hover:border-purple-500 bg-black/50 hover:bg-purple-950/30 transition-all text-xs tracking-wider"
                  >
                    ▶ 4th Year Section
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Faculty Lead:</span>
              <button 
                onClick={() => setSelectedFaculty(defaultLead)}
                className="text-xs text-cyan-400 hover:underline tracking-wider"
              >
                {defaultLead.name} ({defaultLead.designation}) →
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER STATUS */}
        <div className="border-t border-cyan-900/30 pt-4 flex justify-between items-center text-[10px] text-gray-500 tracking-widest pointer-events-auto">
          <span>STATUS: IMMERSIVE VIDEO EXPLORATION ACTIVE</span>
          <span>P.E.S. COLLEGE OF ENGINEERING, MANDYA</span>
        </div>

      </div>

      {/* FACULTY MODAL */}
      {selectedFaculty && (
        <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-cyan-500/40 p-8 max-w-lg w-full relative shadow-2xl">
            <h2 className="text-2xl font-light text-white mb-1">{selectedFaculty.name}</h2>
            <p className="text-cyan-400 text-xs tracking-widest mb-6">{selectedFaculty.designation}</p>
            
            <div className="space-y-3 mb-8 text-xs text-gray-300">
              <div><strong className="text-gray-500">Department:</strong> {selectedFaculty.department}</div>
              <div><strong className="text-gray-500">Qualification:</strong> {selectedFaculty.education}</div>
              <div><strong className="text-gray-500">Office:</strong> {selectedFaculty.office}, {selectedFaculty.floor}</div>
            </div>

            <button 
              onClick={() => setSelectedFaculty(null)}
              className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-xs tracking-widest text-gray-300 transition-all"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
