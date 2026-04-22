import Footer from "@/components/Footer";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Gutti Malnad Hospital",
  description: "Learn more about Gutti Malnad Hospital, our mission, vision, and commitment to providing world-class healthcare in Shivamogga.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-12 md:pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Committed to delivering accessible, high-quality healthcare with compassion and excellence since our inception.
          </p>
        </div>
      </section>

      <About />
      <Stats />
      
      <Footer />
    </div>
  );
}
