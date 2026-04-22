import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyBottomBar from "@/components/StickyBottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://guttimalnadhospital.com"),
  title: {
    default: "Gutti Malnad Hospital | Advanced Care in Shivamogga",
    template: "%s | Gutti Malnad Hospital"
  },
  description: "24/7 Emergency Care, Trusted Doctors, and Affordable Healthcare in Shivamogga. Advanced MRI, CT Scan, and Multi-specialty care.",
  keywords: ["Hospital Shivamogga", "Emergency Care Shivamogga", "Gutti Malnad Hospital", "Best Doctors Shivamogga", "MRI Scan Shivamogga"],
  authors: [{ name: "Gutti Malnad Hospital" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://guttimalnadhospital.com",
    siteName: "Gutti Malnad Hospital",
    title: "Gutti Malnad Hospital | Advanced Care in Shivamogga",
    description: "Providing premium healthcare services with human compassion and advanced technology in Shivamogga.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gutti Malnad Hospital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutti Malnad Hospital | Advanced Care in Shivamogga",
    description: "24/7 Emergency Care and Trusted Specialists in Shivamogga."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <StickyBottomBar />
      </body>
    </html>
  );
}
