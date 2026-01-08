
import React from 'react';
import { Zap } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-xl' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-600/20">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">FLASH <span className="text-blue-500">HQ</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm font-semibold text-gray-400 hover:text-white hover:translate-y-[-1px] transition-all duration-200">About</a>
          <a href="#features" className="text-sm font-semibold text-gray-400 hover:text-white hover:translate-y-[-1px] transition-all duration-200">Features</a>
          <a href="#developers" className="text-sm font-semibold text-gray-400 hover:text-white hover:translate-y-[-1px] transition-all duration-200">Developers</a>
          <button className="bg-white text-black hover:bg-blue-50 px-7 py-2.5 rounded-full text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
            Dashboard
          </button>
        </div>

        <button className="md:hidden text-white p-2 rounded-lg bg-white/5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
