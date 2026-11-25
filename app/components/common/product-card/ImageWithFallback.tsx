"use client";
import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export const PLACEHOLDER_SRC = "/images/gourmet-nuts-placeholder.webp";

export default function ImageWithFallback({ src, alt, ...rest }: ImageProps) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      {...rest}
      src={failed || !src ? PLACEHOLDER_SRC : src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
