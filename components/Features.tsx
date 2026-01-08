
import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
            Core Utilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Powerful Capabilities</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Everything you need to run a high-traffic Discord server, all packed into one intuitive bot ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="group p-8 rounded-[2rem] bg-[#0a0a0c] border border-white/5 hover:border-blue-500/40 hover:-translate-y-3 transition-all duration-500 relative overflow-hidden active:scale-[0.98]"
              style={{ boxShadow: '0 0 0 rgba(88, 101, 242, 0)' }}
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.03] transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/0 blur-[60px] rounded-full translate-x-16 -translate-y-16 group-hover:bg-blue-500/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-blue-600/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/5 group-hover:border-blue-500/30">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                
                <div className="mt-8 flex items-center text-blue-500 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 cursor-pointer">
                  Explore Feature
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
