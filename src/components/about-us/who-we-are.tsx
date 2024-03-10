import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";

export default function WhoWeAre() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "#FFFFFF",
      }}
    >
      <Box>
        <Flex justifyContent={"space-between"} my={16} mx={24} gap={12}>
          <Box maxW={"50%"}>
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
              color={"#FFA500"}
              whiteSpace={"pre-line"}
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
              <Text fontWeight={400} fontSize={"20px"} color={"#555555"}>
                GoNCode is where innovation meets expertise. As a leading IT
                solutions company based in Dubai UAE, we specialize in
                delivering high-tech solutions tailored to meet the unique needs
                of enterprises, startups, and small businesses. Our commitment
                is to elevate your business through strategic and customized
                software development services.
              </Text>
            </Box>
            <Flex gap={16} mt={16}>
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
                  fontSize={"20px"}
                  color={"#555555"}
                  whiteSpace={"break-spaces"}
                >
                  At GoNCode, we {"\n"}understand the dynamic landscape of the
                  digital era, and our team of seasoned professionals is
                  dedicated to providing top-notch IT solutions that drive
                  growth and enhance operational efficiency.
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
                  fontSize={"20px"}
                  color={"#555555"}
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
          <Box my={24}>
            <img src="/about-us/who-we-are.svg" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
