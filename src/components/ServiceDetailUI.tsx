"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone, MessageCircle, ChevronRight, CheckCircle2, Info, ShieldCheck, ChevronLeft, Share2, Printer } from "lucide-react";
import Image from "next/image";

interface ServiceDetailUIProps {
  service: any;
  allServices: any[];
}

export default function ServiceDetailUI({ service, allServices }: ServiceDetailUIProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: service.title,
          text: service.description || service.title,
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
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:items-start items-center text-center md:text-left">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all font-black text-sm mb-8 md:self-start w-fit group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight w-full">
            {service.title}
          </h1>
          <p className="text-slate-400 max-w-2xl text-xl leading-relaxed font-medium mx-auto md:mx-0 w-full">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-6 md:py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white px-5 py-8 md:p-10 md:px-6 py-10 md:p-16 rounded-[3.5rem] shadow-sm border border-slate-100 relative overflow-hidden group border-slate-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem] transition-all group-hover:w-40 group-hover:h-40" />
              
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-secondary" size={32} />
                 Precision Diagnostics
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6 md:mb-12 font-medium">
                {service.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="bg-slate-50 px-4 py-6 md:p-8 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="text-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 px-4 py-6 md:p-8 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Info className="text-secondary" />
                    When to use
                  </h3>
                  <ul className="space-y-4">
                    {service.whenToUse.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 px-6 py-8 md:p-12 rounded-[3.5rem] border border-emerald-100 border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-emerald-900 mb-4">Preparation for {service.title}</h3>
              <p className="text-emerald-700 font-medium leading-relaxed">
                Most diagnostic tests require some level of preparation. Our staff will provide specific instructions when you book your appointment. In general, please bring any previous reports and a valid doctor's prescription.
              </p>

              <div className="mt-8 pt-8 border-t border-emerald-200/50 flex flex-wrap items-center justify-between gap-4">
                <span className="text-emerald-800 font-bold text-sm">Share this service:</span>
                <div className="flex gap-4">
                  <button onClick={handleShare} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                    <Share2 size={18} />
                  </button>
                  <button onClick={handlePrint} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                    <Printer size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 px-5 py-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-6 relative z-10 text-balance leading-tight">Book Your Scan Today</h3>
              <p className="text-slate-400 mb-6 md:mb-10 relative z-10 font-medium">Get accurate results with our advanced diagnostic technology.</p>
              <div className="space-y-4 relative z-10">
                <a
                  href="tel:+918182223632"
                  className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white py-5 rounded-[2rem] font-black transition-all shadow-lg active:scale-95"
                >
                  <Phone size={20} fill="currentColor" /> Call for Booking
                </a>
                <a
                  href="https://wa.me/918182223632"
                  className="flex items-center justify-center gap-3 bg-secondary hover:bg-emerald-600 text-white py-5 rounded-[2rem] font-black transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-white px-5 py-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm border-slate-100">
              <h3 className="text-xl font-black text-slate-900 mb-8">All Lab Services</h3>
              <div className="space-y-3">
                {allServices.filter(s => s.slug !== service.slug).map((s, i) => (
                  <Link 
                    key={i} 
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between p-5 rounded-lg md:rounded-2xl bg-slate-50 hover:bg-primary hover:text-white transition-all group font-black text-slate-600 text-sm"
                  >
                    {s.title}
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
