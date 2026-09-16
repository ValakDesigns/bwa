import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-secondary md:text-xl ${className}`}
      aria-label="Brain Warrior Academy — home"
    >
      <Image
        src="/images/logo.png"
        alt="Brain Warrior Academy logo — a superhero child in a teal cape with a brain-and-heart emblem"
        width={40}
        height={40}
        className="h-9 w-9 object-contain md:h-10 md:w-10"
      />
      <span>
        Brain Warrior <span className="text-primary">Academy</span>
      </span>
    </Link>
  );
}
