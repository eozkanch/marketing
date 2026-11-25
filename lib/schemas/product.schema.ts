import { z } from "zod";
import { normalizeProductName, checkWeightMismatch } from "../product-normalize";

export { normalizeProductName, checkWeightMismatch };

export const productLegacySchema = z
  .object({
    name: z.string().min(1),
    price: z.string(),
    image_url: z.string().nullish().transform((v) => v ?? ""),
    details_link: z.string(),
  })
  .loose()
  .transform((p) => {
    const name = normalizeProductName(p.name);
    const warning = checkWeightMismatch(name, p.image_url);
    if (warning && process.env.NODE_ENV !== "production") console.warn(`[product.schema] ${warning}`);
    return { ...p, name };
  });
