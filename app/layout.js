import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "IG Electromech Technical Services LLC | Electromechanical Solutions UAE",
  description:
    "IG Electromech Technical Services LLC delivers expert electromechanical solutions in UAE. Specializing in HVAC, Electrical, Plumbing, Panels, and MEP services.",
  keywords:
    "electromechanical services UAE, MEP contractors Dubai, HVAC installation UAE, electrical maintenance Abu Dhabi, PLC panels UAE",
  openGraph: {
    title: "IG Electromech Technical Services LLC",
    description:
      "Trusted provider of electromechanical services across UAE. Reliable, innovative, and customer-focused solutions.",
    url: "https://igelectromech.ae",
    siteName: "IG Electromech",
    locale: "en_UAE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
