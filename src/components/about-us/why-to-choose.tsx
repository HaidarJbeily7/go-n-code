import { Box, Flex, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import WhyCard from "./about-us-components/why-to-choose-card";

export default function WhyToChoose() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "#F6F8FB",
      }}
    >
      <Box mt={12}>
        <Flex justifyContent={"center"}>
          <Heading fontWeight={700} fontSize={"50px"} color={"#00092C"}>
            Why Choose <span className="text-[#FFA500]">GoNCode?</span>
          </Heading>
        </Flex>
        <Grid
          h="auto"
          my={12}
          mx={8}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
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
        <Box>
          <Flex justifyContent={"center"}>
            <Box maxW={"65%"} textAlign={"center"}>
              <Text
                fontWeight={600}
                fontSize={"16px"}
                color={"#555555"}
                whiteSpace={"pre-line"}
              >
                Discover the possibilities with [Your Company Name]. Let us be
                your strategic partner in navigating the digital{"\n"} landscape
                and achieving unparalleled success in the ever-evolving world of
                technology.{"\n"} Contact Us to embark on a transformative
                journey with GoNCode!
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
