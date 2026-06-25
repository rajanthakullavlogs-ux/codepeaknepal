"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
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

const QUICK_PROMPTS = [
  { label: "💼 Services Offered", text: "What services do you offer?" },
  { label: "💰 Pricing Plans", text: "How much does a website or mobile app cost?" },
  { label: "🚀 About CodePeak", text: "Tell me about CodePeak Nepal and what makes you unique." }
];

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

  const handleSend = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: "user", text: messageText }]);
    setIsLoading(true);

    try {
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
          message: messageText,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput("");
    handleSend(userMessage);
  };

  const handleQuickPromptClick = (promptText: string) => {
    handleSend(promptText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[400px] h-[550px] bg-white/95 dark:bg-[#151926]/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-gray-150/80 dark:border-gray-800/80 flex flex-col overflow-hidden z-50"
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-navy to-slate-900 dark:from-[#0B0F19] dark:to-[#151926] p-5 flex items-center justify-between border-b border-gray-100/10 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              
              <div className="flex items-center gap-3.5 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(60,56,255,0.4)]">
                    <Sparkles className="w-5 h-5 fill-white/10" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-navy rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-[0.95rem] tracking-tight">Code Peak AI</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <p className="text-[0.7rem] text-blue-200/80 font-semibold tracking-wide uppercase">Replies instantly</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-all relative z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 dark:bg-[#0B0F19]/40">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start`}>
                    
                    {msg.role === 'model' && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Sparkles className="w-4 h-4 fill-white/10" />
                      </div>
                    )}

                    <div 
                      className={`px-4 py-3 text-[0.92rem] leading-relaxed shadow-sm w-fit ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white rounded-[1.5rem] rounded-tr-none' 
                          : 'bg-white dark:bg-[#1E2330] text-gray-800 dark:text-gray-200 border border-gray-100/80 dark:border-gray-800/80 rounded-[1.5rem] rounded-tl-none markdown-body'
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
                            strong: ({node, ...props}) => <strong className="font-bold text-navy dark:text-white" {...props} />,
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
                  <div className="flex gap-3 max-w-[85%] items-start">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Sparkles className="w-4 h-4 fill-white/10" />
                    </div>
                    <div className="bg-white dark:bg-[#1E2330] border border-gray-100/80 dark:border-gray-800/80 shadow-sm px-4 py-3 rounded-[1.5rem] rounded-tl-none flex items-center gap-1.5 h-[44px]">
                      <Spinner size="sm" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length <= 1 && (
              <div className="px-5 py-3 flex flex-col gap-2 bg-slate-50/50 dark:bg-[#0B0F19]/40 border-t border-gray-100/20 dark:border-gray-850/20 shrink-0">
                <p className="text-[0.7rem] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-1">Common Questions</p>
                <div className="flex flex-col gap-1.5">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickPromptClick(prompt.text)}
                      className="px-4 py-2.5 rounded-xl text-left text-xs font-bold bg-white hover:bg-primary/5 text-gray-700 hover:text-primary dark:bg-[#1E2330] dark:hover:bg-primary/20 dark:text-gray-300 dark:hover:text-blue-400 border border-gray-200/60 dark:border-gray-800 transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-[#151926] border-t border-gray-100 dark:border-gray-850 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.02)] shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-[#F8FAFC] dark:bg-[#1E2330] border border-gray-200 dark:border-gray-800 rounded-2xl pl-5 pr-14 py-3.5 text-[0.92rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-primary/20"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <div className="relative group">
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-primary/30 blur-md opacity-70 group-hover:opacity-100 animate-pulse pointer-events-none transition-all duration-300"></span>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-16 h-16 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full shadow-[0_8px_30px_rgba(60,56,255,0.3)] flex items-center justify-center hover:shadow-[0_8px_30px_rgba(60,56,255,0.5)] transition-all border border-white/20"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-primary"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
