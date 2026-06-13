import { Box, Container, Flex, Link, Spacer } from "@chakra-ui/react"

export const Header = () => (
    <Container p="8">
        <Flex as="nav" flexDirection={{ base: "column", md: "row"}} alignItems={{ base: "center", md: "start" }} gap="2">
            <Link href="/">Andy Stitt</Link>
            <Spacer />
            <Flex as="ul" gap="4">
                <Box as="li">
                    <Link href="/about/">About</Link>
                </Box>
                <Box as="li">
                    <Link href="/work/">Work</Link>
                </Box>
                <Box as="li">
                    <Link href="/services/">Services</Link>
                </Box>
                <Box as="li">
                    <Link href="/services/">Contact</Link>
                </Box>
            </Flex>
        </Flex>
    </Container>
);
