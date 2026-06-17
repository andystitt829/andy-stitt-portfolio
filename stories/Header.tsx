import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  Portal,
  Spacer,
} from "@chakra-ui/react";

const links = [
  {
    title: "Delaware's First Design System",
    href: "/delawares-first-design-system/",
  },
  {
    title: "Delaware Accessibility Transformation",
    href: "/delaware-accessibility-transformation/",
  },
  {
    title: "Delaware COVID-19 Website",
    href: "/delaware-covid-19-website/",
  },
  {
    title: "Mutual Aid in Philly",
    href: "/mutual-aid-in-philly/",
  },
  {
    title: "Turfbuilder",
    href: "/turfbuilder/",
  },
];

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
    <Flex as="ul" gap="4">
      <Box as="li">
        <Link href="/work/">Work</Link>
      </Box>
      <Box as="li">
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button size="sm" variant="outline">
              Featured Projects
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {links.map((link) => (
                  <Menu.Item key={link.href} asChild value={link.title}>
                    <a href={link.href}>{link.title}</a>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
      <Box as="li">
        <Link href="/services/">Contact</Link>
      </Box>
    </Flex>
  </Flex>
);
