import { Box, Flex, Icon, Link, Spacer } from "@chakra-ui/react";
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
        <Icon size="lg">
          <DiGithubBadge />
        </Icon>
      </Box>
      <Box as="li">
        <Icon size="lg">
          <FaLinkedin />
        </Icon>
      </Box>
    </Flex>
  </Flex>
);
