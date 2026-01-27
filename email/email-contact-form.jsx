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
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>

      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-6 rounded-md">
              <Heading>You received a new message</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Name: {name}</Text>
              <Text>Email: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
