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

export default function FooterHeader() {
  return (
    <Box
      //   bg={useColorModeValue("#FFA500", "#FFCC6F")}
      //   bgGradient="linear( #FFCC6F, #FFA500)"

      maxW={{ base: "100%", md: "80%" }}
      alignSelf={"center"}
      rounded={"10px"}
      //   bgImage="/footer/email.svg"
      //   bgPos="center top 25%" // Adjust the position to center and top 25%
      //   bgSize="cover" // Cover the background size
      //   bgRepeat="no-repeat" // Prevent the image from repeating

      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: "100%", // Keep the max width from the original style
        background: `
      url(/footer/email.svg) center left 29% / auto 65% no-repeat, 
      linear-gradient(#FFCC6F, #FFA500)
    `,
      }}
    >
      <Grid
        my={{ base: 2, lg: 12 }}
        mx={{ base: 2, lg: 16 }}
        gap={{ base: 2, lg: 16 }}
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(6,1fr)" }}
      >
        <GridItem colSpan={{ base: 3, md: 3, lg: 2 }} justifySelf={"center"}>
          <Text
            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
            fontWeight={600}
            lineHeight={"51px"}
          >
            Subscribe To Our Newsletter
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 3, lg: 4 }} justifySelf={"center"}>
          <Flex
            h={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            mb={6}
          >
            <Input
              fontSize={{ base: "14px", md: "16px" }}
              placeholder="Your e-mail address"
              color={" #101A29"}
              w={{ base: "250px", md: "350", lg: "390px" }}
              h={{ base: "50px", md: "50px", lg: "60px" }}
              bg={"#FFFFF"}
              borderEndRadius={0}
              sx={{
                "::placeholder": {
                  color: " #101A29",
                },
              }}
            />
            <Button
              colorScheme="teal"
              size="lg"
              fontSize={{ base: "14px", md: "16px" }}
              w={{ base: "97px", md: "100", lg: "155px" }}
              h={{ base: "50px", md: "50px", lg: "60px" }}
              bg={"#393536"}
              borderStartRadius={0}
              _hover={{
                bg: "#504f4f",
              }}
            >
              Submit now
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
