"use client";

import Footer from "@/components/Footer";
import { ChevronLeft, Calendar, User, Share2, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailUIProps {
  post: any;
}

export default function BlogDetailUI({ post }: BlogDetailUIProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || post.title,
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
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:items-start items-center text-center md:text-left">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all font-black text-sm mb-8 md:self-start w-fit group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight w-full">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-400 font-bold text-sm w-full">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              {post.author}
            </div>
            <div className="bg-white/10 text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest font-black">
              {post.category}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 px-4 max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-8 md:mb-16">
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-slate-400 font-bold text-sm">
            <span>Share this article:</span>
            <button 
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <Share2 size={18} />
            </button>
            <button 
              onClick={handlePrint}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <Printer size={18} />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="text-right">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Written by</p>
                <p className="font-black text-slate-900">{post.author}</p>
             </div>
             <div className="w-12 h-12 rounded-lg md:rounded-2xl bg-slate-100 overflow-hidden relative shrink-0">
                <Image src="https://i.pravatar.cc/100?img=11" alt={post.author} fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
