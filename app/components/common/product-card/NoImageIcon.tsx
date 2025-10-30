import { ImageOff } from "lucide-react";

export default function NoImageIcon() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900">
      <ImageOff className="h-12 w-12 text-emerald-600" />
      <span className="text-sm font-medium text-emerald-600">No image</span>
    </div>
  );
}
