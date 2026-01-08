
import React from 'react';
import { Twitter, Github, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <div className="w-5 h-5 bg-white rounded-sm" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">FLASH HQ</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Empowering communities with smart automation and effortless server management.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Resources</span>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">API Status</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Community</span>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Support Server</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">TOS</a>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://auvra-studioo.vercel.app/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-medium uppercase tracking-widest">
          <p>© 2024 FLASH HQ. All rights reserved.</p>
          <p>Website made by <a href="https://auvra-studioo.vercel.app/" className="text-blue-500 hover:underline">Auvra.Studioo</a></p>
        </div>
      </div>
    </footer>
  );
};
