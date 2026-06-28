import React from 'react';
import { SERVICES_DATA } from '../utils/constants';

export default function Services() {
  return (
    <section className="py-32 bg-[#0b1326]" id="services">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-20 fade-up">
          <span className="text-[#4cd7f6] text-xs font-semibold uppercase tracking-[0.2em] block mb-4">Our Expertise</span>
          <h2 className="text-4xl font-bold">Premium Global Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, i) => (
            <div key={i} className={`glass-panel p-10 rounded-[2rem] relative overflow-hidden group transition-all duration-500 hover:shadow-2xl ${service.hoverBorder}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <span className={`material-symbols-outlined ${service.color} text-5xl mb-8 block transition-transform duration-500 group-hover:scale-110`}>{service.icon}</span>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-[#c3c6d7] text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}