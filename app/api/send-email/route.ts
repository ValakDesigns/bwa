import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  sendEmailRequestSchema,
  type TutorApplicationValues,
  type StudentRegistrationValues,
} from "@/lib/validation";

export const runtime = "nodejs";

function renderTutorEmail(data: TutorApplicationValues) {
  const subjects = data.subjects.join(", ");
  return `
    <h2>New Tutor Application</h2>
    <p><strong>Full Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Subjects:</strong> ${subjects}</p>
    <p><strong>Availability:</strong> ${data.availability}</p>
    <p><strong>Prior Experience:</strong> ${data.experience || "N/A"}</p>
    <p><strong>Why they want to tutor:</strong> ${data.motivation}</p>
  `;
}

function renderStudentEmail(data: StudentRegistrationValues) {
  const subjects = data.subjects.join(", ");
  return `
    <h2>New Student Registration</h2>
    <p><strong>Student Name:</strong> ${data.studentName}</p>
    <p><strong>Age/Grade:</strong> ${data.gradeOrAge}</p>
    <p><strong>Parent/Guardian Name:</strong> ${data.guardianName}</p>
    <p><strong>Parent/Guardian Email:</strong> ${data.guardianEmail}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Subjects Needed:</strong> ${subjects}</p>
    <p><strong>Preferred Availability:</strong> ${data.availability}</p>
    <p><strong>Note on Student's Needs:</strong> ${data.needsNote || "N/A"}</p>
  `;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = sendEmailRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    // Local dev without a configured Resend key: log and fail gracefully so
    // the UI's error/retry path can still be exercised.
    console.warn(
      "[send-email] Missing RESEND_API_KEY or CONTACT_EMAIL_TO — email not sent. " +
        "Copy .env.local.example to .env.local and fill in real values."
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured on this server yet. Please try again later or contact us directly.",
      },
      { status: 503 }
    );
  }

  const { formType, data } = parsed.data;
  const subject =
    formType === "tutor-application"
      ? `New Tutor Application: ${data.fullName}`
      : `New Student Registration: ${data.studentName}`;
  const html =
    formType === "tutor-application"
      ? renderTutorEmail(data)
      : renderStudentEmail(data);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Brain Warrior Academy <onboarding@resend.dev>", // TODO: replace with a verified sending domain
      to,
      subject,
      html,
    });

    if (error) {
      console.error("[send-email] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[send-email] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
