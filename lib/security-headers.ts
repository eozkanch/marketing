const isDev = process.env.NODE_ENV !== "production";

// Not: Nonce tabanlı CSP tüm sayfaları dinamik yapıp ISR'ı (revalidate) bozar.
// Bu yüzden 'unsafe-inline' kabul ediliyor; Next'in inline script'leri için gerekli.
export function securityHeaders(): Record<string, string> {
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://bizimkiler.ch",
    "font-src 'self' data:",
    `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
    "frame-src https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  return {
    "Content-Security-Policy": csp,
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  };
}
