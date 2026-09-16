"use client";

import { motion } from "framer-motion";
import PlaceholderBox from "@/components/ui/PlaceholderBox";

export default function OurStory() {
  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* TODO: replace with a real photo of the founders (see public/images/README.md) */}
          <PlaceholderBox
            label="Founders photo placeholder"
            className="aspect-[4/3] w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <h2 className="section-heading">Our Story</h2>
          <p className="text-ink/85">
            Brain Warrior Academy was founded by a Craniopharyngioma survivor
            and her brother — both alumni of St. Jude Children&apos;s
            Research Hospital. During years of treatment and recovery, they
            watched firsthand how easy it is for a child&apos;s education to
            fall through the cracks while they&apos;re fighting for their
            health.
          </p>
          <p className="text-ink/85">
            So they built the program they wished they&apos;d had: free,
            one-on-one tutoring in math and English, matched to each
            student&apos;s pace, schedule, and needs — no cost, no pressure,
            just steady support from someone who shows up for them.
          </p>
          <blockquote className="paper-card mt-2 max-w-md -rotate-1 bg-accent/50 font-display text-lg font-semibold text-secondary">
            &ldquo;We didn&apos;t want any other kid to fall behind just
            because they were sick. Learning can still be joyful, even on
            the hard days.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
