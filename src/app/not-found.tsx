"use client";

import Link from "next/link";
import { Phone, MessageCircle, Home, AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4 selection:bg-primary/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-32 h-32 bg-white text-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-12 shadow-2xl shadow-primary/10 border border-slate-100"
        >
          <AlertCircle size={64} strokeWidth={1.5} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-[10rem] md:text-[14rem] font-black text-slate-900 mb-0 tracking-tighter leading-none opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative">
            Oops! Page not found
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-6 md:mb-12 leading-relaxed max-w-xl mx-auto relative">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
            <Link 
              href="/"
              className="inline-flex items-center gap-1 text-slate-900 hover:opacity-70 transition-opacity font-black text-sm md:text-base group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <a
                href="tel:+918182223632"
                className="flex-1 bg-white text-slate-900 px-4 md:px-8 py-5 rounded-[2rem] font-black flex items-center gap-3 border border-slate-200 shadow-sm hover:bg-slate-50 transition-all active:scale-95 justify-center"
              >
                <Phone size={20} className="text-primary" />
                Call
              </a>
              <a
                href="https://wa.me/918182223632"
                className="flex-1 bg-secondary text-white px-4 md:px-8 py-5 rounded-[2rem] font-black flex items-center gap-3 shadow-lg shadow-secondary/20 hover:bg-emerald-600 transition-all active:scale-95 justify-center"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Minimal Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-8 border-t border-slate-200/60 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-primary/20">G</div>
            <span className="font-black text-slate-900 tracking-tight">Gutti Malnad Hospital</span>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Healthcare Excellence since 2011</p>
        </motion.div>
      </div>
    </div>
  );
}
