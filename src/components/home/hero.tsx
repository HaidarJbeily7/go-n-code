import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import OutlineButton from "./home-components/outline-button";
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
          my={{ base: 2, md: 20 }}
          mx={{ base: 2, md: 28 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            maxW={{ base: "100%", md: "45%" }}
            textAlign={{ base: "center", md: "start" }}
          >
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={{ base: "35px", md: "40px", lg: "50px" }}
              lineHeight={{ base: "50px", md: "78px" }}
              color={"#393536"}
            >
              Elevate Your Digital Presence with{" "}
              <span className="text-[#FFA500]">GoNCode's</span> Innovative IT
              Strategies.
            </Heading>
            <Text
              fontWeight={400}
              fontSize={"20px"}
              lineHeight={"30px"}
              color={"#949494"}
              mt={8}
            >
              Empowering Enterprises, Startups, and Small Businesses with
              Advanced Technology Solutions.
            </Text>

            <OutlineButton text={"View More"} marginx={16} marginy={16} />

            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <img src={"/homepage/polish-circle.svg"} />
            </Box>
          </Box>
          <Box>
            <img height={650} width={650} src="/homepage/home-hero.gif" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
