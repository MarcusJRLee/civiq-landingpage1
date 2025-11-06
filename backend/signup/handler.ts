import { Resend } from "resend";
import type { SignUpData } from "@/types/sign_up_data";

export async function signUpHandler(
  resend: Resend,
  req: any,
  res: any
): Promise<void> {
  try {
    const { data }: { data: SignUpData } = req.body;

    // Server-side validation (extra security)
    if (
      !data.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.toLowerCase())
    ) {
      return res.status(400).json({ error: "Invalid email" });
    }
    if (!data.zip || !/^\d{5}$/.test(data.zip)) {
      return res.status(400).json({ error: "Invalid ZIP code" });
    }

    // Send email to YOU with the signup info
    // await resend.emails.send({
    //   from: process.env.RESEND_FROM_EMAIL!,
    //   to: process.env.RESEND_TO_EMAIL!,
    //   subject: `CivIQ Sign Up: ${data.email}`,
    //   html: `
    //     <h2>New Signup!</h2>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>ZIP:</strong> ${data.zip}</p>
    //     <p><strong>Timestamp:</strong> ${new Date(
    //       data.timestamp
    //     ).toLocaleString()}</p>
    //   `,
    // });
    console.log(`TODO(mjrlee): Sending: ${JSON.stringify(data)}`);

    res.json({ success: true });
  } catch (reason: unknown) {
    console.error("Signup email error:", reason);
    res.status(500).json({ error: "Failed to process signup" });
  }
}
