"use client";

import { MapPin, Phone, MessageCircle, Clock, Mail, ShieldCheck, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPageUI() {
  return (
    <>
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm"
          >
            <ShieldCheck size={14} className="text-primary" />
            Contact Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Always Here <span className="text-primary">For You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium"
          >
            Have questions or want to book an appointment? Reach out to us through any of the following channels.
          </motion.p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 mb-12 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-red-600 text-white px-5 py-8 md:p-10 md:px-6 py-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(220,38,38,0.3)] flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -mr-80 -mt-80 blur-[100px]" />
          <div className="relative z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="w-4 h-4 bg-white rounded-full animate-ping" />
              <span className="font-black uppercase tracking-[0.3em] text-red-100 text-sm">Emergency 24/7 Available</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tight">Need Urgent Help?</h2>
            <p className="text-red-100 mt-4 text-xl font-medium opacity-80">Our ambulance and ER team are ready to assist you right now.</p>
          </div>
          <motion.a
            href="tel:+918182223632"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-white text-red-600 px-4 md:px-12 py-6 rounded-[2.5rem] font-black text-3xl md:text-4xl flex items-center gap-6 shadow-2xl shadow-black/20"
          >
            <Phone size={40} fill="currentColor" /> +91 81822 23632
          </motion.a>
        </motion.div>
      </div>

      <section className="py-6 md:py-12 px-4 max-w-7xl mx-auto mb-12 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6 md:mb-10 leading-tight">Get In <span className="text-primary">Touch</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-white p-4 md:p-10 rounded-lg md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 text-primary rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" />
                    </div>
                    <h4 className="font-black text-slate-900 text-lg md:text-xl">Call Us</h4>
                  </div>
                  <div>
                    <a href="tel:+918182223632" className="text-slate-500 text-sm md:text-lg font-bold hover:text-primary transition-colors">+91 81822 23632</a>
                  </div>
                  <a href="tel:+918182223632" className="w-full mt-2 bg-primary text-white px-6 py-3 rounded-lg md:rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20 active:scale-95 md:hidden">
                    <Phone size={16} fill="currentColor" /> Call Now
                  </a>
                </div>
                
                <div className="bg-white p-4 md:p-10 rounded-lg md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-emerald-50 text-secondary rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <h4 className="font-black text-slate-900 text-lg md:text-xl">WhatsApp</h4>
                  </div>
                  <div>
                    <a href="https://wa.me/918182223632" className="text-slate-500 text-sm md:text-lg font-bold hover:text-secondary transition-colors">Chat With Us</a>
                  </div>
                  <a href="https://wa.me/918182223632" className="w-full mt-2 bg-secondary text-white px-6 py-3 rounded-lg md:rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 md:hidden">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
                
                <div className="bg-white p-4 md:p-10 rounded-lg md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-purple-50 text-purple-600 rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <h4 className="font-black text-slate-900 text-lg md:text-xl">Email</h4>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm md:text-lg font-bold">info@guttimalnad.com</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 md:p-10 rounded-lg md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-amber-50 text-amber-600 rounded-lg md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <h4 className="font-black text-slate-900 text-lg md:text-xl">Visit Time</h4>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm md:text-lg font-bold uppercase tracking-wider">9 AM - 8 PM (OPD)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-12 rounded-lg md:rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col gap-4 md:gap-8">
              <h3 className="text-xl md:text-3xl font-black text-slate-900 hidden md:block">Our Location</h3>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex items-center gap-3 md:block md:w-16 md:h-16 md:bg-slate-50 md:text-slate-900 md:rounded-lg md:rounded-xl md:flex md:items-center md:justify-center shrink-0">
                  <div className="w-10 h-10 md:w-auto md:h-auto bg-slate-50 md:bg-transparent text-slate-900 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 md:hidden">Our Location</h3>
                </div>
                <div>
                  <p className="text-base md:text-2xl text-slate-900 font-black leading-tight mb-1 md:mb-2">
                    Shivamogga City Center
                  </p>
                  <p className="text-sm md:text-xl text-slate-500 leading-relaxed font-medium">
                    Kuvempu Road, Near Jail Circle<br />
                    Hosamane, Shivamogga – 577201
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[16px] border-white h-[600px] relative group border-slate-100">
              <iframe
                src="https://www.google.com/maps?q=13.938192,75.568989&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1) brightness(0.95)" }}
                allowFullScreen={true}
                loading="lazy"
                className="transition-all duration-700"
              ></iframe>
              <div className="absolute top-8 left-8 right-8">
                <div className="glass-card px-4 py-5 md:p-6 rounded-[2.5rem] flex items-center justify-between border-white/50 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg md:rounded-2xl flex items-center justify-center text-white">
                      <Send size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-none">Directions</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Open In Google Maps</p>
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
            <div className="grid grid-cols-2 gap-6">
               <motion.a 
                href="https://www.google.com/maps?q=13.938192,75.568989" 
                target="_blank"
                whileHover={{ y: -5 }}
                className="bg-slate-900 text-white py-6 rounded-[2rem] font-black text-center shadow-2xl shadow-slate-200"
               >
                 Get Directions
               </motion.a>
               <motion.a 
                href="tel:+918182223632" 
                whileHover={{ y: -5 }}
                className="bg-primary text-white py-6 rounded-[2rem] font-black text-center shadow-2xl shadow-blue-500/20"
               >
                 Call Hospital
               </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
