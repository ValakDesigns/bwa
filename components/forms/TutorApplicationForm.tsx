"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  tutorApplicationSchema,
  type TutorApplicationValues,
} from "@/lib/validation";
import FormField from "./FormField";
import FormSuccess from "./FormSuccess";
import FormSubmitError from "./FormSubmitError";

const SUBJECT_OPTIONS = [
  { value: "math", label: "Math" },
  { value: "english", label: "English" },
] as const;

export default function TutorApplicationForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<TutorApplicationValues>({
    resolver: zodResolver(tutorApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      subjects: [],
      availability: "",
      experience: "",
      motivation: "",
      consent: undefined as unknown as true,
    },
  });

  async function submit(values: TutorApplicationValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "tutor-application", data: values }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setSubmitError(
          json.error || "Something went wrong submitting your application."
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
        title="Thank you for applying!"
        message="We've received your tutor application and will be in touch soon about next steps."
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

      <FormField id="fullName" label="Full Name" error={errors.fullName?.message}>
        <input
          id="fullName"
          type="text"
          className="form-input"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="email" label="Email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            className="form-input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </FormField>

        <FormField id="phone" label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            className="form-input"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField id="age" label="Age" error={errors.age?.message}>
        <input
          id="age"
          type="number"
          min={13}
          className="form-input max-w-[10rem]"
          aria-invalid={!!errors.age}
          aria-describedby={errors.age ? "age-error" : undefined}
          {...register("age")}
        />
      </FormField>

      <fieldset>
        <legend className="form-label">Subjects you can tutor</legend>
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
        id="availability"
        label="Availability"
        error={errors.availability?.message}
      >
        <input
          id="availability"
          type="text"
          placeholder="e.g. Weekday evenings, Saturday mornings"
          className="form-input"
          aria-invalid={!!errors.availability}
          aria-describedby={errors.availability ? "availability-error" : undefined}
          {...register("availability")}
        />
      </FormField>

      <FormField
        id="experience"
        label="Prior Experience"
        optional
        error={errors.experience?.message}
      >
        <textarea
          id="experience"
          rows={4}
          className="form-input"
          aria-invalid={!!errors.experience}
          aria-describedby={errors.experience ? "experience-error" : undefined}
          {...register("experience")}
        />
      </FormField>

      <FormField
        id="motivation"
        label="Why do you want to tutor with us?"
        error={errors.motivation?.message}
      >
        <textarea
          id="motivation"
          rows={4}
          className="form-input"
          aria-invalid={!!errors.motivation}
          aria-describedby={errors.motivation ? "motivation-error" : undefined}
          {...register("motivation")}
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
            I consent to be contacted by Brain Warrior Academy about my
            tutor application.
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
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
