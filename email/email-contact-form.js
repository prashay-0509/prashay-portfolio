import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({ message, name, senderEmail }) {
  return React.createElement(
    Html,
    null,
    React.createElement(Head),
    React.createElement(Preview, null, "New message from your portfolio site"),
    React.createElement(
      Tailwind,
      null,
      React.createElement(
        Body,
        { className: "bg-gray-100 text-black" },
        React.createElement(
          Container,
          null,
          React.createElement(
            Section,
            {
              className:
                "bg-white border border-black my-10 px-10 py-6 rounded-md",
            },
            React.createElement(Heading, null, "You received a new message"),
            React.createElement(Text, null, message),
            React.createElement(Hr),
            React.createElement(Text, null, `Name: ${name}`),
            React.createElement(Text, null, `Email: ${senderEmail}`),
          ),
        ),
      ),
    ),
  );
}
