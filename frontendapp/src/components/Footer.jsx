import React from 'react';

export default function Footer({ onNavClick }) {
  return (
    <footer className="bg-[#060e20] border-t border-[#434655]/20 pt-20 pb-12 relative">
      <div className="container mx-auto px-4 md:px-12 max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-[#dae2fd] mb-4">LEAF GLOBAL</span>
            <p className="text-[#c3c6d7] text-sm max-w-xs text-center md:text-left">Empowering the world's leading organizations through digital innovation and human capital development.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold text-[#8d90a0]">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <button key={item} onClick={() => onNavClick(item)} className="hover:text-[#4cd7f6] transition-colors capitalize">
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-[#b4c5ff]/20 transition-all">
              <span className="material-symbols-outlined text-sm">public</span>
            </button>
            <button className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-[#b4c5ff]/20 transition-all">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </button>
            <button className="w-10 h-10 bg-[#2563eb] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="material-symbols-outlined text-sm">north</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-6 border-t border-[#434655]/10 mt-12 text-xs font-semibold text-[#8d90a0]">
          <span>© 2026 Leaf Global Consulting. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-[#4cd7f6] transition-colors" href="#privacy">Privacy Policy</a>
            <a className="hover:text-[#4cd7f6] transition-colors" href="#terms">Terms of Service</a>
            <a className="hover:text-[#4cd7f6] transition-colors" href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}