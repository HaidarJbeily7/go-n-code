import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";

export default function MessageForm() {
  return (
    <Box my={2} mx={{ base: 2, md: 32 }} p={12} zIndex={1}>
      <Flex
        justifyContent={"space-between"}
        gap={4}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box w={"100%"}>
          <Text
            mb={{ base: 2, md: 4 }}
            mt={{ base: 4, md: 8 }}
            fontWeight={500}
            fontSize={{ base: "12px", md: "16px" }}
          >
            Name
          </Text>
          <Input
            focusBorderColor="#FFA500"
            fontSize={{ base: "12px", md: "16px" }}
            minH={14}
            bg={"#F7F6FE"}
            placeholder="Your Name"
            _placeholder={{
              color: "#737588",

              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
        <Box w={"100%"}>
          <Text
            mb={{ base: 2, md: 4 }}
            mt={{ base: 4, md: 8 }}
            fontWeight={500}
            fontSize={{ base: "12px", md: "16px" }}
          >
            Phone
          </Text>
          <Input
            minH={14}
            bg={"#F7F6FE"}
            fontSize={{ base: "12px", md: "16px" }}
            focusBorderColor="#FFA500"
            placeholder="Phone Number"
            _placeholder={{
              color: "#737588",

              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
        <Box w={"100%"}>
          <Text
            mb={{ base: 2, md: 4 }}
            mt={{ base: 4, md: 8 }}
            fontWeight={500}
            fontSize={{ base: "12px", md: "16px" }}
          >
            Email Address
          </Text>
          <Input
            minH={14}
            bg={"#F7F6FE"}
            fontSize={{ base: "12px", md: "16px" }}
            focusBorderColor="#FFA500"
            placeholder="Your Email"
            _placeholder={{
              color: "#737588",

              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
      </Flex>

      <Text
        mb={{ base: 2, md: 4 }}
        mt={{ base: 4, md: 8 }}
        fontWeight={500}
        fontSize={{ base: "12px", md: "16px" }}
      >
        Messages
      </Text>
      <Textarea
        minH={"30vh"}
        bg={"#F7F6FE"}
        fontSize={{ base: "12px", md: "16px" }}
        focusBorderColor="#FFA500"
        placeholder="Message"
        _placeholder={{
          color: "#737588",

          fontWeight: "500",
        }}
        size="lg"
      />

      <Flex justifyContent={"center"}>
        <Button
          zIndex={2}
          mt={16}
          mb={32}
          rounded={"10px"}
          minH={{ base: 8, md: 16 }}
          px={{ base: 16, md: 24 }}
          py={{ base: 8, md: 10 }}
          bg="#FFA500"
          color={"#ffffff"}
          _hover={{
            bg: "#ffc14d",
          }}
        >
          Submit Now
        </Button>
      </Flex>
    </Box>
  );
}
