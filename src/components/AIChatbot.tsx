"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Spinner } from "./Spinner";

type Message = {
  role: "user" | "model";
  text: string;
};

type GeminiHistoryMessage = {
  role: "user" | "model";
  parts: [{ text: string }];
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hi there! 👋 I'm the Code Peak Nepal AI Assistant. Ask me anything about our services, pricing, or our team!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      // Gemini requires history to start with a 'user' message.
      // We slice(1) to drop the initial hardcoded 'model' greeting.
      const formattedHistory: GeminiHistoryMessage[] = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: formattedHistory
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      setMessages(prev => [...prev, { role: "model", text: data.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "model", text: "Oops! I encountered a connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[400px] h-[550px] bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-navy to-slate-900 p-5 flex items-center justify-between relative overflow-hidden shrink-0">
              {/* Abstract subtle background pattern in header */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-900 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Code Peak Nepal AI</h3>
                  <p className="text-xs text-blue-200 font-medium">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all relative z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#F8FAFC]">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
                    
                    {msg.role === 'model' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-400 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    )}

                    <div 
                      className={`px-4 py-3 text-[0.9rem] leading-relaxed shadow-sm w-fit ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-br from-primary to-blue-500 text-white rounded-[1.5rem] rounded-br-sm' 
                          : 'bg-white text-gray-700 border border-gray-100 rounded-[1.5rem] rounded-bl-sm markdown-body'
                      }`}
                      style={{ wordBreak: 'break-word' }}
                    >
                      {msg.role === 'model' ? (
                        <ReactMarkdown 
                          components={{
                            p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="marker:text-blue-500" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold text-navy" {...props} />,
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%] items-end">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-400 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-[1.5rem] rounded-bl-sm flex items-center gap-1.5 h-[44px]">
                      <Spinner size="sm" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.02)]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-5 pr-14 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-navy placeholder:text-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all relative z-50 group border border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-7 h-7" />
              {/* Notification Dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-blue-500"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
