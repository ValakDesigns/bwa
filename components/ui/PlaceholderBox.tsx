import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PlaceholderBoxProps {
  label: string;
  className?: string;
  "aria-hidden"?: boolean;
}

/**
 * Visual stand-in for a real photo/logo asset that doesn't exist yet.
 * TODO: replace usages of this component with next/image once real
 * photography (logo, hero, founder photos) is available — see
 * public/images/README.md for the full list of pending assets.
 */
export default function PlaceholderBox({
  label,
  className,
  ...rest
}: PlaceholderBoxProps) {
  return (
    <div
      role="img"
      aria-label={rest["aria-hidden"] ? undefined : `Placeholder image: ${label}`}
      aria-hidden={rest["aria-hidden"]}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-secondary/30 bg-accent/30 text-center text-secondary/70",
        className
      )}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="px-3 text-sm font-semibold">{label}</span>
    </div>
  );
}
