import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  Text,
  Input,
  Button,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function MapHeader() {
  return (
    <Box
      maxW={"100%"}
      alignSelf={"center"}
      rounded={"10px"}
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: "100%", // Keep the max width from the original style
      }}
    >
      <Grid
        templateColumns={"repeat(3,1fr)"}
        gap={{ base: 2, lg: 12 }}
        mx={{ base: 2, lg: 16 }}
      >
        <GridItem
          bg={"#FFFFFF"}
          border={"1px"}
          borderColor={"#E3E3E3"}
          rounded={"10px"}
          boxShadow="2xl"
        >
          <Flex
            p={{ base: 4, md: 16 }}
            justifyContent={"center"}
            gap={{ base: 2, lg: 4 }}
          >
            <Box w={{ base: "20px", lg: "50px" }}>
              <img src="/contact-us/contact-icon.svg" />
            </Box>
            <Box>
              <Text
                fontWeight={600}
                fontSize={{ base: "8px", md: "14px", lg: "20px" }}
                color={"#101A29"}
              >
                Contacts us
              </Text>
              <Text
                fontWeight={400}
                fontSize={{ base: "5px", md: "10px", lg: "16px" }}
                color={"#101A29"}
              >
                88 01234 2345 12
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg={"#FFFFFF"}
          border={"1px"}
          borderColor={"#E3E3E3"}
          rounded={"10px"}
          boxShadow="2xl"
        >
          <Flex
            p={{ base: 4, md: 16 }}
            justifyContent={"center"}
            gap={{ base: 2, lg: 4 }}
          >
            <Box w={{ base: "20px", lg: "50px" }}>
              <img src="/contact-us/email-icon.svg" />
            </Box>
            <Box>
              <Text
                fontWeight={600}
                fontSize={{ base: "8px", md: "14px", lg: "20px" }}
                color={"#101A29"}
              >
                Email
              </Text>
              <Text
                fontWeight={400}
                fontSize={{ base: "5px", md: "10px", lg: "16px" }}
                color={"#101A29"}
              >
                Comism@mail.com
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg={"#FFFFFF"}
          border={"1px"}
          borderColor={"#E3E3E3"}
          rounded={"10px"}
          boxShadow="2xl"
        >
          <Flex
            p={{ base: 4, md: 16 }}
            justifyContent={"center"}
            gap={{ base: 2, lg: 4 }}
          >
            <Box w={{ base: "20px", lg: "50px" }}>
              <img src="/contact-us/location-icon.svg" />
            </Box>

            <Box>
              <Text
                fontWeight={600}
                fontSize={{ base: "8px", md: "14px", lg: "20px" }}
                color={"#101A29"}
              >
                Location
              </Text>
              <Text
                fontWeight={400}
                fontSize={{ base: "5px", md: "10px", lg: "16px" }}
                color={"#101A29"}
              >
                99 united,America
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
