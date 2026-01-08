
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#08080a]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight tracking-tight">
          More than just a bot. <br/>
          <span className="text-blue-500">A Complete Server Ecosystem.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-16 leading-relaxed mx-auto max-w-3xl font-light">
          FLASH HQ was built with a single goal: to make Discord management invisible. We believe server owners should focus on community engagement, while our bot, Codie, handles the technical heavy lifting with precision and speed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Intelligent Security", desc: "Advanced anti-raid systems that grow with your community." },
            { title: "Custom Scripting", desc: "Powerful engine designed for ultimate control and flexibility." },
            { title: "Global Economy", desc: "A connected financial system linking thousands of servers." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-blue-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
