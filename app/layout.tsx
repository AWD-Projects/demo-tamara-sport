import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Playfair_Display } from "next/font/google";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tamarasport.com'),
  title: {
    default: "Tamara Sport — Ropa Deportiva Mexicana",
    template: "%s | Tamara Sport"
  },
  description: "Ropa deportiva mexicana. Calidad como las marcas grandes, sin el precio elevado. Hecho en Veracruz, México.",
  keywords: ["ropa deportiva", "activewear", "gym", "México", "Veracruz", "Tamara Sport", "ropa deportiva mexicana", "leggings", "tops deportivos"],
  authors: [{ name: "Tamara Sport" }],
  creator: "Tamara Sport",
  publisher: "Tamara Sport",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://tamarasport.com",
    title: "Tamara Sport — Ropa Deportiva Mexicana",
    description: "Ropa deportiva mexicana. Calidad como las marcas grandes, sin el precio elevado. Hecho en Veracruz, México.",
    siteName: "Tamara Sport",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tamara Sport — Ropa Deportiva Mexicana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamara Sport — Ropa Deportiva Mexicana",
    description: "Ropa deportiva mexicana. Calidad como las marcas grandes, sin el precio elevado.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
