"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-40 px-4">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-20 -left-20 -z-10 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-primary px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-8 border border-blue-100 shadow-sm"
          >
            <ShieldCheck size={16} className="text-primary" />
            Certified Medical Excellence
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 text-balance">
            Premium Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              For Your Family.
            </span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-6 md:mb-10 max-w-xl leading-relaxed font-medium">
            Providing 24/7 emergency care and specialized medical treatments in Shivamogga with compassion, advanced technology, and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a
              href="tel:+918182223632"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-4 md:px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/25 hover:bg-primary-dark transition-all text-lg group"
            >
              <Phone size={22} fill="currentColor" />
              Emergency Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://wa.me/918182223632"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-secondary border-2 border-slate-100 px-4 md:px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-lg shadow-xl shadow-slate-200/50"
            >
              <MessageCircle size={22} />
              WhatsApp
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-4 md:gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-lg shadow-slate-200 relative">
                  <Image 
                    src={`https://i.pravatar.cc/100?img=${i+20}`} 
                    alt="doctor" 
                    fill
                    className="object-cover" 
                  />
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white text-xs font-black shadow-lg shadow-blue-500/20 z-10 relative">
                25+
              </div>
            </div>
            <div>
              <p className="text-lg font-black text-slate-900 leading-none">Expert Doctors</p>
              <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wider">Available 24/7</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block overflow-hidden"
        >
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white aspect-[4/5] xl:aspect-square">
            <Image 
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80" 
              alt="Premium Medical Care at Gutti Malnad Hospital"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Floating High-Trust Badges */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 md:top-6 right-4 md:right-6 z-20 glass-card px-4 py-5 md:p-6 rounded-[2.5rem] flex items-center gap-4 shadow-2xl border-white/50 max-w-fit w-auto"
          >
            <div className="w-14 h-14 bg-red-500 rounded-lg md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/40 shrink-0">
              <Clock size={28} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Response</p>
              <p className="text-xl font-black text-slate-900">24/7 Express</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 glass-card px-4 py-5 md:p-6 rounded-[2.5rem] flex items-center gap-4 shadow-2xl border-white/50 max-w-fit w-auto"
          >
            <div className="w-14 h-14 bg-primary rounded-lg md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/40 shrink-0">
              <Award size={28} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Trusted by</p>
              <p className="text-xl font-black text-slate-900">15k+ Patients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
