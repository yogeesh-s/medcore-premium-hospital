import Footer from "@/components/Footer";
import DoctorsPageUI from "@/components/DoctorsPageUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors | Gutti Malnad Hospital",
  description: "Meet our expert specialists at Gutti Malnad Hospital, Shivamogga. Experienced physicians dedicated to your health.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <DoctorsPageUI />
      <Footer />
    </div>
  );
}
