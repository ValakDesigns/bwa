"use client";

import { motion } from "framer-motion";
import { ClipboardList, Handshake, BookOpenCheck } from "lucide-react";

const STEPS = [
  {
    number: "1",
    title: "Register or Apply",
    description:
      "Families register a student, or volunteers apply to tutor, through a short online form.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "Get Matched",
    description:
      "We thoughtfully pair each student with a tutor based on subject, schedule, and needs.",
    icon: Handshake,
  },
  {
    number: "3",
    title: "Start Learning Together",
    description:
      "Tutor and student meet one-on-one, building confidence and keeping learning on track.",
    icon: BookOpenCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="overflow-hidden bg-accent/20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-heading text-center">How It Works</h2>
        <p className="section-subheading mx-auto mt-3 text-center">
          Three simple steps connect students with a caring, dedicated tutor.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
              className="paper-card flex flex-col items-center gap-4 text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="font-display text-sm font-bold text-primary-dark">
                STEP {step.number}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/30 text-secondary">
                <step.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold text-secondary">
                {step.title}
              </h3>
              <p className="text-ink/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
