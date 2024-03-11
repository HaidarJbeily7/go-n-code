import { Button } from "@chakra-ui/react";

interface PortfolioButtonProps {
  text: string;
  marginx: number;
  marginy: number;
}

export default function PortfolioButton({
  text,
  marginx,
  marginy,
}: PortfolioButtonProps) {
  return (
    <Button
      color={"#FFA500"}
      variant="outline"
      mx={marginx}
      my={marginy}
      rounded={"45px"}
      border={"2px"}
      _hover={{
        bg: "#F8F9FC",
      }}
    >
      {text}
    </Button>
  );
}
