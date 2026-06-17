import {
  Box,
  Flex,
  Icon,
  Link,
  Spacer,
  VisuallyHidden,
} from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export const Header = () => (
  <Flex
    as="nav"
    flexDirection={{ base: "column", md: "row" }}
    alignItems={{ base: "center", md: "flex-start" }}
    gap="2"
    py="8"
    px="12"
  >
    <Link href="/">Andy Stitt</Link>
    <Spacer />
    <Flex as="ul" gap="4" alignItems="center">
      <Box as="li">
        <Link href="/work/">Work</Link>
      </Box>
      <Box as="li">
        <Link href="/contact/">Contact</Link>
      </Box>
      <Box as="li">
        <Link href="https://github.com/andystitt829">
          <Icon size="lg">
            <DiGithubBadge />
          </Icon>
          <VisuallyHidden>Github</VisuallyHidden>
        </Link>
      </Box>
      <Box as="li">
        <Link href="https://www.linkedin.com/in/andrewstitt">
          <Icon size="lg">
            <FaLinkedin />
          </Icon>
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </Link>
      </Box>
    </Flex>
  </Flex>
);
