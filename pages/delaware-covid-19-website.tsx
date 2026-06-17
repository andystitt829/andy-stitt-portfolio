import Head from "next/head";
import { Prose } from "@/components/ui/prose";
import { Header } from "@/stories/Header";

export default function DelawareCOVIDWebsite() {
  return (
    <>
      <Head>
        <title>Delaware COVID-19 Website</title>
      </Head>
      <Header />
      <Prose mx="auto" px={{ base: "8", lg: "0" }} size="lg" maxW="75ch">
        <h1>Delaware COVID-19 Website</h1>
        <p>
          I started working for the State of Delaware in early February 2020.
          Three weeks later, we were tasked with designing and developing a
          COVID-19 information site that could be used by the state health and
          emergency management departments as well as the Governor’s office.
        </p>
        <p>
          I started the process by building a wireframe of the homepage and
          getting the custom WordPress theme started. My team finished building
          it, and then I was responsible for site management and enhancements.
        </p>
        <p>
          I contributed code and traffic analysis that informed a redesign and
          also built a COVID-19 testing calendar using the WordPress Events
          Calendar plugin by Modern Tribe.
        </p>
        <img
          src="/img/projects-coronavirus-screenshot.webp"
          alt="Screenshot of the Delaware COVID-19 information website."
        />
      </Prose>
    </>
  );
}
