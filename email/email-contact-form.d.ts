import type { ReactElement } from "react";

declare module "./email-contact-form.jsx" {
  type ContactFormEmailProps = {
    message: string;
    name: string;
    senderEmail: string;
  };

  export default function ContactFormEmail(
    props: ContactFormEmailProps,
  ): ReactElement;
}
