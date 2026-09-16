import { CheckCircle2 } from "lucide-react";

export default function FormSuccess({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div
      role="status"
      className="paper-card flex flex-col items-center gap-3 text-center"
    >
      <CheckCircle2 className="h-12 w-12 text-secondary" aria-hidden="true" />
      <h2 className="font-display text-2xl font-bold text-secondary">{title}</h2>
      <p className="text-ink/80">{message}</p>
    </div>
  );
}
