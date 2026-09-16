import type { Metadata } from "next";
import { HeartHandshake, Mountain, Gift, Users2 } from "lucide-react";
import PlaceholderBox from "@/components/ui/PlaceholderBox";
import ValueCard from "@/components/ui/ValueCard";
import GetInvolvedCTA from "@/components/sections/GetInvolvedCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the founders of Brain Warrior Academy — a Craniopharyngioma survivor and her brother, both St. Jude alumni — and the values behind our free tutoring program.",
  openGraph: {
    title: "About Brain Warrior Academy",
    description:
      "Meet the founders and the values behind our free tutoring program for K-12 students facing serious illness.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="section-heading">
          Our mission: keep every warrior learning.
        </h1>
        <p className="section-subheading mt-4">
          Brain Warrior Academy exists so that a serious illness never has to
          mean falling behind in school. We connect K-12 students with
          dedicated volunteer tutors for free, one-on-one support in math
          and English — no cost, no red tape, just steady encouragement.
        </p>
      </section>

      <section className="overflow-hidden bg-accent/20 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          {/* TODO: replace with a real founders photo (see public/images/README.md) */}
          <PlaceholderBox
            label="Founders story photo placeholder"
            className="aspect-[4/3] w-full"
          />
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">
              Founded by survivors, built for survivors
            </h2>
            <p className="text-ink/85">
              Our founder is a Craniopharyngioma survivor who spent years of
              her childhood in and out of treatment at St. Jude
              Children&apos;s Research Hospital. Her brother, also a St. Jude
              alumnus, stood beside her through every appointment, surgery,
              and long hospital stay.
            </p>
            <p className="text-ink/85">
              Together they saw how quickly schoolwork can pile up when a
              child is fighting for their health — and how much a single
              caring tutor can change that. Brain Warrior Academy is the
              organization they wished had existed for them: a place where
              any student facing serious illness can get free, patient,
              one-on-one academic support.
            </p>
            <p className="text-ink/85">
              Today, that same spirit of resilience and compassion drives
              every match we make between a student and a volunteer tutor.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="section-heading text-center">Our Values</h2>
        <p className="section-subheading mx-auto mt-3 text-center">
          These four ideas guide everything we do.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ValueCard icon={HeartHandshake} title="Compassion">
            We meet every student and family with empathy, patience, and
            genuine care for what they&apos;re going through.
          </ValueCard>
          <ValueCard icon={Mountain} title="Perseverance">
            We believe setbacks don&apos;t define a student&apos;s future —
            steady, supportive effort does.
          </ValueCard>
          <ValueCard icon={Gift} title="Free Access">
            Every tutoring match is completely free, always — cost should
            never stand between a student and their education.
          </ValueCard>
          <ValueCard icon={Users2} title="Community">
            We&apos;re building a network of volunteers and families who
            show up for one another, session after session.
          </ValueCard>
        </div>
      </section>

      <GetInvolvedCTA />
    </>
  );
}
