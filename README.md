# Brain Warrior Academy

A Next.js website for Brain Warrior Academy, a nonprofit offering free,
one-on-one math and English tutoring for K-12 students facing serious
illness. Brain Warrior Academy was founded by a Craniopharyngioma survivor
and her brother, both St. Jude Children's Research Hospital alumni.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS 3](https://tailwindcss.com/) with a custom "paper style"
  design system (CSS variables + `tailwind.config.ts`)
- [react-hook-form](https://react-hook-form.com/) + [zod](https://zod.dev/) +
  `@hookform/resolvers` for form state and validation (client and server)
- [framer-motion](https://www.framer.com/motion/) for scroll/entrance
  animation, scoped to client components and respecting
  `prefers-reduced-motion`
- [lucide-react](https://lucide.dev/) for icons
- [Resend](https://resend.com/) for transactional form-submission email

## Local setup

```bash
npm install
cp .env.local.example .env.local
# then edit .env.local and fill in RESEND_API_KEY and CONTACT_EMAIL_TO
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without a real `RESEND_API_KEY`/`CONTACT_EMAIL_TO`, the app still runs —
the two forms (Tutor Application, Student Registration) will submit, hit
`/api/send-email`, and correctly show the form's inline error + "Try Again"
state instead of crashing, so you can develop and test the UI without a
Resend account.

## How contact form email delivery works

Both `TutorApplicationForm` and `StudentRegistrationForm`
(`components/forms/`) validate input client-side with `zod` +
`react-hook-form`, then `POST` the data to `app/api/send-email/route.ts`.

That route:

1. Re-validates the payload server-side with the same shared zod schemas
   (`lib/validation.ts`), so the API is safe to call directly.
2. Reads `RESEND_API_KEY` and `CONTACT_EMAIL_TO` from `process.env`. If
   either is missing, it logs a warning and returns a `503` with a clear
   error message instead of throwing, so local dev without a key still
   works end-to-end.
3. Otherwise, it sends a formatted HTML email via the `resend` SDK to
   `CONTACT_EMAIL_TO`, and returns a JSON `{ ok: true }` / `{ ok: false,
   error }` response with the appropriate status code.

## Build

```bash
npm run build
```

## Deploying to Vercel

```bash
npm i -g vercel
vercel link
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL_TO
vercel --prod
```

## Placeholder / pending assets before launch

This repository ships with **no real photography or final brand assets**.
Everywhere one is needed, a clearly labeled placeholder component or a
generated SVG/OG image stands in, with `TODO` comments marking exactly what
needs to be swapped in. Before launch, replace:

- **Logo** — a real `logo.png`/`.svg` (currently a text-based `BW` mark in
  `components/ui/Logo.tsx`).
- **Founder / hero photos** — real photography for the homepage hero and
  the "Our Story" sections on the home and About pages (currently
  `PlaceholderBox` components and a placeholder hero SVG — see
  `public/images/README.md`).
- **Final brand hex codes** — the coral/teal/cream palette in
  `app/globals.css` (`--color-primary`, `--color-secondary`,
  `--color-accent`, `--color-background`, `--color-text`) is a reasonable
  placeholder that already passes WCAG AA contrast checks, but should be
  confirmed against the organization's real brand guidelines.
- **Real contact email** — `hello@brainwarrioracademy.org` appears in the
  Footer and is marked with a `TODO` comment; replace with the
  organization's real inbox.
- **Real social links** — the Footer's social icons currently point to `#`
  with generic placeholder icons and `TODO` comments; replace with real
  Facebook/Instagram/X URLs and their brand icons.
- **A real `RESEND_API_KEY`** (and verified sending domain) — set via
  `vercel env add RESEND_API_KEY` for production; also update the
  `from` address in `app/api/send-email/route.ts` once a domain is
  verified with Resend.
