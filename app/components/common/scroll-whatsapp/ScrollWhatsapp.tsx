"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ScrollWhatsapp() {
  return (
    <Link
      href="https://wa.me/0000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      aria-label="WhatsApp ile iletişim"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}


