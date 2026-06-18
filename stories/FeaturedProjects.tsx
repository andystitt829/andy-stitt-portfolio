import {
  Badge,
  Card,
  Container,
  Heading,
  Link,
  List,
  SimpleGrid,
} from "@chakra-ui/react";

export const FeaturedProjects = () => {
  return (
    <Container py="8" px="12">
      <Heading as="h2" size="2xl">
        Featured Projects
      </Heading>
      <SimpleGrid minChildWidth="12rem" gap="20px" pt="12">
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="/delawares-first-design-system/" variant="underline">
                Delaware's First Design System
              </Link>
            </Card.Title>
            <Card.Description>
              My team at work created Delaware’s first design system called
              Lighthouse.
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <List.Root
              unstyled
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="2"
            >
              <List.Item>
                <Badge variant="solid">HTML</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">SASS</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">JavaScript</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Bootstrap</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">WordPress</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Storybook</Badge>
              </List.Item>
            </List.Root>
          </Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link
                href="/delaware-accessibility-transformation/"
                variant="underline"
              >
                Delaware Accessibility Transformation
              </Link>
            </Card.Title>
            <Card.Description>
              My team started auditing and remediating Delaware state agency
              websites that we manage.
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <List.Root
              unstyled
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="2"
            >
              <List.Item>
                <Badge variant="solid">HTML</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">CSS</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">JavaScript</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Bootstrap</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">WordPress</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Accessibility Testing</Badge>
              </List.Item>
            </List.Root>
          </Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="/delaware-covid-19-website/" variant="underline">
                Delaware COVID-19 Website
              </Link>
            </Card.Title>
            <Card.Description>
              I helped build and manage the Delaware COVID-19 information
              website.
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <List.Root
              unstyled
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="2"
            >
              <List.Item>
                <Badge variant="solid">HTML</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">CSS</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">JavaScript</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Bootstrap</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">WordPress</Badge>
              </List.Item>
            </List.Root>
          </Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="/mutual-aid-in-philly/" variant="underline">
                Mutual Aid in Philly
              </Link>
            </Card.Title>
            <Card.Description>
              This is a personal project that I took on and built for the people
              of my city.
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <List.Root
              unstyled
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="2"
            >
              <List.Item>
                <Badge variant="solid">HTML</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Tailwind CSS</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">JavaScript</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Astro</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Airtable</Badge>
              </List.Item>
            </List.Root>
          </Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="/turfbuilder/" variant="underline">
                Turfbuilder
              </Link>
            </Card.Title>
            <Card.Description>
              This is a collaborative project that I started working on through
              local political organizing.
            </Card.Description>
          </Card.Body>
          <Card.Footer>
            <List.Root
              unstyled
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="2"
            >
              <List.Item>
                <Badge variant="solid">HTML</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Tailwind CSS</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">JavaScript</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Sveltekit</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Bits UI</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Docker</Badge>
              </List.Item>
              <List.Item>
                <Badge variant="solid">Postgres</Badge>
              </List.Item>
            </List.Root>
          </Card.Footer>
        </Card.Root>
      </SimpleGrid>
    </Container>
  );
};
