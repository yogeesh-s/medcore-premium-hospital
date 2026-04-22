"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (Math.abs(currentScrollY - lastScrollY) > 20) {
        setIsOpen(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Departments", href: "/departments" },
    { name: "Doctors", href: "/doctors" },
    { name: "Blogs", href: "/blogs" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
        scrolled || isOpen ? "py-2 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className={`relative flex flex-col px-4 md:px-6 transition-all duration-500 rounded-lg md:rounded-[2rem] border border-transparent overflow-hidden ${
            scrolled || isOpen
              ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-white/50 py-2.5 md:py-3" 
              : "bg-white/60 backdrop-blur-md border-white/30 py-2.5 md:py-3"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-lg md:text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base md:text-xl text-slate-900 leading-tight tracking-tight">
                  Gutti Malnad
                </span>
                <span className="text-[9px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] leading-none">
                  Hospital
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-all relative group ${
                    isActive(link.href) 
                      ? "text-primary font-black" 
                      : "text-slate-600 font-bold hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all rounded-full ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
              <div className="flex items-center gap-3 ml-4">
                <a
                  href="tel:+918182223632"
                  className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  <Phone size={16} fill="currentColor" />
                  Emergency
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden flex flex-col"
              >
                <div className="flex flex-col gap-1 pt-2 pb-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-sm font-black flex items-center justify-between group px-3 py-1.5 rounded-md transition-colors ${
                          isActive(link.href) ? "bg-primary/5 text-primary" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
}
