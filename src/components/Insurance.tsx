"use client";

import { motion } from "framer-motion";

export default function Insurance() {
  const providers = [
    { name: "Star Health", logo: "https://www.starhealth.in/sites/default/files/logo.png" },
    { name: "HDFC ERGO", logo: "https://www.hdfcergo.com/assets/images/logo.png" },
    { name: "ICICI Lombard", logo: "https://www.icicilombard.com/assets/images/logo.png" },
    { name: "Reliance General", logo: "https://www.reliancegeneral.co.in/Assets/Images/logo.png" },
    { name: "Bajaj Allianz", logo: "https://www.bajajallianz.com/etc.clientlibs/bajajallianz/clientlibs/clientlib-base/resources/images/logo.png" },
    { name: "TATA AIG", logo: "https://www.tataaig.com/assets/images/logo.png" },
  ];

  return (
    <section className="py-6 md:py-12 md:py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
        >
          Insurance & Cashless
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">We Accept Leading Insurance Providers</h2>
        <p className="text-slate-500 text-lg font-medium mb-8 md:mb-16 max-w-2xl mx-auto">We partner with trusted insurance providers for your convenience and hassle-free cashless treatments.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, filter: "grayscale(0%)", opacity: 1 }}
              className="bg-white px-4 py-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-center h-32 opacity-60 grayscale transition-all duration-500 cursor-pointer group"
            >
              <div className="font-black text-slate-400 group-hover:text-primary transition-colors text-center leading-tight">
                {provider.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 inline-flex items-center gap-3 bg-white px-4 md:px-8 py-4 rounded-lg md:rounded-2xl shadow-sm border border-slate-100"
        >
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <p className="text-sm font-bold text-slate-600">All TPA & Private Insurance Accepted</p>
        </motion.div>
      </div>
    </section>
  );
}
