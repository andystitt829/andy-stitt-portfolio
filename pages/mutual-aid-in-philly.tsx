import Head from "next/head";
import { Prose } from "@/components/ui/prose";
import { Header } from "@/stories/Header";
import { Footer } from "@/stories/Footer";

export default function MutualAidInPhilly() {
  return (
    <>
      <Head>
        <title>Mutual Aid in Philly</title>
      </Head>
      <Header />
      <Prose mx="auto" px={{ base: "8", lg: "0" }} pt="8" size="lg" maxW="75ch">
        <h1>Mutual Aid in Philly</h1>
        <p>
          This is a personal project that I took on and built for the people of
          my city.
        </p>
        <p>
          We are in a moment of global change in response to multiple crises,
          including climate change. We are creating a new world where our
          systems are built to unite us and take care of each other.
        </p>
        <p>
          <a href="https://mutual-aid-in-philly.netlify.app/">
            Mutual Aid in Philly
          </a>{" "}
          is a directory of mutual aid resources all across the city available
          as an interactive map and list view.
        </p>
        <p>
          I built the site using the Astro static site generator and Supabase. I
          now have another person helping with engineering and data management,
          and we have migrated to Airtable.
        </p>
        <p>
          <a href="https://github.com/andystitt829/mutual-aid-in-philly">
            View this project on Github
          </a>
        </p>
        <img
          src="/img/projects-mutual-aid-in-philly-screenshot.webp"
          alt="Screenshot of the Mutual Aid in Philly website."
        />
      </Prose>
      <Footer />
    </>
  );
}
