import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 pt-32 pb-24 px-4 text-center relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 relative z-10 tracking-tight">Privacy Policy</h1>
      </div>
      
      <div className="max-w-4xl mx-auto py-10 md:py-20 px-6 prose prose-slate prose-lg">
        <p className="text-slate-500 font-medium">Last updated: April 2026</p>
        
        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">1. Information We Collect</h2>
        <p className="text-slate-600 leading-relaxed">
          Gutti Malnad Hospital collects information to provide better services to all our patients. We collect information in the following ways:
          Information you give us. For example, when you book an appointment, we’ll ask for personal information, like your name, email address, telephone number or credit card to store with your account.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">2. How We Use Information</h2>
        <p className="text-slate-600 leading-relaxed">
          We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Gutti Malnad Hospital and our users.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">3. Information Security</h2>
        <p className="text-slate-600 leading-relaxed">
          We work hard to protect Gutti Malnad Hospital and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.
        </p>

        <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6">4. Medical Records</h2>
        <p className="text-slate-600 leading-relaxed">
          Your medical records are highly confidential and are only shared with authorized medical personnel involved in your treatment, or as required by law.
        </p>
      </div>
      <Footer />
    </div>
  );
}
