import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import PartnerList from "./partnersList";

export default function HomeAboutUs() {
  return (
    <>
      <div
        className="flex min-h-screen flex-col bg-[#F8F9FC]"
        style={{
          background: "#FDFDFDFD",
        }}
      >
        <Flex justifyContent={"space-between"} my={20} mx={36}>
          <Box>
            <Box mb={16}>
              <img src={"/homepage/polish-circle.svg"} />
            </Box>
            <img src="/homepage/companies/aboutus.svg" />
          </Box>
          <Box maxW={"50%"} mt={16}>
            <Button
              color={"#1B6C86"}
              variant="outline"
              mb={4}
              rounded={"45px"}
              border={"2px"}
              _hover={{
                bg: "#F8F9FC",
              }}
            >
              About Us
            </Button>
            <Heading
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
              color={"#393536"}
            >
              <span className="text-[#FFA500]">GoNCode's</span>, A Premier IT
              Solutions Provider
            </Heading>
            <Text
              fontWeight={400}
              fontSize={"20px"}
              lineHeight={"30px"}
              color={"#666666"}
              mt={8}
            >
              Based in Dubai, specializes in bespoke, high-tech solutions for
              businesses across the spectrum - from startups to large
              enterprises.
            </Text>
            <Box ml={16} mt={16} mr={24}>
              <Flex alignItems={"flex-start"}>
                <img src="/homepage/start-quote.svg" />
                <Text
                  fontWeight={400}
                  fontSize={"20px"}
                  lineHeight={"30px"}
                  color={"#666666"}
                  ml={4}
                  maxW={"75%"}
                >
                  Choose PoGoNCode For Our Fresh, Creative Approaches,
                  Customized Offerings, Proven Expertise, And Unwavering
                  Commitment To Your Success.
                </Text>
              </Flex>
              <Flex mt={8} ml={12}>
                <Text
                  fontWeight={400}
                  fontSize={"20px"}
                  lineHeight={"30px"}
                  color={"#666666"}
                  maxW={"80%"}
                >
                  Our Expert Team Is Dedicated Toenhancing Business Growth And
                  Operational Efficiency Withinnovative,Tailored Software
                  Solutions
                </Text>
                <img src="/homepage/end-quote.svg" />
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Text
          fontWeight={700}
          fontSize={"50px"}
          lineHeight={"60px"}
          color={"#393536"}
          mx={36}
        >
          Partners And <span className="text-[#FFA500]">Sister</span> Companies
        </Text>
      </div>
      <PartnerList />
    </>
  );
}
