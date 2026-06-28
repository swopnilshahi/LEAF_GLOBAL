import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function LeafGlobal() {
  const [activeSection, setActiveSection] = useState('home');

  // Trigger the hook to initialize scroll animations globally across elements
  useIntersectionObserver('.fade-up');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans selection:bg-[#b4c5ff]/30 scroll-smooth">
      <style>{`
        .glass-panel { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .gradient-text { background: linear-gradient(135deg, #b4c5ff 0%, #4cd7f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ambient-glow { filter: blur(80px); background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%); }
        .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      `}</style>

      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <Hero onNavClick={handleNavClick} />
      <About />
      <Services />
      <Contact />
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}