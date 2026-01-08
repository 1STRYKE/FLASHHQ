
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { StatsSection } from './components/StatsSection';
import { LiveChatPreview } from './components/LiveChatPreview';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-blue-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        
        <main>
          <Hero />
          <About />
          <Features />
          <StatsSection />
          <LiveChatPreview />
          <Team />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
