import { Box, Flex, Text } from "@chakra-ui/react";

interface WhyCardProps {
  img: string;
  header: string;
  text: string;
  placement: string;
}

export default function WhyCard({
  img,
  header,
  text,
  placement,
}: WhyCardProps) {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={placement == "left" ? "flex-end" : "flex-start"}
      textAlign={placement == "left" ? "right" : "left"}
      ml={4}
      gap={4}
    >
      <Box>
        <img src={img} />
      </Box>
      <Text fontWeight={700} fontSize={"24px"} color={"#00092C"}>
        {header}
      </Text>
      <Text fontWeight={400} fontSize={"16px"} color={"#555555"}>
        {text}
      </Text>
    </Flex>
  );
}
