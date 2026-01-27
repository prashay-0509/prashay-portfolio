import { Resend } from "resend";
import { render } from "@react-email/render";
import { validateString, getErrorMessage, validateEmail } from "@/lib/utils";
import ContactFormEmail from "@/components/email/email-contact-form";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const name = formData.get("name");

  if (!validateEmail(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const html = await render(
    ContactFormEmail({
      message: message as string,
      name: name as string,
      senderEmail: senderEmail as string,
    }),
  );

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "prashay0509@gmail.com",
      subject: "Message from contact form of portfolio",
      replyTo: senderEmail as string,
      html,
    });

    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
