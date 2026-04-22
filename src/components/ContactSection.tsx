"use client";

import { MapPin, Phone, MessageCircle, Clock, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-6 md:py-12 md:py-24 px-4 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
            >
              Contact Us
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Visit Us <br />
              <span className="text-primary underline decoration-blue-100 underline-offset-8">In Shivamogga</span>
            </h2>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-6 md:mb-12 max-w-lg">
              Located in the heart of the city, we are easily accessible for all your medical needs. Reach out to us for appointments or emergency assistance.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="group bg-white px-4 py-6 md:p-8 rounded-lg md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 text-primary rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">Our Location</h3>
                </div>
                <div>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                    Kuvempu Road, Near Jail Circle<br />
                    Hosamane, Shivamogga – 577201
                  </p>
                </div>
              </div>

              <div className="group bg-white px-4 py-6 md:p-8 rounded-lg md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-emerald-50 text-secondary rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">Emergency Help</h3>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-primary mb-4 leading-none">+91 81822 23632</p>
                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href="tel:+918182223632"
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg md:rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                      <Phone size={18} fill="currentColor" /> Call
                    </a>
                    <a
                      href="https://wa.me/918182223632"
                      className="w-full bg-secondary text-white px-6 py-3 rounded-lg md:rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white px-4 py-6 md:p-8 rounded-lg md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-red-50 text-red-500 rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">Open 24/7</h3>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Emergency Always Available</p>
                  </div>
                  <p className="text-sm md:text-base text-slate-500 font-medium">OPD Hours: 9:00 AM - 8:00 PM (Mon-Sat)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            <div className="flex-1 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[16px] border-white min-h-[500px] h-full relative group">
              <iframe
                src="https://www.google.com/maps?q=13.938192,75.568989&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1) brightness(0.95)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700"
              ></iframe>
              
              <div className="absolute top-8 left-8 right-8 pointer-events-none">
                <div className="glass-card px-4 py-5 md:p-6 rounded-[2.5rem] flex items-center justify-between border-white/50 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg md:rounded-2xl flex items-center justify-center text-white">
                      <Send size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-none">Directions</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Open in Maps</p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Gutti+Malnad+Hospital+Shivamogga" 
                    target="_blank" 
                    className="pointer-events-auto w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 glass-card px-4 py-6 md:p-8 rounded-[2.5rem] border-white/50 flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <p className="text-sm font-bold text-slate-500 leading-relaxed">
                Ample parking space and wheel-chair accessibility available at the entrance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
