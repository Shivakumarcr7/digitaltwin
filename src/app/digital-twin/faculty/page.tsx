"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Html } from "@react-three/drei";
import { Suspense } from "react";
import Link from "next/link";
import { facultyData } from "@/data/faculty";
import { motion, AnimatePresence } from "framer-motion";

export default function FacultyShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFaculty = facultyData[currentIndex];

  const handleNext = () => {
    if (currentIndex < facultyData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back or return to twin when reaching the end
      window.location.href = "/digital-twin";
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      window.location.href = "/digital-twin";
    }
  };

  return (
    <main className="relative w-full h-screen bg-[#030305] text-white overflow-hidden font-sans select-none flex flex-col justify-between">
      
      {/* TOP HEADER */}
      <div className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 bg-gradient-to-b from-black/90 to-transparent pointer-events-auto">
        <div>
          <h1 className="text-xl tracking-[0.2em] font-light text-white">TACHYON FACULTY SHOWCASE</h1>
          <p className="text-xs text-cyan-400 tracking-widest mt-0.5">P.E.S. COLLEGE OF ENGINEERING, MANDYA</p>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-gray-400 tracking-widest">
            FACULTY {String(currentIndex + 1).padStart(2, '0')} / {String(facultyData.length).padStart(2, '0')}
          </span>
          <Link 
            href="/digital-twin"
            className="px-5 py-2 bg-red-950/40 border border-red-500/40 hover:bg-red-900/40 text-red-200 text-xs tracking-widest transition-all"
          >
            EXIT TO DIGITAL TWIN
          </Link>
        </div>
      </div>

      {/* SPLIT SCREEN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full pt-24 pb-20 px-8 lg:px-16 gap-8 items-center z-10">
        
        {/* LEFT SIDE: FACULTY INFORMATION (No Photos - Professional Typography & Metadata) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentFaculty.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <span className="text-[10px] text-cyan-400 tracking-[0.3em] uppercase block mb-2">
                  {currentFaculty.department}
                </span>
                <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-2">
                  {currentFaculty.name}
                </h2>
                <p className="text-sm text-cyan-300 tracking-wider font-light">
                  {currentFaculty.designation}
                </p>
              </div>

              <div className="h-[1px] w-full bg-cyan-900/30" />

              <div className="space-y-4 text-xs text-gray-300">
                <div>
                  <strong className="text-gray-500 block mb-1 uppercase tracking-wider text-[10px]">Academic Qualification</strong>
                  <span className="text-white">{currentFaculty.education}</span>
                </div>

                <div>
                  <strong className="text-gray-500 block mb-1 uppercase tracking-wider text-[10px]">Office / Location</strong>
                  <span className="text-white">{currentFaculty.office}, {currentFaculty.floor}</span>
                </div>

                <div>
                  <strong className="text-gray-500 block mb-2 uppercase tracking-wider text-[10px]">Research Areas & Expertise</strong>
                  <div className="flex flex-wrap gap-2">
                    {currentFaculty.researchAreas.map((area) => (
                      <span key={area} className="px-3 py-1 bg-gray-900 border border-gray-800 text-cyan-300 text-[10px] tracking-wider">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: 3D CHARACTER STUDIO VIEWPORT */}
        <div className="lg:col-span-7 h-full w-full relative flex items-center justify-center border border-gray-800/80 bg-[#060609] rounded-xl overflow-hidden shadow-2xl">
          
          {/* Subtle Studio Glow & Branding Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-gray-600 uppercase pointer-events-none">
            Digital Representation Studio • 3D Humanoid Model
          </div>

          <Canvas shadows camera={{ position: [0, 1.4, 4], fov: 45 }}>
            <PerspectiveCamera makeDefault position={[0, 1.4, 4]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
            {/* Tachyon Cyan/Violet Rim Lighting */}
            <pointLight position={[-3, 2, -2]} color="#06b6d4" intensity={2} />
            <pointLight position={[3, 2, -2]} color="#8b5cf6" intensity={1.5} />

            <Suspense fallback={null}>
              <Environment preset="city" />

              {/* 3D Human Character Representation Placeholder (Rigged Humanoid Mesh) */}
              <group position={[0, -1.2, 0]}>
                <mesh castShadow receiveShadow>
                  <capsuleGeometry args={[0.4, 1.6, 8, 32]} />
                  <meshStandardMaterial 
                    color={currentFaculty.gender === "female" ? "#1e293b" : "#0f172a"} 
                    roughness={0.4} 
                    metalness={0.2}
                  />
                </mesh>
                
                {/* Faculty Name Tag in Studio */}
                <Html position={[0, 2.2, 0]} center>
                  <div className="px-3 py-1 bg-black/80 border border-cyan-500/40 text-cyan-300 text-[10px] tracking-widest backdrop-blur rounded whitespace-nowrap shadow-lg">
                    {currentFaculty.name} [Digital Avatar]
                  </div>
                </Html>
              </group>

              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                maxPolarAngle={Math.PI / 2 + 0.1} 
                minPolarAngle={Math.PI / 2 - 0.3}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>

        </div>

      </div>

      {/* BOTTOM NAVIGATION FOOTER (Previous / Next controls) */}
      <div className="absolute bottom-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-auto border-t border-cyan-900/20">
        <button 
          onClick={handlePrev}
          className="px-6 py-3 border border-gray-700 hover:border-cyan-500 bg-black/60 backdrop-blur text-xs tracking-widest text-gray-300 hover:text-white transition-all"
        >
          ← PREVIOUS FACULTY
        </button>

        <span className="text-[10px] text-gray-500 tracking-widest uppercase hidden md:inline">
          Use Navigation Buttons to Browse Roster
        </span>

        <button 
          onClick={handleNext}
          className="px-8 py-3 border border-cyan-500 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-50 text-xs tracking-widest transition-all backdrop-blur shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          {currentIndex === facultyData.length - 1 ? "ENTER AI/ML DEPARTMENT →" : "NEXT FACULTY →"}
        </button>
      </div>

    </main>
  );
}
