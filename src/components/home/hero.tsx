import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import OutlineButton from "./home-components/outline-button";

export default function Hero() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "radial-gradient(#FFA50026, #F8F9FC)",
      }}
    >
      <Navbar />
      <Box>
        <Flex justifyContent={"space-between"} my={20} mx={28}>
          <Box maxW={"45%"}>
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
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
            <img src={"/homepage/polish-circle.svg"} />
          </Box>
          <Box>
            <img height={650} width={650} src="/homepage/home-hero.gif" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
