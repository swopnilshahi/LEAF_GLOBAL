import React from 'react';

export default function Contact() {
  return (
    <section className="py-32 relative" id="contact">
      <div className="container mx-auto px-4 md:px-12">
        <div className="glass-panel p-12 md:p-20 rounded-[3rem] shadow-2xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="fade-up">
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-[#c3c6d7] text-lg mb-12">Ready to transform your organizational potential? Our consultants are standing by to map your global journey.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#b4c5ff]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#b4c5ff]">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider mb-1 font-semibold text-[#b4c5ff]">Our Location</h4>
                    <p className="text-[#dae2fd]">65 Murry St, Hobart, TAS 7000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#4cd7f6]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#4cd7f6]">mail</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider mb-1 font-semibold text-[#4cd7f6]">Email Us</h4>
                    <p className="text-[#dae2fd]">leaf.global@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#ddb7ff]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#ddb7ff]">call</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider mb-1 font-semibold text-[#ddb7ff]">Phone</h4>
                    <p className="text-[#dae2fd]">+61 0403434925</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-up">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <input className="bg-black/20 border-b-2 border-transparent focus:border-[#4cd7f6] transition-all rounded-xl p-4 text-[#dae2fd] outline-none w-full" placeholder="Full Name" type="text" />
                  <input className="bg-black/20 border-b-2 border-transparent focus:border-[#4cd7f6] transition-all rounded-xl p-4 text-[#dae2fd] outline-none w-full" placeholder="Email Address" type="email" />
                </div>
                <input className="bg-black/20 border-b-2 border-transparent focus:border-[#4cd7f6] transition-all rounded-xl p-4 text-[#dae2fd] outline-none w-full" placeholder="Subject" type="text" />
                <textarea className="bg-black/20 border-b-2 border-transparent focus:border-[#4cd7f6] transition-all rounded-xl p-4 text-[#dae2fd] outline-none w-full" placeholder="Your Message" rows="5" />
                <button className="w-full bg-gradient-to-r from-[#2563eb] to-[#03b5d3] py-5 rounded-2xl text-xs font-semibold uppercase tracking-widest hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-[0.98]" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-20 h-64 rounded-3xl overflow-hidden border border-white/5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCODUtMj0WxXCcJBMUybZGVcZAB2VJZt1-zJ2Gr8AeebZBA-AsFA23jCt6LZ3fbYsStJHBkYU6cvJBixA8lTCEpahKsF06MgMABJc_ODp-64KwpLqW4ILAkU8KDnVIDyxjKRIwka-a3f9xLIcESuKFdZak8ga8BwiXUsPJ1MSz0PSZyL6j54KTc6C3E4aNHOeNqpRC9Uwhv6bgrYpIeK_YmgZOQ3H67bD00-JL-RVjDZlR4EOkdHY8d0I5jlZXYjGvCpjJ3918dVXbM" alt="Hobart Satellite View" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-1/2 h-full ambient-glow opacity-30 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}