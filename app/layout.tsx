import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import BottomFooter from "./components/common/footer/bottom-footer/BottomFooter";
import ScrollButton from "./components/common/scroll-button/ScrollButton";
import ScrollWhatsapp from "./components/common/scroll-whatsapp/ScrollWhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Gourmet Nuts",
    template: "%s | Gourmet Nuts",
  },
  description: "Doğanın En İyisi, Sofranın En Zarif Hali",
  applicationName: "Gourmet Nuts",
  icons: {
    icon: "/vite.svg",
    shortcut: "/vite.svg",
    apple: "/vite.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Gourmet Nuts",
    title: "Gourmet Nuts",
    description: "Doğanın En İyisi, Sofranın En Zarif Hali",
    url: "/",
    images: [{ url: "/vercel.svg", width: 1200, height: 630 }],
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <BottomFooter />
        <ScrollButton />
        <ScrollWhatsapp />
      </body>
    </html>
  );
}
