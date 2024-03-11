import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import MessageForm from "./message-form";
import ContactUsMap from "./contact-us-map";

export default function ContactUsForm() {
  return (
    <Box mt={16} mb={8} bg={"#FDFDFDFD"}>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        gap={8}
      >
        <Text fontWeight={700} fontSize={"16px"} color={"#393536"}>
          GET IN TOUCH
        </Text>
        <Text fontWeight={700} fontSize={"48px"} color={"#393536"}>
          Contact Us
        </Text>
        <Text
          fontWeight={500}
          fontSize={"16px"}
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
