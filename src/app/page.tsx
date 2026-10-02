import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Anime Campus Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 transition-opacity duration-1000"
      >
        <source src="/videos/Students_walking_across_college_…_20261002144623.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay z-0 pointer-events-none" />
      
      {/* UI Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        <h2 className="text-cyan-500 tracking-[0.4em] text-xs md:text-sm mb-6 font-medium uppercase drop-shadow-md">
          P.E.S. College of Engineering, Mandya
        </h2>
        <h1 className="text-6xl md:text-8xl font-extralight tracking-widest text-white mb-4 drop-shadow-lg">
          TACHYON
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 tracking-[0.3em] font-light mb-12 drop-shadow-md">
          AI & ML CLUB
        </p>
        
        <p className="text-gray-400 tracking-wider mb-12 max-w-2xl text-sm leading-relaxed drop-shadow-md">
          Explore. Experiment. Create. Step into the future of education with our interactive digital twin, or discover the projects and research shaping tomorrow.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <Link 
            href="/digital-twin"
            className="px-8 py-4 border border-cyan-500 bg-black/40 backdrop-blur-sm hover:bg-cyan-900/40 text-cyan-50 tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
          >
            <span className="group-hover:text-white transition-colors">EXPLORE DIGITAL TWIN</span>
          </Link>
          <Link 
            href="/faculty"
            className="px-8 py-4 border border-gray-600 bg-black/40 backdrop-blur-sm hover:bg-gray-800/60 text-gray-300 tracking-widest text-sm transition-all group"
          >
            <span className="group-hover:text-white transition-colors">MEET FACULTY</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
