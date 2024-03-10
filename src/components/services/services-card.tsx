import { Box, Flex, Text } from "@chakra-ui/react";

interface ServiceCardProps {
  img: string;
  header: string;
  text: string;
  placement: string;
}

export default function ServicesCard({
  img,
  header,
  text,
  placement,
}: ServiceCardProps) {
  return (
    <Flex
      justifyContent={"space-between"}
      mb={32}
      mx={16}
      flexDirection={placement == "left" ? "row-reverse" : "row"}
    >
      <Box>
        <img src={img} />
      </Box>
      <Box maxW={"50%"}>
        <Text fontWeight={700} fontSize={"50px"} color={"#00092C"}>
          {header}
        </Text>
        <Text fontWeight={500} fontSize={"24px"} color={"#555555"} mt={8}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
}
