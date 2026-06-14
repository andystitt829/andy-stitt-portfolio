import { Container, Heading, Text } from "@chakra-ui/react"
import { Header } from "@/stories/Header"
import { FeaturedProjects } from "@/components/homepage/featured-projects"

export default function Page() {
  return (
    <Container p="8">
    <Header />
    <Heading as="h1" size="3xl">Software Engineer</Heading>
    <Text>I have been in the "tech for good" space since 2008. I've held various roles in digital marketing with web development as my focus.</Text>
    <Text>After spending over a decade working for non-profits, I've been in state government building and maintaining websites and digital products, such as Delaware's first design system.</Text>
    <Text>I specialize in front-end engineering, accessibility, and open-source software.</Text>
    <Heading as="h2" size="2xl">Featured Projects</Heading>
    <FeaturedProjects />
    </Container>
  )
}