// app/products/layout.js

export const metadata = {
  title: "Our Products | IG Electromech Technical Services LLC",
  description:
    "Discover IG Electromech's range of high-quality electrical, mechanical, and instrumentation products including VFDs, PLCs, FCUs, valves, and more.",
  keywords: [
    "electromechanical products UAE",
    "electrical components UAE",
    "VFDs",
    "PLCs",
    "Fan Coil Units",
    "Instrumentation",
    "technical products UAE",
  ],
  openGraph: {
    title: "Our Products | IG Electromech",
    description:
      "Browse our product catalog including electrical, mechanical, and instrumentation products for industrial and commercial applications in the UAE.",
    url: "https://igelectromech.ae/products",
    siteName: "IG Electromech",
    locale: "en_US",
    type: "website",
  },
};

export default function ProductsLayout({ children }) {
  return (
    <div>
      {/* Your layout markup */}
      {children}
    </div>
  );
}
