import { Container, Flex, Link, Spacer } from "@chakra-ui/react"

export default function Header() {
  return (
    <Container p="8">
        <Flex>
            <Link href="/">Andy Stitt</Link>
            <Spacer />
            <Link href="/about/">About</Link>
        </Flex>
    </Container>
  )
}