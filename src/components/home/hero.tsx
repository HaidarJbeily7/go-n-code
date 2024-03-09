import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";

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
            <Button
              color={"#1B6C86"}
              variant="outline"
              m={16}
              rounded={"45px"}
              border={"2px"}
              _hover={{
                bg: "#F8F9FC",
              }}
            >
              View More
            </Button>
            <img src={"/homepage/polish-circle.svg"} />
          </Box>
          <Box>
            <img src="/homepage/services/hero.svg" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}