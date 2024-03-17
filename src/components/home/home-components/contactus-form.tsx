import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import { useSendEmail } from "@/utils/send-email";
import { useState } from "react";

export default function HomeContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { sendEmail, isSending } = useSendEmail();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const success = await sendEmail({ name, phoneNumber, email, message });
    if (success) {
      setName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
          isLoading={isSending}
          loadingText="Submitting"
          type="submit"
          onClick={handleSubmit}
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
