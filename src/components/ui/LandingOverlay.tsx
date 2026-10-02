import { useExperienceStore } from '@/store/useExperienceStore';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const LandingOverlay = () => {
  const setPhase = useExperienceStore((state) => state.setPhase);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') setPhase("FACULTY_INTRO");
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setPhase]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="relative w-full h-full pointer-events-auto flex flex-col items-center justify-center"
    >
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-65 mix-blend-screen"
      >
        <source src="/videos/gemini_generated_video_2e505ee3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl md:text-8xl tracking-[0.2em] font-extralight mb-2"
        >
          TACHYON
        </motion.h1>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl md:text-2xl tracking-[0.3em] text-cyan-400 mb-6"
        >
          AI/ML CLUB
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm tracking-widest text-gray-400 mb-16 uppercase"
        >
          P.E.S. College of Engineering, Mandya
        </motion.p>
        <motion.button 
          onClick={() => setPhase("FACULTY_INTRO")}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-cyan-500/50 bg-black/40 backdrop-blur-md transition-all"
        >
          <span className="tracking-widest text-sm text-cyan-50">ENTER VIRTUAL WORLD</span>
        </motion.button>
        <p className="mt-6 text-[11px] text-gray-500 tracking-[0.2em] animate-pulse">
          PRESS ENTER TO BEGIN
        </p>
      </div>
      <div className="absolute bottom-6 text-[10px] text-gray-600 tracking-widest">
        DIGITAL TWIN EXPERIENCE • ENGINEERED BY SHIVAKUMAR PATIL
      </div>
    </motion.div>
  );
};
