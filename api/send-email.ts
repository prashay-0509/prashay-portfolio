import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { render } from "@react-email/render";
import {
  getErrorMessage,
  validateEmail,
  validateString,
} from "./_shared/helper.js";
import ContactFormEmail from "../email/email-contact-form.js";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, senderEmail, message } = req.body ?? {};

    // ✅ server-side validation
    if (!validateEmail(senderEmail, 500)) {
      return res.status(400).json({ error: "Invalid sender email" });
    }

    if (!validateString(message, 5000)) {
      return res.status(400).json({ error: "Invalid message" });
    }

    // ✅ render React Email → HTML
    const html = await render(
      ContactFormEmail({
        message: message as string,
        name: name as string,
        senderEmail: senderEmail as string,
      }),
    );

    // ✅ send email
    const data = await resend.emails.send({
      from: "Contact Form <no-reply@yourdomain.com>",
      to: "prashay0509@gmail.com",
      subject: "New message from portfolio contact form",
      replyTo: senderEmail,
      html,
    });

    return res.status(200).json({ ok: true, data });
  } catch (error: unknown) {
    return res.status(500).json({
      error: getErrorMessage(error),
    });
  }
}
