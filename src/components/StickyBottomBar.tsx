"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm md:hidden">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="bg-white/80 backdrop-blur-2xl p-2.5 flex items-center justify-between gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 rounded-[2.5rem]"
          >
            <motion.a
              href="tel:+919876543210"
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-primary text-white py-4 px-4 rounded-[2rem] flex items-center justify-center gap-2 font-black text-sm shadow-lg shadow-blue-500/30 active:bg-primary-dark transition-all"
            >
              <Phone size={18} fill="currentColor" />
              Emergency
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-secondary text-white py-4 px-4 rounded-[2rem] flex items-center justify-center gap-2 font-black text-sm shadow-lg shadow-emerald-500/30 active:bg-emerald-600 transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
