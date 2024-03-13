import { Box, Text } from "@chakra-ui/react";

interface ProjectCardProps {
  img: string;
  title: string;
  name: string;
}

export default function ProjectCard({ img, title, name }: ProjectCardProps) {
  return (
    <Box
      position="relative"
      bg={"#FFA500"}
      pb={4}
      display={{ base: "block", md: "none" }}
    >
      <img src={img} style={{ width: "100%", display: "block" }} />

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        bgGradient="linear(180.56deg, rgba(255, 165, 0, 0) -129.07%, #FFA500 36.43%)"
        p={2}
      >
        <Text fontWeight={500} fontSize={"14px"} color={"#ffffff"}>
          {title}
        </Text>
        <Text fontWeight={700} fontSize={"24px"} color={"#ffffff"}>
          {name}
        </Text>
      </Box>
    </Box>
  );
}
