import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import Header from "@/app/components/common/header/Header";
import Footer from "@/app/components/common/footer/Footer";
import BottomFooter from "@/app/components/common/footer/bottom-footer/BottomFooter";
import ScrollButton from "@/app/components/common/scroll-button/ScrollButton";
import ScrollWhatsapp from "@/app/components/common/scroll-whatsapp/ScrollWhatsapp";
import StructuredData from "@/app/components/common/structured-data/StructuredData";
import LocaleProvider from "@/app/components/common/i18n/LocaleProvider";
import { routing } from "@/i18n/routing";
import { getCategories } from "@/lib/data";
import { getWebsite } from "@/lib/constants";
import { baseUrl, ogLocale } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const site = getWebsite(locale);
  return {
    metadataBase: new URL(baseUrl),
    title: { default: site.title, template: "%s | Gourmet Nuts" },
    description: site.slogan,
    authors: [{ name: "Gourmet Nuts" }],
    creator: "Gourmet Nuts",
    publisher: "Gourmet Nuts",
    formatDetection: { email: false, address: false, telephone: false },
    applicationName: "Gourmet Nuts",
    category: "E-Commerce",
    icons: {
      icon: [{ url: "/vite.svg", sizes: "any" }],
      shortcut: "/vite.svg",
      apple: [{ url: "/vite.svg", sizes: "180x180", type: "image/svg+xml" }],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      siteName: "Gourmet Nuts",
      title: site.title,
      description: site.slogan,
      locale: ogLocale[locale],
      images: [{ url: "/kuruyemis.jpeg", width: 1200, height: 630, alt: "Gourmet Nuts" }],
    },
    twitter: { card: "summary_large_image", title: "Gourmet Nuts", description: site.slogan, images: ["/kuruyemis.jpeg"] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default as Record<string, string>;
  const t = await getTranslations({ locale });

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* messages boş: next-intl yalnızca dil/yönlendirme için; metinler LocaleProvider'dan gelir */}
        <NextIntlClientProvider locale={locale} messages={{}}>
        <LocaleProvider locale={locale} messages={messages}>
          <StructuredData locale={locale} type="organization" />
          <StructuredData locale={locale} type="website" />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {t("skip_to_content")}
          </a>
          <Header categories={getCategories().slice(0, 8).map((c) => ({ name: c.name, url: c.url }))} />
          <main id="main-content" role="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BottomFooter />
          <ScrollButton />
          <ScrollWhatsapp />
        </LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
