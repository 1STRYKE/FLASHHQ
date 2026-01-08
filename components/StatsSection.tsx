
import React from 'react';
import { STATS } from '../constants';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0c]/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
