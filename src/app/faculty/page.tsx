"use client";

import { useState } from "react";
import { facultyData, FacultyProfile } from "@/data/faculty";
import { User, ArrowRight, ArrowLeft, X, Building2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);
  const [showcaseStep, setShowcaseStep] = useState<"preview" | "character">("preview");

  const currentIndex = selectedFaculty 
    ? facultyData.findIndex(f => f.id === selectedFaculty.id) 
    : 0;

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % facultyData.length;
    setSelectedFaculty(facultyData[nextIdx]);
    setShowcaseStep("preview");
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + facultyData.length) % facultyData.length;
    setSelectedFaculty(facultyData[prevIdx]);
    setShowcaseStep("preview");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6 pb-20 select-none">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-widest text-cyan-400 mb-4 uppercase">
          Faculty Roster
        </h1>
        <p className="text-gray-400 tracking-wide mb-12">
          Department of Artificial Intelligence & Machine Learning • P.E.S. College of Engineering, Mandya
        </p>
        <div className="h-[1px] w-full bg-cyan-900/30 mb-12"></div>
        
        {/* FACULTY GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty) => (
            <div 
              key={faculty.id} 
              onClick={() => { setSelectedFaculty(faculty); setShowcaseStep("preview"); }}
              className="border border-gray-800 bg-[#0a0a0a] hover:border-cyan-500/60 cursor-pointer transition-all duration-300 group flex flex-col h-full relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-900/0 group-hover:bg-cyan-500 transition-colors"></div>
              
              <div className="h-44 w-full bg-[#111] flex flex-col items-center justify-center border-b border-gray-800 relative group-hover:bg-[#16161c] transition-colors">
                <User size={40} className="text-gray-600 group-hover:text-cyan-400 transition-colors mb-2" />
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">3D Digital Representation Available</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-medium tracking-wide text-white mb-1 group-hover:text-cyan-300 transition-colors">{faculty.name}</h2>
                <p className="text-sm text-cyan-500 mb-4">{faculty.designation}</p>
                
                <div className="space-y-3 mt-auto">
                  <div className="text-xs text-gray-400">
                    <span className="text-gray-500">Qualification:</span> {faculty.education}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="text-gray-500">Office:</span> {faculty.office}, {faculty.floor}
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-gray-900 text-xs text-cyan-400">
                    <span>Explore 3D Profile →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE WORKFLOW MODAL */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-[#08080a] border border-cyan-500/40 w-full max-w-5xl h-[85vh] rounded-xl flex flex-col overflow-hidden relative shadow-2xl">
              
              {/* MODAL HEADER */}
              <div className="flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black/50">
                <div>
                  <span className="text-[10px] text-cyan-400 tracking-widest uppercase">Interactive Faculty Showcase</span>
                  <h3 className="text-lg text-white font-light">{selectedFaculty.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedFaculty(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* MODAL BODY CONTENT */}
              <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {showcaseStep === "preview" ? (
                    /* STEP 1: STAFF ROOM PREVIEW */
                    <motion.div 
                      key="preview"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="w-full h-full flex flex-col md:flex-row items-center p-8 gap-8"
                    >
                      <div className="w-full md:w-1/2 h-64 md:h-full bg-gradient-to-br from-cyan-950/40 to-black border border-cyan-900/50 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
                        <Building2 size={64} className="text-cyan-600 mb-4 animate-pulse" />
                        <span className="text-xs text-cyan-300 tracking-widest uppercase font-medium">PESCE AI/ML Department Environment</span>
                        <p className="text-[10px] text-gray-500 tracking-widest mt-1">{selectedFaculty.office} • {selectedFaculty.floor}</p>
                      </div>

                      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-cyan-400 text-xs tracking-widest uppercase">Step 01 / Environment Context</span>
                          <h2 className="text-3xl font-light text-white mt-1 mb-3">{selectedFaculty.office}</h2>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            You are inspecting the active staff consultation and academic office space mapped to {selectedFaculty.name}. Step inside to view verified professional credentials and the interactive 3D digital character representation.
                          </p>
                        </div>

                        <button 
                          onClick={() => setShowcaseStep("character")}
                          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-medium text-xs tracking-widest transition-all self-start shadow-lg flex items-center gap-2"
                        >
                          ENTER 3D CHARACTER SHOWCASE →
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* STEP 2: TEACHER INFO & 3D CHARACTER STUDIO */
                    <motion.div 
                      key="character"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="w-full h-full grid grid-cols-1 md:grid-cols-12 overflow-y-auto"
                    >
                      {/* Left Side: Teacher Information */}
                      <div className="md:col-span-5 p-8 flex flex-col justify-center space-y-6 border-r border-gray-800">
                        <div>
                          <span className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase block mb-1">
                            {selectedFaculty.department}
                          </span>
                          <h2 className="text-3xl font-light text-white mb-1">
                            {selectedFaculty.name}
                          </h2>
                          <p className="text-xs text-cyan-300 tracking-wider">
                            {selectedFaculty.designation}
                          </p>
                        </div>

                        <div className="space-y-3 text-xs text-gray-300 pt-2">
                          <div>
                            <strong className="text-gray-500 block mb-0.5 uppercase tracking-wider text-[10px]">Qualification</strong>
                            {selectedFaculty.education}
                          </div>
                          <div>
                            <strong className="text-gray-500 block mb-0.5 uppercase tracking-wider text-[10px]">Office</strong>
                            {selectedFaculty.office}, {selectedFaculty.floor}
                          </div>
                          <div>
                            <strong className="text-gray-500 block mb-1.5 uppercase tracking-wider text-[10px]">Research Areas</strong>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedFaculty.researchAreas.map(area => (
                                <span key={area} className="px-2 py-0.5 bg-gray-900 border border-gray-800 text-[10px] text-cyan-300">
                                  {area}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <button 
                          onClick={() => setShowcaseStep("preview")}
                          className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase self-start pt-2 underline"
                        >
                          ← Back to Staff Room Preview
                        </button>
                      </div>

                      {/* Right Side: 3D Character Studio Viewport */}
                      <div className="md:col-span-7 h-64 md:h-full relative bg-[#040406] flex items-center justify-center">
                        <div className="absolute top-4 left-4 z-10 text-[9px] tracking-[0.2em] text-gray-400 uppercase pointer-events-none bg-black/60 px-3 py-1 rounded backdrop-blur">
                          3D Digital Character Representation
                        </div>

                        <div className="absolute bottom-6 z-10 px-3 py-1 bg-black/80 border border-cyan-500/40 text-cyan-300 text-[10px] tracking-widest backdrop-blur rounded shadow-lg pointer-events-none">
                          {selectedFaculty.name}
                        </div>

                        <Canvas shadows camera={{ position: [0, 1.4, 3.5], fov: 45 }}>
                          <PerspectiveCamera makeDefault position={[0, 1.4, 3.5]} />
                          <ambientLight intensity={0.6} />
                          <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
                          <pointLight position={[-3, 2, -2]} color="#06b6d4" intensity={2} />

                          <Suspense fallback={null}>
                            <Environment preset="city" />
                            <group position={[0, -1.2, 0]}>
                              <mesh castShadow receiveShadow>
                                <capsuleGeometry args={[0.35, 1.5, 8, 32]} />
                                <meshStandardMaterial 
                                  color={selectedFaculty.gender === "female" ? "#1e293b" : "#0f172a"} 
                                  roughness={0.4} 
                                  metalness={0.2}
                                />
                              </mesh>
                            </group>
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                          </Suspense>
                        </Canvas>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* MODAL FOOTER */}
              <div className="px-8 py-4 border-t border-gray-800 bg-black/60 flex justify-between items-center">
                <button 
                  onClick={handlePrev}
                  className="px-4 py-2 border border-gray-700 hover:border-cyan-500 text-xs tracking-widest text-gray-300 transition-all flex items-center gap-2"
                >
                  <ArrowLeft size={14} /> PREVIOUS FACULTY
                </button>

                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  Roster Index: {currentIndex + 1} / {facultyData.length}
                </span>

                <button 
                  onClick={handleNext}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-medium text-xs tracking-widest transition-all flex items-center gap-2 shadow-lg"
                >
                  NEXT FACULTY <ArrowRight size={14} />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
