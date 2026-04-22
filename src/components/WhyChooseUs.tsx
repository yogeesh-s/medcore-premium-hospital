"use client";

import { motion } from "framer-motion";
import { Clock, Users, IndianRupee, Zap, Heart, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "24/7 Emergency",
      desc: "Round-the-clock medical assistance for critical and life-saving situations.",
      icon: <Clock className="text-red-500" size={32} />,
      color: "red",
    },
    {
      title: "Expert Doctors",
      desc: "Our team includes highly experienced and board-certified medical specialists.",
      icon: <Users className="text-blue-500" size={32} />,
      color: "blue",
    },
    {
      title: "Affordable Care",
      desc: "We provide premium quality healthcare services at accessible prices for all.",
      icon: <IndianRupee className="text-emerald-500" size={32} />,
      color: "emerald",
    },
    {
      title: "Modern Tech",
      desc: "Equipped with state-of-the-art diagnostic and surgical equipment.",
      icon: <Zap className="text-amber-500" size={32} />,
      color: "amber",
    },
    {
      title: "Patient Comfort",
      desc: "Designed to provide a healing environment with focus on patient well-being.",
      icon: <Heart className="text-rose-500" size={32} />,
      color: "rose",
    },
    {
      title: "Safe & Trusted",
      desc: "Maintaining the highest standards of safety, hygiene, and medical ethics.",
      icon: <ShieldCheck className="text-indigo-500" size={32} />,
      color: "indigo",
    },
  ];

  return (
    <section className="py-6 md:py-12 md:py-24 px-4 bg-slate-900 text-white overflow-hidden relative" id="why-us">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-80 -mt-80 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] -ml-80 -mb-80 opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 text-blue-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/10"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            The Trust of <span className="text-primary">Gutti Malnad</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We combine world-class medical expertise with human compassion to deliver an unmatched healthcare experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-8 md:p-10 rounded-[3rem] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 bg-white/5 rounded-lg md:rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 border border-white/10`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
