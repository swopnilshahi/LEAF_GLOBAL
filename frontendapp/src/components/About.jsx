import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../utils/constants';

export default function About() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#060e20]" id="about">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="fade-up">
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-[#c3c6d7] leading-relaxed mb-8">
              Leaf Global Consulting Company is a modern consulting and technology-driven enterprise specializing in IT solutions, workforce development, education consulting, and global career pathways. We partner with organizations to modernize infrastructure and build job-ready talent pipelines.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-8 rounded-2xl">
                <span className="material-symbols-outlined text-[#b4c5ff] text-3xl mb-4">rocket_launch</span>
                <h4 className="text-xl font-medium mb-2">Our Mission</h4>
                <p className="text-[#c3c6d7] text-sm">Bridging the gap between learning, technology, and employment through innovation.</p>
              </div>
              <div className="glass-panel p-8 rounded-2xl">
                <span className="material-symbols-outlined text-[#4cd7f6] text-3xl mb-4">visibility</span>
                <h4 className="text-xl font-medium mb-2">Our Vision</h4>
                <p className="text-[#c3c6d7] text-sm">Empowering every organization with cutting-edge digital transformation strategies.</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[500px] fade-up shadow-2xl">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV4Az8PjxkLlrHv-dWoNEHkL3CcpfozoVjLwIXT1koQRItPKd5cQYekGocdvKpxbIkrogHTRLpHzA_rHHMBs4So_9hnz3uBeWqwoelGPKDg_m3oPZZTZJrAMz7jInZzb90P1EucqrO7bzP-HSykc3qRhGOhxR7Rs79d89QP5on7Da5RBn9EjyQ9tIEqVK1_8GzWknmqvwXyWGzsUcHOam_ulWquUj2y7Un1uztMgGFKE4hNvSkY6CqiE4n4Nbt4JITPZedDGVGa2cW" alt="Office space" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] to-transparent opacity-60"></div>
          </div>
        </div>

        <div className="text-center mb-16 fade-up">
          <h3 className="text-4xl font-bold">Why Choose Us</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((card, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl fade-up transition-all hover:-translate-y-2 group">
              <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                <span className={`material-symbols-outlined ${card.color}`}>{card.icon}</span>
              </div>
              <h4 className="text-xl font-medium mb-3">{card.title}</h4>
              <p className="text-[#c3c6d7] text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}