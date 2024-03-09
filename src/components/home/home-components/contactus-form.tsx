import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";

export default function ContactUsForm() {
  return (
    <Box my={16} p={12} bg={"#F6F8FB"}>
      <Text fontWeight={600} fontSize={"37px"}>
        Bringing Your <span className="text-[#FFA500]">Vision</span> To Life
      </Text>
      <Flex justifyContent={"space-between"} gap={4} mt={4}>
        <Box>
          <Text mb={4} fontWeight={500} fontSize={"16px"}>
            Name
          </Text>
          <Input
            focusBorderColor="#FFA500"
            minH={16}
            bg={"#ffffff"}
            placeholder="Your Name"
            _placeholder={{
              color: "#737588",
              fontSize: "16px",
              fontWeight: "500",
            }}
            size="lg"
          />
        </Box>
        <Box>
          <Text mb={4} fontWeight={500} fontSize={"16px"}>
            Phone
          </Text>
          <Input
            minH={16}
            bg={"#ffffff"}
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
      </Flex>
      <Text mb={4} mt={8} fontWeight={500} fontSize={"16px"}>
        Email Address
      </Text>
      <Input
        minH={16}
        bg={"#ffffff"}
        focusBorderColor="#FFA500"
        placeholder="Your Email"
        _placeholder={{
          color: "#737588",
          fontSize: "16px",
          fontWeight: "500",
        }}
        size="lg"
      />
      <Text mb={4} mt={8} fontWeight={500} fontSize={"16px"}>
        Messages
      </Text>
      <Textarea
        minH={32}
        bg={"#ffffff"}
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
          mt={8}
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
