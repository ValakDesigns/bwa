import Link from "next/link";

/**
 * Text-based logo placeholder. TODO: replace with the real logo.png/svg
 * (see public/images/README.md) rendered via next/image once available.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-secondary md:text-xl ${className}`}
      aria-label="Brain Warrior Academy — home"
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-secondary shadow-paper"
        aria-hidden="true"
      >
        BW
      </span>
      <span>
        Brain Warrior <span className="text-primary">Academy</span>
      </span>
    </Link>
  );
}
