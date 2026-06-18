import { Box, Flex, Heading, Link, List, Spacer, Text } from "@chakra-ui/react";

export const Footer = () => (
  <Flex
    flexDirection={{ base: "column", lg: "row" }}
    gap="5"
    py="8"
    px="12"
    as="footer"
  >
    <Box>
      <Heading as="h2" size="lg" mb="2">
        Pages
      </Heading>
      <List.Root unstyled display="flex" flexDirection="column" gap="2">
        <List.Item>
          <Link href="/" variant="underline">
            Home
          </Link>
        </List.Item>
        <List.Item>
          <Link href="/work/" variant="underline">
            Work
          </Link>
        </List.Item>
        <List.Item>
          <Link href="/contact/" variant="underline">
            Contact
          </Link>
        </List.Item>
      </List.Root>
    </Box>
    <Spacer />
    <Box>
      <Heading as="h2" size="lg" mb="2">
        Featured Projects
      </Heading>
      <List.Root unstyled display="flex" flexDirection="column" gap="2">
        <List.Item>
          <Link href="/delawares-first-design-system/" variant="underline">
            Delaware's First Design System
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href="/delaware-accessibility-transformation/"
            variant="underline"
          >
            Delaware Accessibility Transformation
          </Link>
        </List.Item>
        <List.Item>
          <Link href="/delaware-covid-19-website/" variant="underline">
            Delaware COVID-19 Website
          </Link>
        </List.Item>
        <List.Item>
          <Link href="/mutual-aid-in-philly/" variant="underline">
            Mutual Aid in Philly
          </Link>
        </List.Item>
        <List.Item>
          <Link href="/turfbuilder/" variant="underline">
            TurfBuilder
          </Link>
        </List.Item>
      </List.Root>
    </Box>
    <Spacer />
    <Box>
      <Text>&copy; 2020 - 2026 Andy Stitt</Text>
      <Text>
        This site is built with{" "}
        <Link href="https://react.dev/" variant="underline">
          React
        </Link>
        ,{" "}
        <Link href="https://nextjs.org/" variant="underline">
          NextJS
        </Link>
        , and{" "}
        <Link href="https://www.chakra-ui.com/" variant="underline">
          Chakra UI
        </Link>
      </Text>
    </Box>
  </Flex>
);
