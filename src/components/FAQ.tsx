"use client";

import { motion } from "framer-motion";
import Accordion from "./ui/Accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "What are the hospital timings?",
      answer: "Our hospital is open 24/7 for emergency services. The Outpatient Department (OPD) functions from 9:00 AM to 8:00 PM, Monday through Saturday."
    },
    {
      question: "Is emergency care available 24/7?",
      answer: "Yes, our emergency and trauma care department is fully functional 24 hours a day, 7 days a week, with specialist doctors and advanced life support available at all times."
    },
    {
      question: "Do you accept health insurance and cashless facilities?",
      answer: "We accept all major health insurance providers and offer cashless treatment facilities for eligible patients. Please check with our insurance desk for the complete list of empanelled TPA partners."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us directly at +91 81822 23632 or through WhatsApp. We also offer walk-in consultations, though booking in advance is recommended to reduce waiting time."
    },
    {
      question: "Are diagnostic services like MRI and CT scans available?",
      answer: "Yes, Gutti Malnad Hospital is equipped with state-of-the-art diagnostic facilities including 1.5 Tesla MRI, 128-slice CT Scan, Ultrasound, and a fully automated clinical laboratory."
    }
  ];

  return (
    <section className="py-6 md:py-12 md:py-24 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            Support Center
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg font-medium">Quick answers to common questions about our hospital and services.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
