import Head from "next/head";
import { Prose } from "@/components/ui/prose";
import { Header } from "@/stories/Header";

export default function TurfBuilder() {
  return (
    <>
      <Head>
        <title>TurfBuilder</title>
      </Head>
      <Header />
      <Prose mx="auto" px={{ base: "8", lg: "0" }} size="lg" maxW="75ch">
        <h1>TurfBuilder</h1>
        <p>
          This is a collaborative project that I started working on through a
          local anti-ICE group.
        </p>
        <p>
          TurfBuilder is an open-source tool that helps groups of people
          organize canvassing operations. It is inspired by NGP Minivan, a
          canvassing tool used by the Democratic Party and other progressive
          organizations.
        </p>
        <p>
          This app is built using Sveltekit, Bits UI, Docker, a Postgres
          database, and Storybook. I contributed front-end code and
          accessibility testing.
        </p>
        <p>
          <a href="https://github.com/joeldesante/TurfBuilder">
            View this project on Github
          </a>
        </p>
      </Prose>
    </>
  );
}
