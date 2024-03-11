import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";

export default function ContactUsHero() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "radial-gradient(#FFA50026, #F8F9FC)",
      }}
    >
      <Navbar />
      <Box>
        <Flex justifyContent={"space-between"} my={4} mx={24}>
          <Box maxW={"45%"} my={24}>
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
              color={"#393536"}
              whiteSpace={"pre-line"}
            >
              we are always ready to answer all your inquiries, contact us
              <span className="text-[#FFA500]"> now!</span>
            </Heading>
          </Box>
          <Box>
            <img
              height={700}
              width={700}
              src="/contact-us/contactus-hero.gif"
            />
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
