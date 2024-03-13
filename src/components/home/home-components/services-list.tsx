import { Box, Text, Flex } from "@chakra-ui/react";

interface ServiceListProps {
  img: string;
  header: string;
  description: string;
}

export default function ServicesList({
  img,
  header,
  description,
}: ServiceListProps) {
  return (
    <Flex
      flexDir={"column"}
      alignItems={{ base: "center", md: "center", lg: "start" }}
    >
      <Box>
        <img src={img} />
      </Box>
      <Text fontWeight={600} fontSize={"20px"} color={"#393536"} my={2}>
        {header}
      </Text>
      <Text
        as={"h3"}
        fontWeight={400}
        fontSize={"16px"}
        lineHeight={"24px"}
        color={"#666666"}
      >
        {description}
      </Text>
    </Flex>
  );
}
