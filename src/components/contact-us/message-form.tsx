"use client";
import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
// import { sendEmail } from "@/utils/send-email";
import { useToast } from "@chakra-ui/react";

export default function MessageForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast(); // For showing feedback to the user

  // const handleSubmit = async () => {
  //   // e.preventDefault(); // Prevent default form submission behavior
  //   // await sendEmail({ name, phoneNumber, emailAddress, message });
  //   // Optional: Clear form or show success message
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Don't forget to prevent the default form submit action

    try {
      const response = await fetch("/api/send", {
        // Adjust this URL path as necessary
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phoneNumber, emailAddress, message }),
      });

      if (response.ok) {
        // Assuming the server responds with JSON
        const data = await response.json();
        console.log(data); // For debugging, remove in production
        // Reset form fields here if necessary
        toast({
          title: "Message sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Failed to send message.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
          type="submit"
          onClick={handleSubmit}
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
