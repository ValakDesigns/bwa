import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export default function ValueCard({ icon: Icon, title, children }: ValueCardProps) {
  return (
    <div className="paper-card flex flex-col items-center gap-3 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/30 text-secondary">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="font-display text-xl font-bold text-secondary">{title}</h3>
      <p className="text-ink/80">{children}</p>
    </div>
  );
}
