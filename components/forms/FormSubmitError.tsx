import { AlertTriangle } from "lucide-react";

export default function FormSubmitError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="flex flex-col items-start gap-3 rounded-xl border-2 border-red-700/30 bg-red-50 p-4 text-red-800 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="font-semibold">{message}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="min-h-[44px] shrink-0 rounded-lg border-2 border-red-700 px-4 py-2 font-display font-semibold text-red-800 hover:bg-red-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
