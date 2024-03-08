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
      maxW={"80%"}
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
      <Grid my={12} mx={16} gap={16} templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={2}>
          <Text fontSize={"40px"} fontWeight={600} lineHeight={"51px"}>
            Subscribe To Our Newsletter
          </Text>
        </GridItem>
        <GridItem colSpan={4}>
          <Flex h={"100%"} alignItems={"center"} justifyContent={"flex-end"}>
            <Input
              placeholder="Your e-mail address"
              color={" #101A29"}
              w={"418px"}
              h={"60px"}
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
              w={"162px"}
              h={"60px"}
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
