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
      mx={{ base: 0, lg: 16 }}
      my={{ base: 2, md: 8, lg: 16 }}
      flexDirection={{
        base: "column",
        lg: placement == "left" ? "row-reverse" : "row",
      }}
      textAlign={{ base: "center", lg: "start" }}
    >
      <Box>
        <img src={img} />
      </Box>
      <Box maxW={{ base: "100%", lg: "50%" }}>
        <Text
          fontWeight={700}
          fontSize={{ base: "25px", lg: "50px" }}
          color={"#00092C"}
        >
          {header}
        </Text>
        <Text
          fontWeight={500}
          fontSize={{ base: "15px", lg: "24px" }}
          color={"#555555"}
          mt={8}
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
}
