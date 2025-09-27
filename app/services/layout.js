
export const metadata = {
  title: "Our Services | IG Electromech Technical Services LLC",
  description:
    "Explore IG Electromech’s comprehensive electromechanical services in UAE including PLC & VFD Panels, HVAC, Electrical, Plumbing, Maintenance, and more.",
  keywords: [
    "electromechanical services UAE",
    "PLC panels",
    "HVAC installation",
    "electrical maintenance",
    "plumbing solutions",
    "industrial automation UAE",
  ],
  openGraph: {
    title: "Our Services | IG Electromech",
    description:
      "Comprehensive electromechanical services for residential, commercial, and industrial projects across UAE.",
    url: "https://igelectromech.ae/services",
    siteName: "IG Electromech",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <div>
      {/* Your layout markup */}
      {children}
    </div>
  );
}
