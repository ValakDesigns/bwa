import Link from "next/link";
import { Globe, MessageCircle, Share2 } from "lucide-react";
import Logo from "./Logo";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tutor-application", label: "Tutor Application" },
  { href: "/student-registration", label: "Student Registration" },
];

// TODO: replace these generic placeholder icons/links with the real
// Facebook/Instagram/X brand icons and profile URLs once they exist.
const SOCIAL_LINKS = [
  { href: "#", label: "Facebook (TODO)", icon: Share2 },
  { href: "#", label: "Instagram (TODO)", icon: MessageCircle },
  { href: "#", label: "Twitter / X (TODO)", icon: Globe },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-secondary text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="paper-card-flat bg-white/5 shadow-none">
          <Logo className="text-white [&_span]:text-white" />
          <p className="mt-3 max-w-xs text-sm text-white/80">
            Free, one-on-one math and English tutoring for K-12 students facing
            serious illness — because learning shouldn&apos;t stop when life
            gets hard.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-accent">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block min-h-[44px] py-2 text-white/85 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-accent">Contact</h2>
          {/* TODO: replace with the real organizational contact email address */}
          <p className="mt-3 text-white/85">
            <a href="mailto:hello@brainwarrioracademy.org" className="hover:text-accent">
              hello@brainwarrioracademy.org
            </a>
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`${label} (TODO: link pending)`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-secondary"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Brain Warrior Academy. All rights reserved.
      </div>
    </footer>
  );
}
