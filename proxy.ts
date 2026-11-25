import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { securityHeaders } from "./lib/security-headers";

// Next 16: middleware.ts yerine proxy.ts
const intlProxy = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const response = intlProxy(request);
  for (const [key, value] of Object.entries(securityHeaders())) response.headers.set(key, value);
  return response;
}

export const config = {
  // api, _next, vercel ve dosya uzantılı yolları (görseller, sitemap.xml, robots.txt...) hariç tut
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
