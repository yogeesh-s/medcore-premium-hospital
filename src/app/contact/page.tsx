import Footer from "@/components/Footer";
import ContactPageUI from "@/components/ContactPageUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Gutti Malnad Hospital",
  description: "Get in touch with Gutti Malnad Hospital in Shivamogga. 24/7 Emergency care, appointments, and location details.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <ContactPageUI />
      <Footer />
    </div>
  );
}
