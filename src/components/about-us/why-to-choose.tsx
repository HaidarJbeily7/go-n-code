import { Box, Flex, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import WhyCard from "./about-us-components/why-to-choose-card";
import WhyToDesktop from "./about-us-components/why-to-choose-desktop";
import WhyToMobile from "./about-us-components/why-to-choose-mobile";

export default function WhyToChoose() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "#F6F8FB",
      }}
    >
      <Box my={12}>
        <Flex
          justifyContent={"center"}
          textAlign={{ base: "center", md: "start" }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "35px", md: "50px" }}
            color={"#00092C"}
          >
            Why Choose <span className="text-[#FFA500]">GoNCode?</span>
          </Heading>
        </Flex>
        <WhyToDesktop />
        <WhyToMobile />
        <Box>
          <Flex
            justifyContent={"center"}
            display={{ base: "none", lg: "flex" }}
          >
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
