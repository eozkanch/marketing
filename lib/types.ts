export type WebsiteInfo = {
  name: string;
  slogan: string;
  title: string;
  desc: string;
  about: { title: string; desc: string[] };
  contact: { title: string; desc: string };
  footer: string;
  address: string;
  phone: string;
  mapUrl: string;
  mapEmbedUrl: string;
  email: string;
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  youtube: string;
};

export type Locale = "tr" | "fr" | "en";

export type SliderItem = {
  id: number | string;
  image: string;
  title: string;
  desc?: string;
};

export type Category = {
  name: string;
  url: string;
  count: number;
  checked?: boolean;
};

export type ProductLegacy = {
  name: string;
  image_url: string;
  description?: string;
  details_link: string;
  price: string; // CHF xx.yy
  old_price?: string | null;
  sale_title?: string | null;
  data_rating?: number | null;
  vendor_title?: string | null;
};

export type UserSeed = {
  id: number;
  name: string;
  surname: string;
  password: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  token: string;
};


