import type { Metadata } from "next";
import TutorApplicationForm from "@/components/forms/TutorApplicationForm";

export const metadata: Metadata = {
  title: "Tutor Application",
  description:
    "Apply to volunteer as a math or English tutor with Brain Warrior Academy — tutors of any age are welcome.",
  openGraph: {
    title: "Apply to Tutor | Brain Warrior Academy",
    description:
      "Volunteer as a free math or English tutor for K-12 students facing serious illness.",
  },
};

export default function TutorApplicationPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <h1 className="section-heading">Apply to Tutor</h1>
      <p className="section-subheading mt-4">
        Brain Warrior Academy welcomes volunteer tutors of any age — high
        school students, college students, teachers, retirees, and everyone
        in between. If you&apos;re patient, reliable, and want to help a
        K-12 student facing serious illness keep learning, we&apos;d love to
        hear from you.
      </p>

      <div className="mt-10">
        <TutorApplicationForm />
      </div>
    </section>
  );
}
