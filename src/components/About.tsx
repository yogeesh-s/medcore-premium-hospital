"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Award, Shield } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    {
      title: "Multi-Specialty Care",
      desc: "Comprehensive treatment across all major medical departments.",
      icon: <Heart className="text-red-500" />,
    },
    {
      title: "Expert Specialists",
      desc: "Dedicated team of highly qualified and experienced doctors.",
      icon: <Award className="text-amber-500" />,
    },
    {
      title: "Patient-First Approach",
      desc: "Compassionate care tailored to individual patient needs.",
      icon: <Shield className="text-blue-500" />,
    },
  ];

  return (
    <section className="py-6 md:py-12 md:py-24 px-4 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop"
                alt="Hospital Care at Gutti Malnad"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 glass-card px-4 py-6 md:p-8 rounded-[2.5rem] shadow-2xl border-white/50 hidden md:block">
              <p className="text-5xl font-black text-primary leading-none">
                15+
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">
                Years of Excellence
              </p>
            </div>

            {/* Background Blob */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] -z-10 opacity-60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <CheckCircle2 size={14} />
              About Our Hospital
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Serving Shivamogga with <br />
              <span className="text-primary underline decoration-blue-100 underline-offset-8">
                Care & Excellence
              </span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-6 md:mb-10 font-medium">
              Gutti Malnad Hospital is a premier healthcare institution in
              Shivamogga, committed to providing accessible and high-quality
              medical services. We combine advanced technology with human
              compassion to ensure the best outcomes for our patients.
            </p>

            <div className="space-y-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg md:rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-50 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <p className="text-2xl font-black text-slate-900">Dr. Harish</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Chief Medical Officer
                </p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <Image
                src="/sign.png"
                alt="Signature"
                width={100}
                height={40}
                className="h-10 w-auto opacity-40 grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
