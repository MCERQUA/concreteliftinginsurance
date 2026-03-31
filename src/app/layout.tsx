import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://concreteliftinginsurance.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Concrete Lifting Insurance | Spray Foam & Mud Jacking Coverage",
    template: "%s | Concrete Lifting Insurance",
  },
  description: "Specialized insurance for concrete lifting contractors. Coverage for spray foam lifting, mud jacking, general liability, workers comp, and equipment. Get a free quote in minutes.",
  keywords: [
    "concrete lifting insurance",
    "spray foam lifting insurance",
    "mud jacking insurance",
    "polyjacking insurance",
    "concrete leveling insurance",
    "foam jacking insurance",
    "workers compensation concrete contractors",
    "commercial auto insurance contractors",
    "equipment breakdown insurance",
    "general liability insurance concrete",
  ],
  authors: [{ name: "Concrete Lifting Insurance" }],
  creator: "Concrete Lifting Insurance",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Concrete Lifting Insurance",
    title: "Concrete Lifting Insurance | Spray Foam & Mud Jacking Coverage",
    description: "Specialized insurance for concrete lifting contractors. Coverage for spray foam lifting, mud jacking, general liability, workers comp, and equipment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Concrete Lifting Insurance - Specialized Coverage for Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Lifting Insurance | Spray Foam & Mud Jacking Coverage",
    description: "Specialized insurance for concrete lifting contractors. Get a free quote in minutes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Concrete Lifting Insurance",
              description:
                "Specialized insurance for concrete lifting contractors including spray foam lifting and mud jacking.",
              url: baseUrl,
              telephone: "+1-800-543-3843",
              email: "quotes@concreteliftinginsurance.com",
              areaServed: "United States",
              knowsAbout: [
                "Spray Foam Lifting Insurance",
                "Mud Jacking Insurance",
                "Concrete Leveling Coverage",
                "Workers Compensation",
                "Equipment Breakdown Insurance",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
