import Footer from "@/components/Footer";
import Departments from "@/components/Departments";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Departments | Gutti Malnad Hospital",
  description: "Specialized care in General Medicine, Gynecology, Pediatrics, Orthopedics, and more in Shivamogga.",
};

export default function DepartmentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Our Specialties
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Specialized <span className="text-primary">Departments</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            We offer a wide range of specialized medical services to provide holistic care for our patients.
          </p>
        </div>
      </section>


      <Departments showIntro={false} />
      
      <div className="bg-white py-10 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Why choose our specialists?</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Our departments are led by some of the most experienced doctors in Shivamogga, supported by advanced technology and a compassionate nursing staff.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 px-4 py-6 md:p-8 rounded-lg md:rounded-3xl">
              <h4 className="font-black text-slate-900 mb-2">Modern Technology</h4>
              <p className="text-sm text-slate-500">Equipped with the latest medical equipment for accurate diagnosis.</p>
            </div>
            <div className="bg-slate-50 px-4 py-6 md:p-8 rounded-lg md:rounded-3xl">
              <h4 className="font-black text-slate-900 mb-2">Patient Care</h4>
              <p className="text-sm text-slate-500">Focused on providing a comfortable and healing environment.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
