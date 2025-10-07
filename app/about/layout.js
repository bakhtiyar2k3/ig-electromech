// app/about/layout.js

export const metadata = {
  title: "About Us | IG Electromech Technical Services LLC",
  description:
    "Learn more about IG Electromech Technical Services LLC — our mission, vision, values, and our commitment to delivering innovative and reliable electromechanical solutions across the UAE.",
  keywords: [
    "About IG Electromech",
    "electromechanical company UAE",
    "technical services company",
    "HVAC experts UAE",
    "automation company UAE",
    "PLC and VFD specialists",
  ],
  openGraph: {
    title: "About Us | IG Electromech",
    description:
      "Discover who we are, our journey, and why IG Electromech is a trusted name in electromechanical services throughout the UAE.",
    url: "https://igelectromech.ae/about",
    siteName: "IG Electromech",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }) {
  return (
    <div>
      {/* Your layout markup */}
      {children}
    </div>
  );
}
