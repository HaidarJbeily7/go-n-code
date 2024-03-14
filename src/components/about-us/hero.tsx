import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import SimpleSidebar from "../sidebar";

export default function Hero() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "radial-gradient(#FFA50026, #F8F9FC)",
      }}
    >
      <Navbar />
      <SimpleSidebar />
      <Box>
        <Flex
          justifyContent={"space-between"}
          my={{ base: 2, md: 4 }}
          mx={{ base: 2, md: 24 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            maxW={{ base: "100%", md: "45%" }}
            textAlign={{ base: "center", md: "start" }}
            my={{ base: 4, md: 24 }}
          >
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={{ base: "35px", md: "40px", lg: "50px" }}
              lineHeight={"78px"}
              color={"#393536"}
              whiteSpace={"pre-line"}
            >
              <span className="text-[#FFA500]">GoNCode</span> Is {"\n"} Where
              Innovation Meets Expertise To Elevate Your Business
            </Heading>
          </Box>
          <Box>
            <img height={700} width={700} src="/about-us/about-us-hero.gif" />
          </Box>
        </Flex>
        <Box position="relative">
          <div
            style={{
              position: "absolute",
              bottom: 1,
              left: 40,
              zIndex: 0,
            }}
          >
            <img src={"/homepage/polish-circle.svg"} />
          </div>
        </Box>
      </Box>
    </div>
  );
}
