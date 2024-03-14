import { Flex, Text } from "@chakra-ui/react";
import WhyCard from "./why-to-choose-card";

export default function WhyToMobile() {
  return (
    <Flex
      mx={2}
      flexDir={{ base: "column" }}
      textAlign={"center"}
      gap={8}
      display={{ base: "flex", lg: "none" }}
      alignItems={"center"}
    >
      <img src="/about-us/why-to-choose.svg" width={638} height={638} />
      <Text
        fontWeight={400}
        fontSize={"16px"}
        color={"#555555"}
        whiteSpace={"pre-line"}
        lineHeight={"25px"}
        mx={4}
        my={4}
      >
        Discover the possibilities with [Your Company Name]. Let us be your
        strategic partner in navigating the digital{"\n"} landscape and
        achieving unparalleled success in the ever-evolving world of technology.
        {"\n"} Contact Us to embark on a transformative journey with GoNCode!
      </Text>
      <WhyCard
        img="/about-us/lump.svg"
        header="Innovative Approach"
        text="We bring a fresh perspective to every project, combining
              creativity and technical excellence to deliver innovative
              solutions that set you apart in the market."
        placement="left"
      />
      <WhyCard
        img="/about-us/star-person.svg"
        header="Proven Expertise"
        text=" With a team of seasoned professionals, we boast a track record of successful projects, demonstrating our ability to deliver on time and within budget."
        placement="right"
      />
      <WhyCard
        img="/about-us/hand-lump.svg"
        header="Tailored Solutions"
        text="Recognizing that one size doesn't fit all, we craft solutions that align with your unique business requirements, ensuring optimal functionality and user satisfaction."
        placement="left"
      />
      <WhyCard
        img="/about-us/people.svg"
        header="Customer-Centric Focus"
        text="Your success is our priority. We collaborate closely with clients, maintaining transparent communication throughout the development process to ensure we exceed your expectations."
        placement="right"
      />
    </Flex>
  );
}
