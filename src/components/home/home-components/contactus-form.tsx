import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";

export default function HomeContactForm() {
  return (
    <Box my={{ base: 2, md: 16 }} p={{ base: 6, md: 12 }} bg={"#F6F8FB"}>
      <Text
        fontWeight={600}
        fontSize={{ base: "35px", md: "37px" }}
        textAlign={"center"}
      >
        Bringing Your <span className="text-[#FFA500]">Vision</span> To Life
      </Text>
      <Flex justifyContent={"space-between"} gap={{ base: 2, md: 4 }} mt={4}>
        <Box>
          <Text
            mb={{ base: 2, md: 4 }}
            fontWeight={500}
            fontSize={{ base: "12px", md: "16px" }}
          >
            Name
          </Text>
          <Input
            focusBorderColor="#FFA500"
            fontSize={{ base: "12px", md: "16px" }}
            minH={16}
            bg={"#ffffff"}
            placeholder="Your Name"
            _placeholder={{
              color: "#737588",
              fontSize: { base: "12px", md: "16px" },
              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
        <Box>
          <Text
            mb={{ base: 2, md: 4 }}
            fontWeight={500}
            fontSize={{ base: "12px", md: "16px" }}
          >
            Phone
          </Text>
          <Input
            minH={16}
            fontSize={{ base: "12px", md: "16px" }}
            bg={"#ffffff"}
            focusBorderColor="#FFA500"
            placeholder="Phone Number"
            _placeholder={{
              color: "#737588",
              fontSize: { base: "12px", md: "16px" },
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
        Email Address
      </Text>
      <Input
        minH={16}
        bg={"#ffffff"}
        fontSize={{ base: "12px", md: "16px" }}
        focusBorderColor="#FFA500"
        placeholder="Your Email"
        _placeholder={{
          color: "#737588",
          fontSize: { base: "12px", md: "16px" },
          fontWeight: "500",
        }}
        size="lg"
      />
      <Text
        mb={{ base: 2, md: 4 }}
        mt={{ base: 4, md: 8 }}
        fontWeight={500}
        fontSize={{ base: "12px", md: "16px" }}
      >
        Messages
      </Text>
      <Textarea
        minH={32}
        fontSize={{ base: "12px", md: "16px" }}
        bg={"#ffffff"}
        focusBorderColor="#FFA500"
        placeholder="Message"
        _placeholder={{
          color: "#737588",
          fontSize: { base: "12px", md: "16px" },
          fontWeight: "500",
        }}
        size="lg"
      />

      <Flex justifyContent={"center"}>
        <Button
          mt={{ base: 4, md: 8 }}
          w={"90%"}
          minH={16}
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
