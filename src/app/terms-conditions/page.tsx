import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 pt-32 pb-24 px-4 text-center relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 relative z-10 tracking-tight">Terms & Conditions</h1>
      </div>
      
      <div className="max-w-4xl mx-auto py-10 md:py-20 px-6 prose prose-slate prose-lg">
        <p className="text-slate-500 font-medium">Last updated: April 2026</p>
        
        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">1. Acceptance of Terms</h2>
        <p className="text-slate-600 leading-relaxed">
          By accessing and using the services of Gutti Malnad Hospital, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">2. Medical Advice Disclaimer</h2>
        <p className="text-slate-600 leading-relaxed">
          The content on this website is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">3. Appointments and Cancellations</h2>
        <p className="text-slate-600 leading-relaxed">
          While we strive to adhere to scheduled appointment times, medical emergencies may sometimes cause delays. We appreciate your patience. Please provide at least 24 hours' notice for cancellations when possible.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">4. Payment Terms</h2>
        <p className="text-slate-600 leading-relaxed">
          Payment for services is required at the time of service unless other arrangements have been made (e.g., insurance coverage). We accept various payment methods for your convenience.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">5. Limitation of Liability</h2>
        <p className="text-slate-600 leading-relaxed">
          Gutti Malnad Hospital shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our website or services.
        </p>
      </div>
      <Footer />
    </div>
  );
}
