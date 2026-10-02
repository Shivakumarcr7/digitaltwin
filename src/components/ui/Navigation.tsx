"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Navigation = () => {
  const pathname = usePathname();
  
  // Hide navigation when fully inside the digital twin experience
  if (pathname === "/digital-twin") return null;

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "FACULTY", path: "/faculty" },
    { name: "PROJECTS", path: "/projects" },
    { name: "EVENTS", path: "/events" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl tracking-[0.2em] font-light text-white">TACHYON</span>
          <span className="text-[10px] tracking-[0.3em] text-cyan-500">AI/ML CLUB</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-xs tracking-[0.15em] transition-colors ${
                pathname === link.path ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/digital-twin"
            className="ml-4 px-6 py-2 border border-cyan-500/40 hover:bg-cyan-900/30 text-xs tracking-widest text-cyan-50 transition-all"
          >
            EXPLORE DIGITAL TWIN
          </Link>
        </nav>
      </div>
    </header>
  );
};
