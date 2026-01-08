
import React from 'react';
import { DEVELOPERS } from '../constants';

export const Team: React.FC = () => {
  return (
    <section id="developers" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Core Contributors</h2>
          <p className="text-gray-400">The minds behind the magic of FLASH HQ.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {DEVELOPERS.map((dev) => (
            <div key={dev.id} className="group flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 group-hover:opacity-100 blur transition duration-500" />
                <img 
                  src={dev.avatar} 
                  alt={dev.name} 
                  className="relative w-32 h-32 rounded-full border-4 border-[#050505] object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{dev.name}</h3>
              <p className="text-blue-500 text-sm font-medium">{dev.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
