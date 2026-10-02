"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, FileText, Video, Upload, Send } from "lucide-react";

export default function TwinDashboard() {
  const [updateText, setUpdateText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [memories, setMemories] = useState<any[]>([]);

  // Mocking the authenticated user for the MVP
  const user = { name: "Shivakumar Patil", agentName: "Shivu Twin", status: "ACTIVE" };

  const handleUpdateSubmit = async () => {
    if (!updateText) return;
    setIsProcessing(true);
    
    try {
      const res = await fetch('/api/agent/ingest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: "mock-uuid",
          agentId: "mock-agent-uuid",
          updateText,
          sourceType: "text"
        })
      });
      const data = await res.json();
      if (data.success) {
        setMemories([data.memory, ...memories]);
        setUpdateText("");
      } else {
        // Fallback for demo if DB isn't connected yet
        setMemories([{ category: "Local Update", content: updateText }, ...memories]);
        setUpdateText("");
      }
    } catch (err) {
      console.error(err);
      setMemories([{ category: "Offline Note", content: updateText }, ...memories]);
      setUpdateText("");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 px-6 pb-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Status & Timeline */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0a0a0a] border border-cyan-500/30 p-6 backdrop-blur-md rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.05)]">
            <h2 className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mb-4">My Digital Twin</h2>
            <h1 className="text-2xl font-light mb-1">{user.agentName}</h1>
            <p className="text-xs text-gray-400 mb-6">Owner: {user.name}</p>
            
            <div className="space-y-3 text-xs tracking-wider">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">Status</span>
                <span className="text-cyan-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> {user.status}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">Memories</span>
                <span className="text-white">{124 + memories.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Learning Streak</span>
                <span className="text-white">7 Days</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg">
            <h2 className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mb-4">Recent Memory Timeline</h2>
            <div className="space-y-4 border-l border-gray-800 ml-2 pl-4">
              {memories.map((m, i) => (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="relative">
                  <div className="absolute w-2 h-2 bg-cyan-500 rounded-full -left-[21px] top-1.5" />
                  <span className="text-[9px] text-cyan-500 uppercase tracking-widest">{m.category}</span>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{m.content}</p>
                </motion.div>
              ))}
              <div className="relative">
                <div className="absolute w-2 h-2 bg-gray-700 rounded-full -left-[21px] top-1.5" />
                <span className="text-[9px] text-gray-500 uppercase tracking-widest">OCT 02</span>
                <p className="text-xs text-gray-400 mt-1">Built Personal Digital Twin MVP architecture.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Update Interface & Agent Chat */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-violet-600" />
            <h2 className="text-xl font-light mb-2">What did you do today?</h2>
            <p className="text-xs text-gray-500 tracking-wider mb-6">Teach your agent by providing a daily update.</p>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-xs tracking-wider rounded hover:bg-cyan-900/50 transition-colors"><FileText size={14} /> Text</button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 text-gray-400 text-xs tracking-wider rounded hover:bg-gray-800 transition-colors"><Mic size={14} /> Audio</button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 text-gray-400 text-xs tracking-wider rounded hover:bg-gray-800 transition-colors"><Video size={14} /> Video</button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 text-gray-400 text-xs tracking-wider rounded hover:bg-gray-800 transition-colors"><Upload size={14} /> Document</button>
            </div>

            <textarea 
              value={updateText}
              onChange={(e) => setUpdateText(e.target.value)}
              placeholder="e.g., Today I worked on my digital twin project and learned about personal AI agents..."
              className="w-full bg-black border border-gray-800 rounded p-4 text-sm text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors min-h-[120px] resize-none mb-4"
            />
            
            <div className="flex justify-end">
              <button 
                onClick={handleUpdateSubmit}
                disabled={isProcessing || !updateText}
                className="flex items-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-800 disabled:text-gray-500 text-black font-medium text-xs tracking-widest transition-all rounded shadow-lg"
              >
                {isProcessing ? "PROCESSING..." : "SUBMIT MEMORY"} <Send size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Agent Chat Placeholder */}
          <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-lg">
            <h2 className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500" /> Ask Your Agent
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-end"><div className="bg-gray-800 text-sm p-3 rounded-l-lg rounded-tr-lg max-w-md">What did I work on today?</div></div>
              <div className="flex justify-start"><div className="bg-cyan-950/40 border border-cyan-900/50 text-cyan-50 text-sm p-4 rounded-r-lg rounded-tl-lg max-w-md leading-relaxed">Based on your recent memories, you worked on your Digital Twin project, studied agentic AI, and updated your ecosystem architecture.</div></div>
            </div>
            <input type="text" placeholder="Ask about your skills, projects, or past updates..." className="w-full bg-black border border-gray-800 rounded-full px-6 py-3 text-sm text-gray-300 focus:outline-none focus:border-violet-500 transition-colors" />
          </div>

        </div>
      </div>
    </main>
  );
}
