
import React from 'react';
import { ChevronRight, Share2, Bot, Terminal as TerminalIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-32 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Codie v4.2.0 is now live
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            FLASH <span className="text-gradient">HQ</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-inter font-light">
            The most advanced Discord ecosystem for community management. <br className="hidden md:block"/>
            <span className="text-white font-medium">Manage, Moderate, and Automate</span> without lifting a finger.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-16">
            <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white rounded-2xl font-extrabold flex items-center justify-center gap-2 group transition-all duration-200 glow-primary shadow-lg shadow-blue-900/20">
              Invite Codie
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 active:scale-95 text-white border border-white/10 rounded-2xl font-extrabold flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-sm">
              Join Server
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Codie Live Instance Dashboard */}
          <div className="relative w-full max-w-4xl mx-auto mt-12 group animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase ml-4">Codie Instance #FLASH-01 — Live Monitoring</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[9px] font-bold">OPERATIONAL</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6 text-left">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <TerminalIcon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white tracking-wide">AI Core System</p>
                      <p className="text-xs text-green-400 font-mono">Status: Processing Events...</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                      <span>Server Load</span>
                      <span className="text-blue-400">42%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-[42%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                      <span>Network Uptime</span>
                      <span className="text-green-400">99.98%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[99%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-8">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
                    <div className="relative w-32 h-32 rounded-full border-4 border-blue-500/30 p-1">
                      <img 
                        src="https://picsum.photos/seed/codiebot/300" 
                        alt="Codie Avatar"
                        className="w-full h-full rounded-full object-cover shadow-2xl"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-[#0a0a0c] rounded-full" />
                  </div>
                  <h3 className="text-lg font-black text-white mt-4">Codie AI</h3>
                  <p className="text-gray-500 text-xs font-mono">v4.2.0 Stable Build</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
