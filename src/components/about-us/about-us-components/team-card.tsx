import { Box, Text } from "@chakra-ui/react";

interface TeamCardProps {
  img: string;
  title: string;
  name: string;
}

export default function TeamCard({ img, title, name }: TeamCardProps) {
  return (
    <Box
      bg={"#F6F8FB"}
      pb={4}
      rounded={8}
      _hover={{ bg: "#FFA500", textColor: "#FFFFFF" }}
      sx={{
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#FFA500",
          "& > p": {
            color: "#FFFFFF",
          },
        },
      }}
    >
      <img src={img} />
      <Text fontWeight={500} fontSize={"14px"} color={"#393536"} mt={4}>
        {title}
      </Text>
      <Text fontWeight={700} fontSize={"24px"} color={"#393536"} mt={2}>
        {name}
      </Text>
    </Box>
  );
}
