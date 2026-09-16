"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  studentRegistrationSchema,
  type StudentRegistrationValues,
} from "@/lib/validation";
import FormField from "./FormField";
import FormSuccess from "./FormSuccess";
import FormSubmitError from "./FormSubmitError";

const SUBJECT_OPTIONS = [
  { value: "math", label: "Math" },
  { value: "english", label: "English" },
] as const;

export default function StudentRegistrationForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<StudentRegistrationValues>({
    resolver: zodResolver(studentRegistrationSchema),
    defaultValues: {
      studentName: "",
      gradeOrAge: "",
      guardianName: "",
      guardianEmail: "",
      phone: "",
      subjects: [],
      needsNote: "",
      availability: "",
      consent: undefined as unknown as true,
    },
  });

  async function submit(values: StudentRegistrationValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "student-registration", data: values }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setSubmitError(
          json.error || "Something went wrong submitting the registration."
        );
        setSubmitState("error");
        return;
      }
      setSubmitState("success");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <FormSuccess
        title="Registration received!"
        message="Thank you for registering. We'll be in touch soon about matching your student with a tutor."
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="paper-card flex flex-col gap-6"
    >
      {submitState === "error" && submitError && (
        <FormSubmitError
          message={submitError}
          onRetry={() => submit(getValues())}
        />
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="studentName" label="Student Name" error={errors.studentName?.message}>
          <input
            id="studentName"
            type="text"
            className="form-input"
            aria-invalid={!!errors.studentName}
            aria-describedby={errors.studentName ? "studentName-error" : undefined}
            {...register("studentName")}
          />
        </FormField>

        <FormField id="gradeOrAge" label="Age / Grade" error={errors.gradeOrAge?.message}>
          <input
            id="gradeOrAge"
            type="text"
            placeholder="e.g. 10 years old / 5th grade"
            className="form-input"
            aria-invalid={!!errors.gradeOrAge}
            aria-describedby={errors.gradeOrAge ? "gradeOrAge-error" : undefined}
            {...register("gradeOrAge")}
          />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="guardianName"
          label="Parent/Guardian Name"
          error={errors.guardianName?.message}
        >
          <input
            id="guardianName"
            type="text"
            className="form-input"
            aria-invalid={!!errors.guardianName}
            aria-describedby={errors.guardianName ? "guardianName-error" : undefined}
            {...register("guardianName")}
          />
        </FormField>

        <FormField
          id="guardianEmail"
          label="Parent/Guardian Email"
          error={errors.guardianEmail?.message}
        >
          <input
            id="guardianEmail"
            type="email"
            className="form-input"
            aria-invalid={!!errors.guardianEmail}
            aria-describedby={errors.guardianEmail ? "guardianEmail-error" : undefined}
            {...register("guardianEmail")}
          />
        </FormField>
      </div>

      <FormField id="phone" label="Phone" error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          className="form-input max-w-sm"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
      </FormField>

      <fieldset>
        <legend className="form-label">Subjects Needed</legend>
        <div className="flex flex-wrap gap-4">
          {SUBJECT_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              htmlFor={`subjects-${opt.value}`}
              className="flex min-h-[44px] items-center gap-2 rounded-xl border-2 border-secondary/20 bg-white px-4 py-2"
            >
              <input
                id={`subjects-${opt.value}`}
                type="checkbox"
                value={opt.value}
                className="h-5 w-5 accent-secondary"
                {...register("subjects")}
              />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.subjects && (
          <p role="alert" className="form-error">
            {errors.subjects.message}
          </p>
        )}
      </fieldset>

      <FormField
        id="needsNote"
        label="A note on your student's needs"
        optional
        error={errors.needsNote?.message}
      >
        <textarea
          id="needsNote"
          rows={4}
          placeholder="Anything that would help us match the right tutor (learning style, diagnosis-related considerations, etc.)"
          className="form-input"
          aria-invalid={!!errors.needsNote}
          aria-describedby={errors.needsNote ? "needsNote-error" : undefined}
          {...register("needsNote")}
        />
      </FormField>

      <FormField
        id="availability"
        label="Preferred Availability"
        error={errors.availability?.message}
      >
        <input
          id="availability"
          type="text"
          placeholder="e.g. Weekday afternoons, Sunday evenings"
          className="form-input"
          aria-invalid={!!errors.availability}
          aria-describedby={errors.availability ? "availability-error" : undefined}
          {...register("availability")}
        />
      </FormField>

      <div>
        <label htmlFor="consent" className="flex min-h-[44px] items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 accent-secondary"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span className="text-ink/85">
            I am this student&apos;s parent/guardian and authorize Brain
            Warrior Academy to contact me about free tutoring services.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="form-error">
            {errors.consent.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Submitting…" : "Submit Registration"}
      </button>
    </form>
  );
}
