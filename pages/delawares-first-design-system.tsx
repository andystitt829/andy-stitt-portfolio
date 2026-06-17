import Head from "next/head";
import { Prose } from "@/components/ui/prose";
import { Header } from "@/stories/Header";
import { Footer } from "@/stories/Footer";

export default function DelawaresFirstDesignSystem() {
  return (
    <>
      <Head>
        <title>Delaware's First Design System</title>
      </Head>
      <Header />
      <Prose mx="auto" px={{ base: "8", lg: "0" }} size="lg" maxW="75ch">
        <h1>Delaware's First Design System</h1>
        <p>
          My team at work created Delaware’s first design system called{" "}
          <a href="https://lighthouse.delaware.gov/">Lighthouse</a>. We went
          through a research and competitive analysis process and then designed
          and developed components for Lighthouse.
        </p>
        <p>
          I contributed code to the custom WordPress theme that we will use for
          our clients’ websites as well as the HTML version that external
          agencies and vendors will use for websites that we don’t manage.
        </p>
        <p>
          We started by launching websites for the new{" "}
          <a href="https://governor.delaware.gov/">Governor</a> and{" "}
          <a href="https://ltgov.delaware.gov/">Lieutenant Governor</a>.
        </p>
        <img
          src="/img/projects-governor-screenshot.webp"
          alt="Screenshot of the Delaware Governor's website, which uses the Lighthouse design system."
        />
        <img
          src="/img/projects-ltgov-screenshot.webp"
          alt="Screenshot of the Delaware Lieutenant Governor's website, which uses the Lighthouse design system."
        />
        <p>
          Once those sites were tested and launched, we then released the
          Lighthouse design system documentation for external agencies and
          vendors in Storybook. I was the lead front-end developer for this
          project and used React, Vue, and vanilla JavaScript to put it all
          together.
        </p>
        <img
          src="/img/projects-lighthouse-screenshot.webp"
          alt="Screenshot of Delaware's Lighthouse design system documentation in Storybook."
        />
      </Prose>
      <Footer />
    </>
  );
}
