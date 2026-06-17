import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";
import { Header } from "@/stories/Header";
import { CareerTimeline } from "@/stories/CareerTimeline";
import { FeaturedProjects } from "@/stories/FeaturedProjects";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <Header />
      <Container p="8">
        <Heading as="h1" size="3xl">
          Work
        </Heading>
      </Container>
      <CareerTimeline />
      <FeaturedProjects />
    </>
  );
}
