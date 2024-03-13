import { Box, Text, Button, Flex } from "@chakra-ui/react";
import ProjectGrid from "./home-components/project-grid";
import OutlineButton from "./home-components/outline-button";
import ProjectCard from "./home-components/project-card";

export default function HomeProjects() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFDFD]">
      <Box
        mx={{ base: 0, md: 32 }}
        my={4}
        h={"100%"}
        textAlign={{ base: "center", md: "start" }}
      >
        <Text
          fontWeight={[600, 700]}
          fontSize={["35px", "40px", "50px"]}
          lineHeight={["50px", "60px"]}
          color={"#393536"}
          whiteSpace={"break-spaces"}
          mb={6}
        >
          Our Recent {"\n"}Project For
          <span className="text-[#FFA500]">Beloved </span>Clients
        </Text>
        {/* Pass Whatever values you need to fill this grid with */}
        <ProjectGrid />
        {/* For smal screens we are using Project cards */}
        <ProjectCard
          img="/homepage/project1.png"
          title="Mobile and Web Design"
          name="company name"
        />
        <ProjectCard
          img="/homepage/project2.png"
          title="Logo  Design"
          name="company name"
        />
        <ProjectCard
          img="/homepage/project3.png"
          title="card Design"
          name="company name"
        />
        <Flex mt={4} justifyContent={"space-around"}>
          <OutlineButton text={"View More"} marginx={0} marginy={4} />
        </Flex>
      </Box>
      <Box position={"relative"} display={{ base: "none", md: "block" }}>
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
