import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.brainwarrioracademy.org"; // TODO: replace with real production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brain Warrior Academy",
    template: "%s | Brain Warrior Academy",
  },
  description:
    "Brain Warrior Academy provides free, one-on-one math and English tutoring for K-12 students facing serious illness, founded by a Craniopharyngioma survivor and her brother, both St. Jude Children's Research Hospital alumni.",
  openGraph: {
    title: "Brain Warrior Academy",
    description:
      "Free, one-on-one math and English tutoring for K-12 students facing serious illness.",
    url: siteUrl,
    siteName: "Brain Warrior Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Warrior Academy",
    description:
      "Free, one-on-one math and English tutoring for K-12 students facing serious illness.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunitoSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
