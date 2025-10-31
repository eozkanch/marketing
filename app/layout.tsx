import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import BottomFooter from "./components/common/footer/bottom-footer/BottomFooter";
import ScrollButton from "./components/common/scroll-button/ScrollButton";
import ScrollWhatsapp from "./components/common/scroll-whatsapp/ScrollWhatsapp";
import StructuredData from "./components/common/structured-data/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gourmetnuts.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gourmet Nuts - Premium Kuruyemiş ve Gurme Lezzetler",
    template: "%s | Gourmet Nuts",
  },
  description: "Doğanın En İyisi, Sofranın En Zarif Hali. Premium kuruyemiş, baharat ve gurme lezzetleri. Taze, doğal ve kaliteli ürünler.",
  keywords: ["kuruyemiş", "gurme", "premium", "doğal", "taze", "baharat", "gourmet nuts", "nuts"],
  authors: [{ name: "Gourmet Nuts" }],
  creator: "Gourmet Nuts",
  publisher: "Gourmet Nuts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "Gourmet Nuts",
  category: "E-Commerce",
  icons: {
    icon: [
      { url: "/vite.svg", sizes: "any" },
    ],
    shortcut: "/vite.svg",
    apple: [
      { url: "/vite.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "Gourmet Nuts",
    title: "Gourmet Nuts - Premium Kuruyemiş ve Gurme Lezzetler",
    description: "Doğanın En İyisi, Sofranın En Zarif Hali. Premium kuruyemiş, baharat ve gurme lezzetleri.",
    url: baseUrl,
    images: [
      {
        url: "/kuruyemis.jpeg",
        width: 1200,
        height: 630,
        alt: "Gourmet Nuts",
      },
    ],
    locale: "tr_TR",
    alternateLocale: ["fr_FR", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourmet Nuts",
    description: "Doğanın En İyisi, Sofranın En Zarif Hali",
    images: ["/kuruyemis.jpeg"],
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
    languages: {
      "tr": `${baseUrl}`,
      "fr": `${baseUrl}?locale=fr`,
      "en": `${baseUrl}?locale=en`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StructuredData locale="tr" type="organization" />
        <StructuredData locale="tr" type="website" />
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Ana içeriğe atla
        </a>
        <Header />
        <main id="main-content" role="main" tabIndex={-1}>{children}</main>
        <Footer />
        <BottomFooter />
        <ScrollButton />
        <ScrollWhatsapp />
      </body>
    </html>
  );
}
