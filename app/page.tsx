import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import HowItWorks from "@/components/sections/HowItWorks";
import Impact from "@/components/sections/Impact";
import GetInvolvedCTA from "@/components/sections/GetInvolvedCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Free, one-on-one math and English tutoring for K-12 students facing serious illness, founded by St. Jude alumni.",
  openGraph: {
    title: "Brain Warrior Academy",
    description:
      "Free, one-on-one math and English tutoring for K-12 students facing serious illness.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <HowItWorks />
      <Impact />
      <GetInvolvedCTA />
    </>
  );
}
