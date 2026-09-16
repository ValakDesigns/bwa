import type { Metadata } from "next";
import StudentRegistrationForm from "@/components/forms/StudentRegistrationForm";

export const metadata: Metadata = {
  title: "Student Registration",
  description:
    "Register a K-12 student facing serious illness for free, one-on-one math and English tutoring with Brain Warrior Academy.",
  openGraph: {
    title: "Register a Student | Brain Warrior Academy",
    description:
      "Free, one-on-one math and English tutoring for K-12 students facing serious illness.",
  },
};

export default function StudentRegistrationPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <h1 className="section-heading">Register a Student</h1>
      <p className="section-subheading mt-4">
        Our program is completely free for K-12 students facing cancer,
        chronic illness, or another serious medical condition. Fill out the
        form below and we&apos;ll work to match your student with a caring
        volunteer tutor as soon as possible.
      </p>

      <div className="mt-10">
        <StudentRegistrationForm />
      </div>
    </section>
  );
}
