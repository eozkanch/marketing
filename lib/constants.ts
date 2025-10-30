import type { WebsiteInfo, SliderItem, Locale } from "./types";

export const websitesByLocale: Record<Locale, WebsiteInfo> = {
  tr: {
    name: "Gourmet Nuts",
    slogan: "Doğanın En İyisi, Sofranın En Zarif Hali",
    title: "Gourmet Nuts - Premium Kuruyemiş ve Gurme Lezzetler",
    desc: "Gourmet Nuts, seçkin kuruyemiş ve gurme lezzetleri, kusursuz tazelik ve premium kalite anlayışıyla sunar. Sofranıza zarafet katan doğal tatlar, sürdürülebilir tedarik ve özenli işçilikle buluşuyor.",
    about: {
    title: "Hakkımızda",
    desc: [
      "En plus des variétés classiques de fruits secs, nous sommes heureux d'offrir des saveurs locales à nos clients résidant à l'étranger en incluant des saveurs locales dans leur portefeuille de vente. Nous sommes très heureux d'offrir les produits les plus frais et de qualité à nos précieux clients au prix le plus abordable et de la manière la plus rapide. Nous vous souhaitons un agréable shopping...",
      "D'autre part, les difficultés rencontrées par les agriculteurs et producteurs turcs et leur incapacité à être payés pour leurs efforts est un problème qui a été exprimé depuis des années. La nôtre prend également ses responsabilités dans ce domaine et a des projets tels que le contact direct avec le producteur, l'achat directement auprès de l'agriculteur, l'aide aux agriculteurs pour obtenir des certificats internationaux (BIO, FairTrade, etc.).",
      "Actuellement, une certaine partie des produits que vous trouverez dans notre magasin sont achetés directement auprès du fabricant et vous sont livrés, et il est parmi nos objectifs importants d'augmenter constamment ce ratio. De cette manière, l'objectif est d'augmenter la qualité de vie du producteur, tandis que l'objectif est que nos clients consomment plus consciemment.",
      "Nous sommes conscients qu'il est de notre responsabilité envers les générations futures de répondre positivement à la sensibilité accrue envers l'environnement ces dernières années, et dans ce cadre, nous distribuerons nos produits avec un véhicule respectueux de l'environnement. Le projet Bizimkiler a été jugé digne du prix spécial du jury en 2020 en raison des sensibilités et des objectifs mentionnés ci-dessus dans le cours SINGA Entrepreneurship auquel il a participé. Ce prix est important pour nous motiver et apprécier notre travail, mais notre plus belle récompense sera le sourire que nous laissons sur le visage de nos clients qui consomment nos produits.",
    ],
  },
    contact: {
      title: "İletişim",
      desc: "Gourmet Nuts ekibi olarak her zaman yanınızdayız. Öneri, talep ve iş birlikleri için bizimle iletişime geçebilirsiniz.",
    },
    footer: "",
    address: "Place du Molard, 1204 Genève, SWITZERLAND",
    phone: "+41 00 000 00 00",
    mapUrl: "https://goo.gl/maps/3XKJxYQm9JxKJxYQm",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.5!2d6.1432!3d46.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sPlace%20du%20Molard%2C%201204%20Gen%C3%A8ve!5e0!3m2!1str!2sch!4v1696880003139!5m2!1str!2sch",
    email: "info@gourmetnuts.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com",
  },
  en: {
    name: "Gourmet Nuts",
    slogan: "Nature's Finest, Elegance on Your Table",
    title: "Gourmet Nuts - Premium Nuts and Gourmet Delicacies",
    desc: "Gourmet Nuts delivers premium nuts and gourmet delicacies with freshness and quality at heart.",
    about: { title: "About Us", desc: ["We bring nature's finest flavors with sustainable sourcing and craftsmanship."] },
    contact: { title: "Contact", desc: "We're here for your inquiries and collaborations." },
    footer: "",
    address: "Place du Molard, 1204 Geneva, SWITZERLAND",
    phone: "+41 00 000 00 00",
    mapUrl: "https://goo.gl/maps/3XKJxYQm9JxKJxYQm",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.5!2d6.1432!3d46.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sPlace%20du%20Molard%2C%201204%20Gen%C3%A8ve!5e0!3m2!1sen!2sch!4v1696880003139!5m2!1sen!2sch",
    email: "info@gourmetnuts.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com",
  },
  fr: {
    name: "Gourmet Nuts",
    slogan: "Le meilleur de la nature, l'élégance à table",
    title: "Gourmet Nuts - Noix Premium et Délices Gourmets",
    desc: "Gourmet Nuts propose des noix de qualité supérieure et des délices gourmets avec une fraîcheur irréprochable.",
    about: { title: "À propos", desc: ["Nous réunissons les meilleurs goûts avec un approvisionnement durable et un savoir-faire soigné."] },
    contact: { title: "Contact", desc: "Nous sommes disponibles pour vos demandes et collaborations." },
    footer: "",
    address: "Place du Molard, 1204 Genève, SUISSE",
    phone: "+41 00 000 00 00",
    mapUrl: "https://goo.gl/maps/3XKJxYQm9JxKJxYQm",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.5!2d6.1432!3d46.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sPlace%20du%20Molard%2C%201204%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1696880003139!5m2!1sfr!2sch",
    email: "info@gourmetnuts.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com",
  },
};

export function getWebsite(locale: Locale): WebsiteInfo {
  return websitesByLocale[locale] || websitesByLocale.tr;
}

export const slider: SliderItem[] = [
  { id: 1, image: "Bizimkiler-Slide.webp", title: "Bizimkiler", desc: "Bizimkiler" },
];

export const constants = { slider } as const;


