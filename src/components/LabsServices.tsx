"use client";

import { motion } from "framer-motion";
import { Microscope, Activity, Droplets, Scan, Zap, Thermometer, ArrowRight } from "lucide-react";
import Link from "next/link";

import { servicesData } from "@/data/services";

interface LabsServicesProps {
  showIntro?: boolean;
}

export default function LabsServices({ showIntro = true }: LabsServicesProps) {
  return (
    <section className="py-6 md:py-12 md:py-24 px-4 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto">
        {showIntro && (
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4"
            >
              Diagnostics
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg max-w-2xl mx-auto font-medium"
            >
              Equipped with the latest medical technology, our diagnostic center ensures accurate and timely results for effective treatment.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {servicesData.map((service, index) => {
            const getIcon = (iconName: string) => {
              switch(iconName) {
                case 'Scan': return <Scan className="text-blue-600" />;
                case 'Zap': return <Zap className="text-emerald-600" />;
                case 'Activity': return <Activity className="text-purple-600" />;
                case 'Droplets': return <Droplets className="text-red-600" />;
                case 'Microscope': return <Microscope className="text-amber-600" />;
                case 'Thermometer': return <Thermometer className="text-cyan-600" />;
                default: return <Activity className="text-blue-600" />;
              }
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white px-4 py-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-slate-50 text-slate-700 rounded-lg md:rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shadow-slate-200/50">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium">{service.description}</p>
                
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-black text-primary group/btn transition-all hover:gap-3"
                >
                  View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
