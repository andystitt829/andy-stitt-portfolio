import { Card, Link, SimpleGrid } from "@chakra-ui/react"

export const FeaturedProjects = () => {
  return (
    <SimpleGrid minChildWidth="12rem" gap="20px">
    <Card.Root>
      <Card.Body gap="2">
        <Card.Title><Link href="#">Delaware's First Design System</Link></Card.Title>
        <Card.Description>
          My team at work created Delaware’s first design system called Lighthouse.
        </Card.Description>
      </Card.Body>
    </Card.Root>
    <Card.Root>
      <Card.Body gap="2">
        <Card.Title><Link href="#">Delaware Accessibility Transformation</Link></Card.Title>
        <Card.Description>
          My team started auditing and remediating Delaware state agency websites that we manage.
        </Card.Description>
      </Card.Body>
    </Card.Root>
        <Card.Root>
      <Card.Body gap="2">
        <Card.Title><Link href="#">Delaware COVID-19 Website</Link></Card.Title>
        <Card.Description>
          My team started auditing and remediating Delaware state agency websites that we manage.
        </Card.Description>
      </Card.Body>
    </Card.Root>
    <Card.Root>
      <Card.Body gap="2">
        <Card.Title><Link href="#">Mutual Aid in Philly</Link></Card.Title>
        <Card.Description>
          My team started auditing and remediating Delaware state agency websites that we manage.
        </Card.Description>
      </Card.Body>
    </Card.Root>
        <Card.Root>
      <Card.Body gap="2">
        <Card.Title><Link href="#">Turfbuilder</Link></Card.Title>
        <Card.Description>
          My team started auditing and remediating Delaware state agency websites that we manage.
        </Card.Description>
      </Card.Body>
    </Card.Root>
    </SimpleGrid>
  )
}
