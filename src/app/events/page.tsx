import Footer from "@/components/Footer";
import { ShieldCheck, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { hospitalEvents } from "@/data/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Events | Gutti Malnad Hospital",
  description: "Stay updated with health camps, workshops, and community events at Gutti Malnad Hospital.",
};

export default function EventsPage() {
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-12 md:pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Hospital Calendar
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Events & <span className="text-secondary">Health Programs</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Explore our upcoming and past health initiatives.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-12">
          {hospitalEvents.map((event, i) => {
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
            const month = d.toLocaleString('en-US', { month: 'short' });
            const day = d.getDate().toString().padStart(2, '0');

            return (
              <div
                key={i}
                className="bg-white rounded-lg md:rounded-lg md:rounded-2xl lg:rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative min-h-[250px] md:min-h-[300px]">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2 items-start">
                      <span className="bg-white/90 backdrop-blur-md text-primary px-3 md:px-5 py-1 md:py-2 rounded-lg md:rounded-lg md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl">
                        {event.category}
                      </span>
                      <span className={`px-3 md:px-5 py-1 md:py-2 rounded-lg md:rounded-lg md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl ${statusColor}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 px-5 py-8 md:p-10 lg:px-6 py-10 md:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="bg-slate-900 text-white p-3 md:p-4 rounded-lg md:rounded-lg md:rounded-2xl text-center min-w-[70px] md:min-w-[80px]">
                        <span className="block text-xl md:text-2xl font-black leading-none">{day}</span>
                        <span className="block text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{month}</span>
                      </div>
                      <div className="h-10 w-px bg-slate-100 hidden sm:block" />
                      <div className="space-y-1">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                          {event.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-slate-500 text-base md:text-lg mb-6 md:mb-10 font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                      {event.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 md:gap-8 mb-6 md:mb-10">
                      <div className="flex items-center gap-2 md:gap-3 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                        <Clock size={16} className="text-primary shrink-0" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                        <MapPin size={16} className="text-primary shrink-0" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-slate-50">
                      {showRegister ? (
                        <a href="tel:+919876543210" className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-2xl font-black text-xs md:text-sm hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-blue-500/20 text-center">
                          Register Now
                        </a>
                      ) : (
                        <div className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest px-4 py-2 bg-slate-50 rounded-lg md:rounded-lg md:rounded-2xl">
                          Registration Closed
                        </div>
                      )}
                      
                      <Link 
                        href={`/events/${event.slug}`}
                        className="flex items-center gap-2 text-primary font-black text-xs md:text-sm group/btn transition-all hover:gap-3"
                      >
                        View Details <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform md:w-[18px] md:h-[18px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
