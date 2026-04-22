import { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Departments from "@/components/Departments";
import WhyChooseUs from "@/components/WhyChooseUs";
import LabsServices from "@/components/LabsServices";
import DoctorsPreview from "@/components/DoctorsPreview";
import Testimonials from "@/components/Testimonials";
import Insurance from "@/components/Insurance";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gutti Malnad Hospital | Best Multi-Specialty Hospital in Shivamogga",
  description: "Experience world-class healthcare at Gutti Malnad Hospital. 24/7 emergency care, expert doctors, and advanced diagnostics in Shivamogga.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Departments />
      <WhyChooseUs />
      <LabsServices />
      <DoctorsPreview />
      <Testimonials />
      <Insurance />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
