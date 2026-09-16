import { z } from "zod";

/** Shared validation schema for the Tutor Application form. */
export const tutorApplicationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  age: z
    .string()
    .trim()
    .min(1, "Please enter your age.")
    .refine((val) => {
      const n = Number(val);
      return !Number.isNaN(n) && n >= 13 && n <= 120;
    }, "Tutors must be 13 or older. Please enter a valid age."),
  subjects: z
    .array(z.enum(["math", "english"]))
    .min(1, "Please select at least one subject."),
  availability: z.string().trim().min(2, "Please tell us about your availability."),
  experience: z.string().trim().max(2000).optional().or(z.literal("")),
  motivation: z
    .string()
    .trim()
    .min(10, "Please tell us a bit more (at least 10 characters)."),
  consent: z.literal(true, {
    message: "You must agree before submitting.",
  }),
});

export type TutorApplicationValues = z.infer<typeof tutorApplicationSchema>;

/** Shared validation schema for the Student Registration form. */
export const studentRegistrationSchema = z.object({
  studentName: z.string().trim().min(2, "Please enter the student's name."),
  gradeOrAge: z.string().trim().min(1, "Please enter the student's age or grade."),
  guardianName: z.string().trim().min(2, "Please enter a parent/guardian name."),
  guardianEmail: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  subjects: z
    .array(z.enum(["math", "english"]))
    .min(1, "Please select at least one subject."),
  needsNote: z.string().trim().max(2000).optional().or(z.literal("")),
  availability: z.string().trim().min(2, "Please tell us about your availability."),
  consent: z.literal(true, {
    message: "You must agree before submitting.",
  }),
});

export type StudentRegistrationValues = z.infer<typeof studentRegistrationSchema>;

/** Discriminated wrapper used by the shared /api/send-email endpoint. */
export const sendEmailRequestSchema = z.union([
  z.object({ formType: z.literal("tutor-application"), data: tutorApplicationSchema }),
  z.object({ formType: z.literal("student-registration"), data: studentRegistrationSchema }),
]);

export type SendEmailRequest = z.infer<typeof sendEmailRequestSchema>;
