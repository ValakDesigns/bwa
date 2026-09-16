"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Decorative layered paper accent shapes — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/60 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={rise}
          className="flex flex-col gap-6"
        >
          <h1 className="font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl lg:text-6xl">
            Every warrior deserves a chance to keep learning.
          </h1>
          <p className="section-subheading">
            Brain Warrior Academy provides free, one-on-one math and English
            tutoring for K-12 students facing serious illness. We were
            founded by a Craniopharyngioma survivor and her brother — both
            St. Jude Children&apos;s Research Hospital alumni — who know
            firsthand how hard it is to keep up in school during treatment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/tutor-application" variant="primary">
              Apply to Tutor
            </Button>
            <Button href="/student-registration" variant="secondary">
              Register a Student
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={rise}
          transition={{ delay: 0.15 }}
          className="relative mx-auto aspect-[4/3] w-full max-w-lg"
        >
          {/*
            Custom illustration (not a photo) so the hero has real visual
            interest without depicting specific people. TODO: consider
            swapping for a real photo of a tutoring session once one is
            available (see public/images/README.md).
          */}
          <Image
            src="/images/hero-illustration.svg"
            alt="Illustration of a tutor and student sitting together at a table with an open book"
            fill
            priority
            className="rounded-3xl object-cover shadow-paper-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
