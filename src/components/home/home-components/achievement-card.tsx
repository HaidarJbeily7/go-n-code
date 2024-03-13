import { Box, Text } from "@chakra-ui/react";

interface AchievementCardProps {
  img: string;
  number: string;
  text: string;
}

export default function AchievementCard({
  img,
  number,
  text,
}: AchievementCardProps) {
  return (
    <Box my={8}>
      <img src={img} />
      <Text fontWeight={600} fontSize={"40px"} color={"#393536"}>
        {number}
      </Text>
      <Text fontWeight={600} fontSize={"16px"} color={"#393536"}>
        {text}
      </Text>
    </Box>
  );
}
