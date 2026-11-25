import { getWebsite } from "@/lib/constants";
import { jsonLdString, baseUrl as seoBase } from "@/lib/seo";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/lib/types";

type Props = {
  locale?: Locale;
  type?: "website" | "organization" | "product";
  product?: {
    name: string;
    description?: string;
    price?: number;
    image?: string;
  };
};

export default function StructuredData({ locale = "tr", type = "website", product }: Props) {
  const website = getWebsite(locale);
  const baseUrl = seoBase;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: website.name,
    url: baseUrl,
    logo: `${baseUrl}/vite.svg`,
    description: website.desc,
    address: {
      "@type": "PostalAddress",
      streetAddress: website.address,
      addressLocality: "Genève",
      addressRegion: "GE",
      postalCode: "1204",
      addressCountry: "CH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: website.phone,
      contactType: "customer service",
      email: website.email,
      availableLanguage: ["Turkish", "French", "English"],
    },
    sameAs: [
      website.facebook,
      website.instagram,
      website.twitter,
      website.linkedin,
      website.youtube,
    ].filter(Boolean),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: website.name,
    url: `${baseUrl}/${locale}`,
    description: website.desc,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}${getPathname({ locale, href: "/search-results" })}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
        },
      }
    : null;

  const schema = type === "organization" ? organizationSchema : type === "product" && productSchema ? productSchema : websiteSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
    />
  );
}

