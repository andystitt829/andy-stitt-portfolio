import Head from "next/head";
import { Prose } from "@/components/ui/prose";
import { Header } from "@/stories/Header";
import { Footer } from "@/stories/Footer";

export default function DelawareAccessibilityTransformation() {
  return (
    <>
      <Head>
        <title>Delaware Accessibility Transformation</title>
      </Head>
      <Header />
      <Prose mx="auto" px={{ base: "8", lg: "0" }} size="lg" maxW="75ch">
        <h1>Delaware Accessibility Transformation</h1>
        <p>
          The COVID-19 shutdowns forced everyone to stay home and do everything
          online. Accessibility was brought to the forefront of people’s minds
          because so many websites that we all depend on are not accessible to
          people with disabilities.
        </p>
        <p>
          In 2021, we started auditing and remediating the websites that we
          manage. We began with fixing the common State of Delaware header and
          footer that appear on all of our websites.
        </p>
        <p>
          We have since “shifted left” and incorporated accessibility into our
          design and development process.
        </p>
        <p>
          We are currently using the enterprise-level accessibility scanner from
          Level Access to find common errors across sites and strategizing fixes
          to implement based on impact of the errors and traffic to the website.
        </p>
        <p>
          I became our team’s accessibility lead and use WebAim WAVE, axe
          DevTools, ANDI, keyboard testing, and screen reader testing with
          VoiceOver for Mac and NVDA for Windows to do accessibility testing. I
          use my developer background to also provide remediation solutions with
          HTML, CSS, and JavaScript.
        </p>
      </Prose>
      <Footer />
    </>
  );
}
