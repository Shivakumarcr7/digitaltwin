"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am your AI Twin for the PESCE AI/ML department. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    const updatedMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    let maxRetries = 2;
    let attempt = 0;
    let finalReply = "Neural connection error. Please try again.";

    while (attempt <= maxRetries) {
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        const data = await res.json();
        finalReply = data.reply;

        // If it's a 503 error, wait and try again in the background
        if (res.status === 503 && attempt < maxRetries) {
          attempt++;
          await new Promise(resolve => setTimeout(resolve, 2500 * attempt)); // Wait 2.5s, then 5s
          continue;
        }
        break; // Success or a non-503 error, exit loop
      } catch (err) {
        break; // Network failure, exit loop
      }
    }

    setMessages(prev => [...prev, { role: "assistant", content: finalReply }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-cyan-600 hover:bg-cyan-500 text-black px-5 py-3.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] font-medium text-xs tracking-widest uppercase transition-all border border-cyan-300"
          >
            <Sparkles size={16} /> Ask AI Twin
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] sm:w-[400px] h-[500px] bg-black/90 border border-cyan-500/30 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-cyan-300">Tachyon Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed ${
                    m.role === "user" 
                      ? "bg-cyan-600/30 border border-cyan-400/40 text-cyan-100 rounded-br-none" 
                      : "bg-white/10 border border-white/10 text-gray-200 rounded-bl-none"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-gray-400 text-xs animate-pulse pl-2">Thinking...</div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-white/5 flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <button type="submit" className="p-2.5 bg-cyan-600 hover:bg-cyan-500 text-black rounded-xl">
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
