// app/contact/layout.js

export const metadata = {
  title: "Contact Us | IG Electromech Technical Services LLC",
  description:
    "Get in touch with IG Electromech for inquiries, project consultations, or support. We’re here to assist you with reliable electromechanical solutions in the UAE.",
  keywords: [
    "contact IG Electromech",
    "electromechanical support UAE",
    "technical services UAE",
    "HVAC consultation",
    "PLC and VFD support",
    "electrical and mechanical contact UAE",
  ],
  openGraph: {
    title: "Contact Us | IG Electromech",
    description:
      "Reach out to IG Electromech for expert technical services in HVAC, electrical systems, automation, and more across the UAE.",
    url: "https://igelectromech.ae/contact",
    siteName: "IG Electromech",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return (
    <div>
      {/* Your layout markup */}
      {children}
    </div>
  );
}
