import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import PartnerList from "./partnersList";
import OutlineButton from "./home-components/outline-button";

export default function HomeAboutUs() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#F8F9FC]">
        <Flex
          justifyContent={"space-between"}
          my={{ base: 2, md: 20 }}
          mx={{ base: 2, md: 28 }}
          flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
        >
          <Box>
            <Box mb={16} display={{ base: "none", md: "none", lg: "block" }}>
              <img src={"/homepage/polish-circle.svg"} />
            </Box>
            <Flex m={{ base: 8, md: 16, lg: 0 }} justifyContent={"center"}>
              <img src="/homepage/companies/aboutus.svg" />
            </Flex>
          </Box>
          <Box
            maxW={{ base: "100%", md: "100%", lg: "45%" }}
            mt={16}
            textAlign={{ base: "center", md: "start" }}
          >
            <OutlineButton text={"About Us"} marginx={0} marginy={4} />
            <Heading
              fontWeight={700}
              fontSize={{ base: "35px", md: "40px", lg: "50px" }}
              lineHeight={{ base: "50px", md: "78px" }}
              color={"#393536"}
            >
              <span className="text-[#FFA500]">GoNCode's</span>, A Premier IT
              Solutions Provider
            </Heading>
            <Text
              fontWeight={400}
              fontSize={{ base: "15px", md: "16px", lg: "20px" }}
              lineHeight={"30px"}
              color={"#666666"}
              mt={8}
            >
              Based in Dubai, specializes in bespoke, high-tech solutions for
              businesses across the spectrum - from startups to large
              enterprises.
            </Text>
            <Box
              ml={{ base: 4, md: 4, lg: 16 }}
              mt={16}
              mr={{ base: 4, md: 8, lg: 24 }}
            >
              <Flex alignItems={"flex-start"}>
                <img src="/homepage/start-quote.svg" />
                <Text
                  fontWeight={400}
                  fontSize={{ base: "15px", md: "16px", lg: "20px" }}
                  lineHeight={"30px"}
                  color={"#666666"}
                  ml={4}
                  maxW={{ base: "100%", md: "95%", lg: "75%" }}
                >
                  Choose PoGoNCode For Our Fresh, Creative Approaches,
                  Customized Offerings, Proven Expertise, And Unwavering
                  Commitment To Your Success.
                </Text>
              </Flex>
              <Flex mt={8} ml={12}>
                <Text
                  fontWeight={400}
                  fontSize={{ base: "15px", md: "16px", lg: "20px" }}
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
          textAlign={{ base: "center", md: "center", lg: "start" }}
          fontWeight={700}
          fontSize={{ base: "35px", md: "40px", lg: "50px" }}
          lineHeight={{ base: "50px", lg: "60px" }}
          color={"#393536"}
          mx={{ base: 0, md: 0, lg: 36 }}
        >
          Partners And <span className="text-[#FFA500]">Sister</span> Companies
        </Text>
        <PartnerList />
      </div>
    </>
  );
}
