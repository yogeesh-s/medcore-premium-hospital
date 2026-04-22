"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  Bone, 
  Heart, 
  Zap,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

import { departmentsData } from "@/data/departments";

interface DepartmentsProps {
  showIntro?: boolean;
}

export default function Departments({ showIntro = true }: DepartmentsProps) {
  return (
    <section className="py-6 md:py-12 md:py-24 px-4 relative overflow-hidden" id="departments">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {showIntro && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm"
              >
                <ShieldCheck size={14} className="text-primary" />
                Our Specialties
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
              >
                Specialized Care <br />
                <span className="text-primary underline decoration-blue-100 underline-offset-8">For Every Need</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-slate-500 text-lg max-w-sm mb-6 font-medium">
                Equipped with modern technology and expert specialists to provide the best healthcare services.
              </p>
              <Link href="/departments" className="text-primary font-black flex items-center gap-2 group hover:gap-3 transition-all">
                View All Departments
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {departmentsData.map((dept, index) => {
            const getIcon = (slug: string) => {
              switch(slug) {
                case 'general-medicine': return <Stethoscope size={32} />;
                case 'gynecology': return <Heart size={32} />;
                case 'pediatrics': return <Baby size={32} />;
                case 'orthopedics': return <Bone size={32} />;
                case 'emergency': return <Activity size={32} />;
                case 'general-surgery': return <Zap size={32} />;
                default: return <Stethoscope size={32} />;
              }
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white px-5 py-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-slate-50 text-slate-700 rounded-[2rem] flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shadow-slate-200/50">
                  {getIcon(dept.slug)}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">{dept.name}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 md:mb-10 relative z-10 group-hover:text-slate-600 transition-colors font-medium line-clamp-2">
                  {dept.description}
                </p>
                
                <Link 
                  href={`/departments/${dept.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-black text-primary relative z-10 group/btn transition-all hover:gap-3"
                >
                  Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
