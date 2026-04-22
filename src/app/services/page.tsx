import Footer from "@/components/Footer";
import LabsServices from "@/components/LabsServices";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Services | Gutti Malnad Hospital",
  description: "Advanced MRI, CT Scan, Ultrasound, and Laboratory services in Shivamogga.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Diagnostic Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Equipped with state-of-the-art diagnostic technology to provide accurate and timely medical results.
          </p>
        </div>
      </section>

      <LabsServices showIntro={false} />
      
      <div className="bg-white py-10 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900">24/7 Availability</h3>
            <p className="text-slate-500 font-medium">Most of our diagnostic services are available round the clock for emergencies.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900">Expert Radiologists</h3>
            <p className="text-slate-500 font-medium">Reports are verified by highly experienced radiologist and pathologists.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900">Digital Reports</h3>
            <p className="text-slate-500 font-medium">Access your reports digitally for convenience and quick consultation.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
