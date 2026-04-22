import Link from "next/link";
import { Phone, Mail, MapPin, Globe, MessageCircle, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-32 md:pb-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-secondary" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-primary rounded-lg md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-2xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-tight tracking-tight">Gutti Malnad</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-none">Hospital</span>
            </div>
          </Link>
          <p className="text-slate-400 leading-relaxed mb-8 font-medium">
            Providing premium healthcare services with human compassion and advanced technology in Shivamogga since 15+ years.
          </p>
          <div className="flex gap-4">
            {[Globe, MessageCircle, X].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black mb-8 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
          </h4>
          <ul className="list-none pl-0 space-y-2">
            {[
              { name: "About Us", href: "/about" },
              { name: "Our Doctors", href: "/doctors" },
              { name: "Departments", href: "/departments" },
              { name: "Lab Services", href: "/services" },
              { name: "Blogs", href: "/blogs" },
              { name: "Events", href: "/events" },
              { name: "Contact Us", href: "/contact" }
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-slate-400 hover:text-primary font-bold transition-colors inline-block">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-8 relative">
            Our Services
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
          </h4>
          <ul className="list-none pl-0 space-y-2">
            {[
              { name: "MRI Scan", href: "/services/mri" },
              { name: "CT Scan", href: "/services/ct-scan" },
              { name: "Digital X-Ray", href: "/services/digital-x-ray" },
              { name: "Blood Tests", href: "/services/blood-tests" },
              { name: "Ultrasound", href: "/services/ultrasound" }
            ].map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="text-slate-400 hover:text-primary font-bold transition-colors inline-block">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-8 relative">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
          </h4>
          <ul className="list-none pl-0 space-y-2">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <MapPin size={20} />
              </div>
              <span className="text-slate-400 font-medium">Kuvempu Road, Near Jail Circle, Shivamogga</span>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-secondary">
                <Phone size={20} fill="currentColor" />
              </div>
              <a href="tel:+919876543210" className="text-slate-200 font-black hover:text-primary transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-500">
                <Mail size={20} />
              </div>
              <span className="text-slate-400 font-medium break-all">info@guttimalnadhospital.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:gap-8">
          <p className="text-sm text-slate-500 font-bold">© {new Date().getFullYear()} Gutti Malnad Hospital. All rights reserved.</p>
          <p className="text-sm text-slate-600 font-medium">Developed by <span className="text-slate-400 font-bold">Vorabbit</span></p>
        </div>
        <div className="flex gap-4 md:gap-8">
          <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-primary font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
          <Link href="/terms-conditions" className="text-xs text-slate-500 hover:text-primary font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
