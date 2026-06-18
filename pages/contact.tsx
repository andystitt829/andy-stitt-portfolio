import Head from "next/head";
import { Container, Heading, List, Text } from "@chakra-ui/react";
import { Header } from "@/stories/Header";
import { Footer } from "@/stories/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <Container p="8" as="main">
        <Heading as="h1" size="3xl">
          Contact
        </Heading>
        <Text>I am available for the following opportunities:</Text>
        <List.Root ps="6">
          <List.Item>
            Website builds with PHP-based content management systems like
            WordPress and Statamic
          </List.Item>
          <List.Item>
            Website builds with Jamstack tools such as 11ty and Astro
          </List.Item>
          <List.Item>Accessibility auditing and remediation work</List.Item>
          <List.Item>Design systems work</List.Item>
        </List.Root>
        <Text>
          If needed to do design systems work, it's best if I'm part of a team.
          For accessibility auditing, remediation work, and straightforward
          website builds, I can do those solo.
        </Text>
        <Text>
          Please email me at andystitt@proton.me if you’re interested in working
          with me. Rates will depend on the project and work involved.
        </Text>
        <Heading as="h2" size="2xl" pt="6">
          Accessibility
        </Heading>
        <Text>
          You can also contact me if you cannot access any information on this
          site due to lack of accessibility. I strive to conform to WCAG 2.1 AA
          and use automated and manual testing. However, I’m not perfect, and
          accessibility is a journey, so please reach out if something’s not
          working for you.
        </Text>
      </Container>
      <Footer />
    </>
  );
}
