import React from 'react';
import { NAV_ITEMS } from '../utils/constants';

export default function Navbar({ activeSection, onNavClick }) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] rounded-full bg-white/40 dark:bg-[#2d3449]/40 backdrop-blur-xl border border-white/10 dark:border-[#b4c5ff]/10 shadow-xl shadow-blue-500/5 flex justify-between items-center px-8 py-3 z-50">
      <div className="text-xl font-bold tracking-tighter text-[#b4c5ff]">LEAF GLOBAL</div>
      <div className="hidden md:flex gap-8 items-center">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => onNavClick(item)}
            className={`capitalize text-base font-medium transition-all duration-300 ${
              activeSection === item ? 'text-[#4cd7f6] font-bold' : 'text-[#dae2fd]/70 hover:text-[#4cd7f6]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="bg-[#2563eb] text-[#eeefff] px-6 py-2 rounded-full text-xs font-semibold active:scale-95 transition-transform duration-200">
        Get Started
      </button>
    </nav>
  );
}