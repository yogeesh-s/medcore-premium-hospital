"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, GraduationCap, Briefcase, Award } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sandesh Gutti",
    specialty: "Chief Medical Officer",
    qualifications: "MBBS, MD (General Medicine)",
    experience: "15+ Years",
    specialization: "Internal Medicine & Critical Care",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Dr. Ananya Rao",
    specialty: "Senior Gynecologist",
    qualifications: "MBBS, MS (OBG)",
    experience: "12+ Years",
    specialization: "High-Risk Pregnancy & Laparoscopy",
    image: "https://i.pravatar.cc/300?img=26",
  },
  {
    name: "Dr. Kiran Kumar",
    specialty: "Orthopedic Surgeon",
    qualifications: "MBBS, MS (Ortho)",
    experience: "10+ Years",
    specialization: "Joint Replacement & Sports Medicine",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Dr. Meena Hegde",
    specialty: "Pediatrician",
    qualifications: "MBBS, DCH",
    experience: "8+ Years",
    specialization: "Neonatology & Child Nutrition",
    image: "https://i.pravatar.cc/300?img=20",
  },
  {
    name: "Dr. Rajesh Gowda",
    specialty: "General Surgeon",
    qualifications: "MBBS, MS (Surgery)",
    experience: "14+ Years",
    specialization: "Advanced Laparoscopic Surgery",
    image: "https://i.pravatar.cc/300?img=60",
  },
  {
    name: "Dr. Smitha Patil",
    specialty: "Anesthesiologist",
    qualifications: "MBBS, DA",
    experience: "9+ Years",
    specialization: "Pain Management & Critical Care",
    image: "https://i.pravatar.cc/300?img=32",
  },
];

export default function DoctorsPageUI() {
  return (
    <>
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm"
          >
            <ShieldCheck size={14} className="text-primary" />
            Our Expert Team
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Meet Our <span className="text-primary">Specialists</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium"
          >
            A dedicated team of highly qualified medical professionals committed to providing excellence in patient care.
          </motion.p>
        </div>
      </section>

      <section className="py-6 md:py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-lg md:rounded-2xl flex items-center gap-2">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-black text-slate-900">{doctor.experience}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              </div>
              <div className="px-5 py-8 md:p-10 flex-1 flex flex-col">
                <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-3">{doctor.specialty}</p>
                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">{doctor.name}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <GraduationCap size={20} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Qualification</p>
                      <p className="text-slate-700 font-bold leading-snug">{doctor.qualifications}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <Award size={20} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Specialization</p>
                      <p className="text-slate-700 font-bold leading-snug">{doctor.specialization}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                      <p className="text-slate-700 font-bold leading-snug">{doctor.experience} in Hospital Care</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Available for Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
