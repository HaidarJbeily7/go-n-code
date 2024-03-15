import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export default function WhoWeAre() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "#FFFFFF",
      }}
    >
      <Box>
        <Flex
          justifyContent={"space-between"}
          my={{ base: 8, md: 16 }}
          mx={{ base: 2, md: 24 }}
          gap={12}
          flexDir={{ base: "column-reverse", lg: "row" }}
          textAlign={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Box maxW={{ base: "100%", md: "50%" }} mx={8}>
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
              color={"#FFA500"}
              whiteSpace={"pre-line"}
              display={{ base: "none", lg: "block" }}
            >
              Who We Are?
            </Heading>
            <Box>
              <Text
                fontWeight={700}
                fontSize={"64px"}
                color={"#FFA500"}
                opacity={"40%"}
              >
                01
              </Text>
              <Text
                fontWeight={400}
                fontSize={{ base: "15px", md: "20px" }}
                color={"#555555"}
                lineHeight={{ base: "20px", md: "30px" }}
              >
                GoNCode is where innovation meets expertise. As a leading IT
                solutions company based in Dubai UAE, we specialize in
                delivering high-tech solutions tailored to meet the unique needs
                of enterprises, startups, and small businesses. Our commitment
                is to elevate your business through strategic and customized
                software development services.
              </Text>
            </Box>
            <Flex gap={16} mt={16} flexDir={{ base: "column", lg: "row" }}>
              <Box>
                <Text
                  fontWeight={700}
                  fontSize={"64px"}
                  color={"#FFA500"}
                  opacity={"40%"}
                >
                  02
                </Text>
                <Text
                  fontWeight={400}
                  fontSize={{ base: "15px", md: "20px" }}
                  color={"#555555"}
                  lineHeight={{ base: "20px", md: "30px" }}
                  whiteSpace={"break-spaces"}
                >
                  At GoNCode, we understand the dynamic landscape of the digital
                  era, and our team of seasoned professionals is dedicated to
                  providing top-notch IT solutions that drive growth and enhance
                  operational efficiency.
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight={700}
                  fontSize={"64px"}
                  color={"#FFA500"}
                  opacity={"40%"}
                >
                  03
                </Text>
                <Text
                  fontWeight={400}
                  fontSize={{ base: "15px", md: "20px" }}
                  color={"#555555"}
                  lineHeight={{ base: "20px", md: "30px" }}
                  whiteSpace={"break-spaces"}
                >
                  Whether you're a large enterprise seeking scalable solutions,
                  a startup aiming to disrupt the market, or a small business
                  looking to optimize processes, we have the expertise to
                  transform your vision into reality.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box my={{ base: 2, md: 8, lg: 24 }}>
            <img src="/about-us/who-we-are.svg" />
          </Box>
          <Heading
            as={"h1"}
            fontWeight={600}
            fontSize={"35px"}
            lineHeight={"50px"}
            color={"#FFA500"}
            whiteSpace={"pre-line"}
            display={{ base: "block", lg: "none" }}
          >
            Who We Are?
          </Heading>
        </Flex>
      </Box>
    </div>
  );
}
