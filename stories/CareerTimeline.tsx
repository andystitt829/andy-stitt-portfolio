import { Container, Heading, Text, Timeline } from "@chakra-ui/react";
import { LuBriefcase } from "react-icons/lu";

export const CareerTimeline = () => (
  <Container p="8">
    <Heading as="h2" size="2xl" py="8">
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
          <Text>Job description goes over here.</Text>
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
          <Text>Job description goes over here.</Text>
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
          <Text>Job description goes over here.</Text>
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
          <Text>Job description goes over here.</Text>
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
          <Text>Job description goes over here.</Text>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  </Container>
);
