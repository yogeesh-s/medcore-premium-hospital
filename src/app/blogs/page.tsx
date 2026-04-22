import Footer from "@/components/Footer";
import { ShieldCheck, Newspaper, Clock, User, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Blogs | Gutti Malnad Hospital",
  description: "Stay updated with the latest health tips and news from Gutti Malnad Hospital.",
};

export default function BlogsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Health & Wellness
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Medical <span className="text-primary">Insights</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Expert medical advice and the latest healthcare news from our specialized doctors.
          </p>
        </div>
      </section>

      <section className="py-6 md:py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {blogPosts.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="px-5 py-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6 text-slate-400 font-bold text-xs">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {blog.date}
                  </div>
                  <div className="w-1 h-1 bg-slate-200 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <User size={14} />
                    {blog.author}
                  </div>
                </div>
                
                <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h2>
                
                <p className="text-slate-500 text-base mb-8 font-medium leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto pt-8 border-t border-slate-50">
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-black text-primary group/btn transition-all hover:gap-3"
                  >
                    Read Full Article <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
