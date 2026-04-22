"use client";

import Footer from "@/components/Footer";
import { ChevronLeft, Calendar, MapPin, Clock, ShieldCheck, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventsDetailUIProps {
  event: any;
}

export default function EventsDetailUI({ event }: EventsDetailUIProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: event.desc || event.title,
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

  const todayStr = new Date().toISOString().split('T')[0];
  let status = "Upcoming";
  let statusColor = "bg-primary text-white";
  let showRegister = true;

  if (event.date === todayStr) {
    status = "Happening Today";
    statusColor = "bg-amber-500 text-white";
    showRegister = false;
  } else if (event.date < todayStr) {
    status = "Completed";
    statusColor = "bg-slate-200 text-slate-500";
    showRegister = false;
  }

  const d = new Date(event.date);
  const formattedDate = d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:items-start items-center text-center md:text-left">
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all font-black text-sm mb-8 md:self-start w-fit group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Events
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight w-full">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-400 font-bold text-sm w-full">
             <div className="bg-white/10 text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest font-black">
              {event.category}
            </div>
             <div className={`px-4 py-1 rounded-full text-xs uppercase tracking-widest font-black ${statusColor}`}>
              {status}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="relative aspect-video rounded-lg md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={event.image} 
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white px-5 py-8 md:p-10 lg:p-16 rounded-lg md:rounded-[3.5rem] shadow-sm border border-slate-100">
               <h2 className="text-3xl font-black text-slate-900 mb-6">About the Event</h2>
               <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {event.desc}
               </p>
               <p className="mt-6 text-slate-600 text-lg leading-relaxed font-medium">
                  This initiative by Gutti Malnad Hospital aims to bring specialized healthcare closer to the community. Join us for a day of learning, health check-ups, and expert consultations.
               </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white px-5 py-8 md:p-10 rounded-lg md:rounded-[3rem] border border-slate-100 shadow-sm">
               <h3 className="text-xl font-black text-slate-900 mb-8">Event Details</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-slate-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <Calendar size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Date</p>
                        <p className="text-slate-900 font-black">{formattedDate}</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-slate-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <Clock size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Time</p>
                        <p className="text-slate-900 font-black">{event.time}</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-slate-50 rounded-lg md:rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                        <p className="text-slate-900 font-black">{event.location}</p>
                     </div>
                  </div>
               </div>
               
               {showRegister ? (
                 <a href="tel:+919876543210" className="w-full mt-6 md:mt-10 bg-primary text-white py-4 md:py-5 rounded-lg md:rounded-[2rem] font-black shadow-lg shadow-blue-500/20 active:scale-95 transition-all text-center block">
                    Register Now
                 </a>
               ) : (
                 <div className="w-full mt-10 bg-slate-50 text-slate-400 py-5 rounded-lg md:rounded-[2rem] font-black text-center border border-slate-100">
                    Registration Closed
                 </div>
               )}
            </div>

            <div className="bg-slate-900 px-5 py-8 md:p-10 rounded-lg md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Help us spread the word</h3>
              <p className="text-slate-400 mb-6 md:mb-10 relative z-10 font-medium">Share this event with your friends and family.</p>
              <button 
                onClick={handleShare}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white w-full py-5 rounded-lg md:rounded-[2rem] font-black transition-all relative z-10"
              >
                <Share2 size={20} /> Share Event
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
