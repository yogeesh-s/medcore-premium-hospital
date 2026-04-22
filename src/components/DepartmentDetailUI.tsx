"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone, MessageCircle, ChevronRight, CheckCircle2, Clock, ShieldCheck, ChevronLeft, Share2, Printer } from "lucide-react";
import Image from "next/image";

interface DepartmentDetailUIProps {
  department: any;
  allDepartments: any[];
}

export default function DepartmentDetailUI({ department, allDepartments }: DepartmentDetailUIProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: department.name,
          text: department.description || department.name,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:items-start items-center text-center md:text-left">
          <Link 
            href="/departments" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all font-black text-sm mb-8 md:self-start w-fit group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Specialties
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight w-full">
            {department.name}
          </h1>
          <p className="text-slate-400 max-w-2xl text-xl leading-relaxed font-medium mx-auto md:mx-0 w-full">
            {department.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-6 md:py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white px-5 py-8 md:p-10 md:px-6 py-10 md:p-16 rounded-[3.5rem] shadow-sm border border-slate-100 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] transition-all group-hover:w-40 group-hover:h-40" />
              
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-primary" size={32} />
                 Expert Medical Care
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6 md:mb-12 font-medium">
                {department.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="bg-slate-50 px-4 py-6 md:p-8 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="text-secondary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {department.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 px-4 py-6 md:p-8 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Clock className="text-primary" />
                    Timings & Visiting
                  </h3>
                  <ul className="space-y-4">
                    {department.whenToVisit.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 md:mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <span className="text-slate-500 font-bold text-sm">Share this department:</span>
                <div className="flex gap-4">
                  <button onClick={handleShare} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                    <Share2 size={18} />
                  </button>
                  <button onClick={handlePrint} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                    <Printer size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-primary px-6 py-8 md:p-12 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 shadow-2xl shadow-blue-500/20">
               <div>
                  <h3 className="text-3xl font-black mb-2 italic">Need immediate help?</h3>
                  <p className="text-blue-100 font-medium opacity-80 uppercase tracking-widest text-xs">Our emergency response team is available 24/7</p>
               </div>
               <a href="tel:+918182223632" className="bg-white text-primary px-18 md:px-10 py-5 rounded-[2rem] font-black text-xl flex items-center gap-3 active:scale-95 transition-all shadow-xl">
                  <Phone size={24} fill="currentColor" /> Call Us
               </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white px-5 py-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm border-slate-100">
              <h3 className="text-xl font-black text-slate-900 mb-8">Other Specialties</h3>
              <div className="space-y-3">
                {allDepartments.filter(d => d.slug !== department.slug).slice(0, 5).map((d, i) => (
                  <Link 
                    key={i} 
                    href={`/departments/${d.slug}`}
                    className="flex items-center justify-between p-5 rounded-lg md:rounded-2xl bg-slate-50 hover:bg-primary hover:text-white transition-all group font-black text-slate-600 text-sm"
                  >
                    {d.name}
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-white" />
                  </Link>
                ))}
              </div>
              <Link href="/departments" className="block text-center mt-8 text-sm font-black text-primary hover:opacity-80 transition-opacity uppercase tracking-widest">
                View All Departments
              </Link>
            </div>

            <div className="bg-slate-900 px-8 py-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Ready to book an appointment?</h3>
              <p className="text-slate-400 mb-6 md:mb-10 relative z-10 font-medium">Connect with our specialists instantly via WhatsApp.</p>
              <a
                href="https://wa.me/918182223632"
                className="flex items-center justify-center gap-3 bg-secondary hover:bg-emerald-600 text-white py-5 rounded-[2rem] font-black transition-all shadow-lg active:scale-95 relative z-10"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
