import { Button } from "@chakra-ui/react";

interface OutlineButtonProps {
  text: string;
  marginx: number;
  marginy: number;
}

export default function OutlineButton({
  text,
  marginx,
  marginy,
}: OutlineButtonProps) {
  return (
    <Button
      color={"#1B6C86"}
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
