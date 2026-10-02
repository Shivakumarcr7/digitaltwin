import Link from "next/link";
import { User } from "lucide-react";

export default function EcosystemPage() {
  const publicTwins = [
    { id: 1, name: "Shivakumar Patil", role: "AI/ML Student", agent: "Shivu Twin", skills: ["AI Agents", "LLM", "Computer Vision"] },
    { id: 2, name: "Dr. Umesh D R", role: "Professor", agent: "Dr. Umesh AI", skills: ["Data Analytics", "Machine Learning"] },
    { id: 3, name: "Chetan Kumar V", role: "Assistant Professor", agent: "Chetan AI", skills: ["Artificial Intelligence"] }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-widest text-cyan-400 mb-4 uppercase">Tachyon Ecosystem</h1>
        <p className="text-gray-400 tracking-wide mb-12">P.E.S. College of Engineering • A network of continuously learning digital twins.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicTwins.map(twin => (
            <div key={twin.id} className="border border-gray-800 bg-[#0a0a0a] p-6 hover:border-cyan-500/50 transition-colors group flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-950 flex items-center justify-center rounded-full border border-cyan-900/50"><User size={20} className="text-cyan-500" /></div>
                <div>
                  <h2 className="text-lg font-medium">{twin.name}</h2>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{twin.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {twin.skills.map(skill => (
                  <span key={skill} className="text-[10px] px-2 py-1 bg-gray-900 border border-gray-800 text-gray-300 rounded">{skill}</span>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-gray-800">
                <button className="text-xs text-cyan-400 tracking-wider hover:text-white transition-colors flex justify-between w-full">
                  <span>Ask {twin.agent}</span> <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
