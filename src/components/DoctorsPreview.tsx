"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DoctorsPreview() {
  const doctors = [
    {
      name: "Dr. Sandesh Gutti",
      specialty: "Chief Medical Officer",
      qualification: "MBBS, MD (General Medicine)",
      experience: "15+ Years",
      image: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "Dr. Ananya Rao",
      specialty: "Senior Gynecologist",
      qualification: "MBBS, MS (OBG)",
      experience: "12+ Years",
      image: "https://i.pravatar.cc/300?img=26",
    },
    {
      name: "Dr. Kiran Kumar",
      specialty: "Orthopedic Surgeon",
      qualification: "MBBS, MS (Ortho)",
      experience: "10+ Years",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Dr. Meena Hegde",
      specialty: "Pediatrician",
      qualification: "MBBS, DCH",
      experience: "8+ Years",
      image: "https://i.pravatar.cc/300?img=20",
    },
    {
      name: "Dr. Rajesh Gowda",
      specialty: "General Surgeon",
      qualification: "MBBS, MS (Surgery)",
      experience: "14+ Years",
      image: "https://i.pravatar.cc/300?img=60",
    },
  ];

  return (
    <section className="py-6 md:py-12 md:py-24 px-4 bg-white overflow-hidden" id="doctors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
            >
              Our Experts
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
            >
              Consult With Our <br />
              <span className="text-primary underline decoration-blue-100 underline-offset-8">Specialists</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/doctors" className="group bg-slate-900 text-white px-4 md:px-8 py-4 rounded-[2rem] font-black flex items-center gap-3 hover:bg-primary transition-all shadow-xl shadow-slate-200">
              View All Team
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-lg md:rounded-2xl flex items-center gap-2">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-black text-slate-900">{doctor.experience}</span>
                </div>
              </div>
              
              <div className="px-4 py-6 md:p-8">
                <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-3">{doctor.specialty}</p>
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">{doctor.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={18} className="text-slate-400 shrink-0 mt-1" />
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{doctor.qualification}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
