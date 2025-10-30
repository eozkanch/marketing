type Props = { size?: "sm" | "md" | "lg" };

export default function Spacer({ size = "md" }: Props) {
  const h = size === "sm" ? "h-4" : size === "lg" ? "h-12" : "h-8";
  return <div className={h} />;
}


