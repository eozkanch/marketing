"use server";
import { z } from "zod";

export type ContactState = {
  status: "idle" | "success" | "invalid" | "error" | "fallback";
  values?: { name: string; email: string; subject: string; message: string };
};

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(3000),
});

// Başlık/gövdede satır başı enjeksiyonunu ve kontrol karakterlerini temizle
const clean = (s: string) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: botlar gizli alanı doldurur
  if (String(formData.get("website") ?? "").length > 0) return { status: "success" };

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  if (!parsed.success) return { status: "invalid", values: raw };

  const v = Object.fromEntries(Object.entries(parsed.data).map(([k, val]) => [k, clean(val)])) as typeof parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Gourmet Nuts <onboarding@resend.dev>";
  // Mail sağlayıcısı yapılandırılmamışsa istemci mailto'ya düşer
  if (!apiKey || !to) return { status: "fallback", values: v };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: v.email,
        subject: `[Gourmet Nuts] ${v.subject.replace(/[\r\n]+/g, " ")}`,
        text: `${v.name} <${v.email}>\n\n${v.message}`,
      }),
    });
    return res.ok ? { status: "success" } : { status: "error", values: v };
  } catch {
    return { status: "error", values: v };
  }
}
