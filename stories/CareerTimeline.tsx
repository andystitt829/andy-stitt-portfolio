import { Container, Heading, List, Text, Timeline } from "@chakra-ui/react";
import { LuBriefcase } from "react-icons/lu";

export const CareerTimeline = () => (
  <Container px="8" as="main">
    <Heading as="h2" size="2xl" pt="4" pb="8">
      Career Timeline
    </Heading>
    <Timeline.Root py="5">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuBriefcase />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Government Information Center</Timeline.Title>
          <Timeline.Description>February 2020 - present</Timeline.Description>
          <Text>
            I currently work as a front-end developer and accessibility lead for
            an in-house Delaware digital services agency. We build and maintain
            WordPress websites for state agencies. Accomplishments include:
          </Text>
          <List.Root>
            <List.Item>
              Contributing code to Lighthouse, Delaware's first design system
            </List.Item>
            <List.Item>
              Remediating accessibility issues at scale on almost 80 websites
            </List.Item>
            <List.Item>
              Helping to build and maintain the state COVID-19 information
              website
            </List.Item>
          </List.Root>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
    <Timeline.Root py="5">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuBriefcase />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Dudnyk</Timeline.Title>
          <Timeline.Description>
            September 2019 - January 2020
          </Timeline.Description>
          <Text>
            I was a contract front-end developer and worked on websites, email
            templates, and banner ads for pharmaceutical companies that
            specialize in treating rare diseases.
          </Text>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
    <Timeline.Root py="5">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuBriefcase />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>
            Jewish Federation of Greater Philadelphia
          </Timeline.Title>
          <Timeline.Description>
            January 2017 - September 2019
          </Timeline.Description>
          <Text>
            I managed the organization's web and email marketing program.
            Accomplishments include:
          </Text>
          <List.Root>
            <List.Item>
              Served as technical project manager for the development of the
              redesigned website on WordPress.
            </List.Item>
            <List.Item>
              Created a robust content marketing program that included the new
              website, email newsletters, and social media.
            </List.Item>
            <List.Item>
              The content marketing program increased website visits by 25%, new
              visitors by 30%, and event registrations by 28%.
            </List.Item>
          </List.Root>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
    <Timeline.Root py="5">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuBriefcase />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Full-time Freelance Work</Timeline.Title>
          <Timeline.Description>June 2016 - January 2017</Timeline.Description>
          <Text>
            Provided WordPress consulting services to agencies, for-profit and
            nonprofit organizations, including design customizations, software
            updates and troubleshooting.
          </Text>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
    <Timeline.Root py="5">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuBriefcase />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>PMI Educational Foundation</Timeline.Title>
          <Timeline.Description>March 2007 - June 2016</Timeline.Description>
          <Text>
            I began as a scholarship program administrator and grew into a
            digital marketing specialist. Accomplishments included:
          </Text>
          <List.Root>
            <List.Item>
              Serving as content management lead for website redesign,
              development, and migration to Sitecore CMS.
            </List.Item>
            <List.Item>
              Creating social media sites on Facebook, LinkedIn and Twitter.
            </List.Item>
            <List.Item>
              Creating a new email newsletter on Constant Contact
            </List.Item>
          </List.Root>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  </Container>
);
