"use client";

import { Users, GraduationCap, Clock } from "lucide-react";
import { useCountUp } from "@/lib/useCountUp";

// TODO: replace these placeholder figures with real, up-to-date program stats.
const STATS = [
  { label: "Students Supported", value: 120, icon: Users, suffix: "+" },
  { label: "Volunteer Tutors", value: 85, icon: GraduationCap, suffix: "+" },
  { label: "Hours Tutored", value: 3400, icon: Clock, suffix: "+" },
];

function StatCard({
  label,
  value,
  suffix,
  icon: Icon,
}: (typeof STATS)[number]) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="paper-card flex flex-col items-center gap-2 text-center">
      <Icon className="h-8 w-8 text-primary-dark" aria-hidden="true" />
      <span className="font-display text-4xl font-extrabold text-secondary">
        {animated.toLocaleString()}
        {suffix}
      </span>
      <span className="font-semibold text-ink/80">{label}</span>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-heading text-center">Our Impact</h2>
        <p className="section-subheading mx-auto mt-3 text-center">
          We serve K-12 students facing cancer, chronic illness, and other
          serious medical conditions — and welcome volunteer tutors of any
          age who want to make a real difference.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
