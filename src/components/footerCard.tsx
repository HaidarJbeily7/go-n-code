import { Box, Text, Flex } from "@chakra-ui/react";
interface FooterCardProps {
  imagePath: string;
  date: string;
  description: string;
}
export default function FooterCard({
  imagePath,
  date,
  description,
}: FooterCardProps) {
  return (
    <Box as="a" href={"#"}>
      <Flex>
        <img src={imagePath} />
        <Box ml={4}>
          <Flex gap={2}>
            <img src="/footer/calender.svg" />
            <Text fontWeight={400} fontSize={"12px"}>
              {date}
            </Text>
          </Flex>

          <Text fontWeight={600} fontSize={"16px"} lineHeight={"25px"}>
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
