"use client";

import { motion, useInView } from "framer-motion";
import { Users, Calendar, Award, Activity } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    {
      label: "Patients Served",
      value: 50,
      suffix: "K+",
      icon: <Users className="text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      label: "Years Experience",
      value: 15,
      suffix: "+",
      icon: <Calendar className="text-emerald-600" />,
      bg: "bg-emerald-50",
    },
    {
      label: "Specialist Doctors",
      value: 25,
      suffix: "+",
      icon: <Award className="text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      label: "Successful Surgeries",
      value: 10,
      suffix: "K+",
      icon: <Activity className="text-red-600" />,
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="px-4 py-6 md:py-12 md:py-10 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white px-4 py-5 md:p-6 md:px-4 py-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 ${stat.bg} rounded-lg md:rounded-2xl flex items-center justify-center mb-2`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black text-slate-900">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base font-semibold text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
