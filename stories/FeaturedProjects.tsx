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
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="/delaware-covid-19-website/" variant="underline">
                Delaware COVID-19 Website
              </Link>
            </Card.Title>
            <Card.Description>
              My team started auditing and remediating Delaware state agency
              websites that we manage.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="#" variant="underline">
                Mutual Aid in Philly
              </Link>
            </Card.Title>
            <Card.Description>
              My team started auditing and remediating Delaware state agency
              websites that we manage.
            </Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title>
              <Link href="#" variant="underline">
                Turfbuilder
              </Link>
            </Card.Title>
            <Card.Description>
              My team started auditing and remediating Delaware state agency
              websites that we manage.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Container>
  );
};
