import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";

export default function MessageForm() {
  return (
    <Box my={2} mx={32} p={12}>
      <Flex justifyContent={"space-between"} gap={4}>
        <Box w={"100%"}>
          <Text mb={4} fontWeight={500} fontSize={"16px"}>
            Name
          </Text>
          <Input
            focusBorderColor="#FFA500"
            minH={14}
            bg={"#F7F6FE"}
            placeholder="Your Name"
            _placeholder={{
              color: "#737588",
              fontSize: "16px",
              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
        <Box w={"100%"}>
          <Text mb={4} fontWeight={500} fontSize={"16px"}>
            Phone
          </Text>
          <Input
            minH={14}
            bg={"#F7F6FE"}
            focusBorderColor="#FFA500"
            placeholder="Phone Number"
            _placeholder={{
              color: "#737588",
              fontSize: "16px",
              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
        <Box w={"100%"}>
          <Text mb={4} fontWeight={500} fontSize={"16px"}>
            Email Address
          </Text>
          <Input
            minH={14}
            bg={"#F7F6FE"}
            focusBorderColor="#FFA500"
            placeholder="Your Email"
            _placeholder={{
              color: "#737588",
              fontSize: "16px",
              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
      </Flex>

      <Text mb={4} mt={5} fontWeight={500} fontSize={"16px"}>
        Messages
      </Text>
      <Textarea
        minH={"30vh"}
        bg={"#F7F6FE"}
        focusBorderColor="#FFA500"
        placeholder="Message"
        _placeholder={{
          color: "#737588",
          fontSize: "16px",
          fontWeight: "500",
        }}
        size="lg"
      />

      <Flex justifyContent={"center"}>
        <Button
          mt={16}
          mb={32}
          rounded={"10px"}
          minH={16}
          px={24}
          py={10}
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
