import { Box, Flex, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import WhyCard from "./why-to-choose-card";

export default function WhyToDesktop() {
  return (
    <Grid
      h="auto"
      my={12}
      mx={8}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
      display={{ base: "none", lg: "grid" }}
    >
      <GridItem colSpan={1} rowSpan={1}>
        <WhyCard
          img="/about-us/lump.svg"
          header="Innovative Approach"
          text="We bring a fresh perspective to every project, combining
              creativity and technical excellence to deliver innovative
              solutions that set you apart in the market."
          placement="left"
        />
      </GridItem>
      <GridItem colSpan={2} rowSpan={2}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="/about-us/why-to-choose.svg" width={638} height={638} />
        </Flex>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <WhyCard
          img="/about-us/star-person.svg"
          header="Proven Expertise"
          text=" With a team of seasoned professionals, we boast a track record of successful projects, demonstrating our ability to deliver on time and within budget."
          placement="right"
        />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <WhyCard
          img="/about-us/hand-lump.svg"
          header="Tailored Solutions"
          text="Recognizing that one size doesn't fit all, we craft solutions that align with your unique business requirements, ensuring optimal functionality and user satisfaction."
          placement="left"
        />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <WhyCard
          img="/about-us/people.svg"
          header="Customer-Centric Focus"
          text="Your success is our priority. We collaborate closely with clients, maintaining transparent communication throughout the development process to ensure we exceed your expectations."
          placement="right"
        />
      </GridItem>
    </Grid>
  );
}
