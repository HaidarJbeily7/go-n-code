import { Box, Flex, Text, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import PartnerList from "./partnersList";
import ServicesList from "./home-components/services-list";

export default function HomeServices() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F8FB]">
      <Flex justifyContent={"space-between"} my={20} mx={36} gap={16}>
        <Box>
          <img src="/homepage/services/services-main.svg" />
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
            Services
          </Button>
          <Box maxW={"85%"}>
            <Heading
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
              color={"#393536"}
            >
              Service We Provide
            </Heading>
            <Text
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"#666666"}
              mt={4}
            >
              With our Hight quality services we help you to acheive your goals
              and more
            </Text>
          </Box>

          <SimpleGrid columns={2} spacing={10} mt={20}>
            <ServicesList
              img={"/homepage/services/web-dev.svg"}
              header={"Web Development"}
              description={
                "Transforming your vision into reality with bespoke web solutions – where functionality meets extraordinary design"
              }
            />
            <ServicesList
              img={"/homepage/services/uiux.svg"}
              header={"UI/UX + Graphic Design"}
              description={
                "Blending art and technology to create stunning, user-centric designs that not only look great but feel intuitively right"
              }
            />
            <ServicesList
              img={"/homepage/services/mobile-dev.svg"}
              header={"Mobile Development"}
              description={
                "Crafting exceptional mobile experiences – your gateway to engaging users across iOS and Android platforms with unparalleled proficiency"
              }
            />
            <ServicesList
              img={"/homepage/services/blockchain-dev.svg"}
              header={"Blockchain Development"}
              description={
                "Leading the blockchain revolution with tailor-made solutions that offer security, efficiency, and transparency for your business needs"
              }
            />
          </SimpleGrid>
        </Box>
      </Flex>
      <div
        style={{
          position: "absolute",
          bottom: 1,
          right: 1,
          zIndex: 0,
        }}
      >
        <img src="/homepage/services/bg-bottom-right.svg" />
      </div>
    </div>
  );
}
