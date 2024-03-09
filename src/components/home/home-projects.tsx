import { Box, Text, Button, Flex } from "@chakra-ui/react";
import ProjectGrid from "./home-components/project-grid";
import OutlineButton from "./home-components/outline-button";

export default function HomeProjects() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFDFD]">
      <Box mx={32} my={4} h={"100%"}>
        <Text
          fontWeight={700}
          fontSize={"50px"}
          lineHeight={"60px"}
          color={"#393536"}
        >
          <Text>Our Recent</Text>Project For{" "}
          <span className="text-[#FFA500]">Beloved </span>Clients
        </Text>
        {/* Pass Whatever values you need to fill this grid with */}
        <ProjectGrid />
        <Flex mt={4} justifyContent={"space-around"}>
          <OutlineButton text={"View More"} marginx={0} marginy={4} />
        </Flex>
      </Box>
      <Box position={"relative"}>
        <div
          style={{
            position: "absolute",
            bottom: 1,
            left: 15,
            zIndex: 0,
          }}
        >
          <img src="/homepage/polish-circle.svg" />
        </div>
      </Box>
    </div>
  );
}
