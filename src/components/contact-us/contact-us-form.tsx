import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import MessageForm from "./message-form";
import ContactUsMap from "./contact-us-map";

export default function ContactUsForm() {
  return (
    <Box mt={{ base: 4, md: 16 }} mb={{ base: 4, md: 8 }} bg={"#FDFDFDFD"}>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        gap={[2, 8]}
      >
        <Text
          fontWeight={[600, 700]}
          fontSize={{ base: "13px", md: "14px", lg: "16px" }}
          color={"#393536"}
        >
          GET IN TOUCH
        </Text>
        <Text
          fontWeight={[600, 700]}
          fontSize={{ base: "35px", md: "40px", lg: "48px" }}
          color={"#393536"}
        >
          Contact Us
        </Text>
        <Text
          fontWeight={500}
          fontSize={{ base: "10px", md: "12px", lg: "16px" }}
          color={"#393536"}
          whiteSpace={"break-spaces"}
        >
          Don't miss the opportunity! Start your business' digital
          transformation journey with us.{"\n"} Fill out the form below and get
          ready for success.
        </Text>
      </Flex>
      <MessageForm />
      <Box position="relative">
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            zIndex: 0,
          }}
        >
          <img src={"/homepage/polish-circle.svg"} />
        </div>
      </Box>
      <Box position={"relative"}>
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
      </Box>
      <ContactUsMap />
    </Box>
  );
}
