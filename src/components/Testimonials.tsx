"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500&auto=format&fit=crop",
      feedback: "The care I received at Gutti Malnad Hospital was exceptional. The doctors are highly skilled and the staff is very supportive.",
      rating: 5,
      date: "2 months ago",
    },
    {
      name: "Priyanka S.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500&auto=format&fit=crop",
      feedback: "Best hospital in Shivamogga for emergency care. They handled my father's case with great urgency and professionalism.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Suresh Hegde",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=500&auto=format&fit=crop",
      feedback: "Very clean facility and advanced diagnostics. I got my MRI results quickly and the consultation was very helpful.",
      rating: 4,
      date: "3 weeks ago",
    },
  ];

  return (
    <section className="py-6 md:py-12 md:py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-50 text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            Patient Stories
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">What Our Patients Say</h2>
          <p className="text-slate-500 text-lg font-medium">Real stories from people who trusted us with their health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 px-5 py-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 text-primary opacity-5 group-hover:opacity-10 transition-opacity" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <Star
                    key={star}
                    size={16}
                    className={star < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}
                  />
                ))}
              </div>
              
              <p className="text-slate-600 italic mb-6 md:mb-10 leading-relaxed font-medium relative z-10">"{t.feedback}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg md:rounded-2xl overflow-hidden border-2 border-white shadow-md relative shrink-0">
                  <Image 
                    src={t.image} 
                    alt="Hospital Environment" 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-tight">{t.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
