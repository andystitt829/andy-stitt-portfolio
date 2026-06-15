import { Container, Heading, Text } from "@chakra-ui/react";

export const Services = () => (
  <Container p="8">
    <Heading as="h1" size="3xl">
      Services
    </Heading>
    <Heading as="h2" size="2xl">
      Web Development
    </Heading>
    <Text>
      Convert designs into working websites using open source software such as
      WordPress, Astro, Statamic, and other CMS libraries
    </Text>
    <Heading as="h2" size="2xl">
      Accessibility
    </Heading>
    <Text>Design reviews, auditing and remediating websites</Text>
    <Heading as="h2" size="2xl">
      Design Systems
    </Heading>
    <Text>
      Help build component libraries, documentation systems, accessibility
      testing, etc.
    </Text>
  </Container>
);
