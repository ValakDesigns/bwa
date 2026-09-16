"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function GetInvolvedCTA() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 text-white md:py-20">
      {/* Decorative sparkles — purely decorative */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-8 h-10 w-10 text-accent/70"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.2 7.6L22 10l-7.8 2.4L12 20l-2.2-7.6L2 10l7.8-2.4z" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-10 h-14 w-14 text-primary/60"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.2 7.6L22 10l-7.8 2.4L12 20l-2.2-7.6L2 10l7.8-2.4z" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center md:px-6"
      >
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">
          Ready to be part of something warrior-strong?
        </h2>
        <p className="text-white/85 md:text-lg">
          Whether you want to give your time as a tutor or get a student the
          free support they deserve, we&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/tutor-application" variant="primary">
            Apply to Tutor
          </Button>
          <Button href="/student-registration" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
            Register a Student
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
