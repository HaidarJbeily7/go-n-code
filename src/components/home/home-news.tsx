import { Box, Text, Flex } from "@chakra-ui/react";
import ProjectGrid from "./home-components/project-grid";
import OutlineButton from "./home-components/outline-button";
import NewsCard from "./home-components/news-card";

export default function HomeNews() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F8FB]">
      <Box position={"relative"}>
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            zIndex: 0,
          }}
        >
          <img src="/homepage/polish-circle.svg" />
        </div>
      </Box>
      <Box mx={20} my={16} h={"100%"}>
        <Text
          fontWeight={700}
          fontSize={"50px"}
          lineHeight={"60px"}
          color={"#393536"}
          mb={16}
        >
          <Text>Leading</Text>The{" "}
          <span className="text-[#FFA500]">Digital </span>Revolution
        </Text>
        <Flex justifyContent={"space-around"}>
          <NewsCard
            img="/homepage/polish-square.svg"
            date="October 19, 2022"
            header="Web development can change the world"
          />
          <NewsCard
            img="/homepage/polish-square.svg"
            date="October 19, 2022"
            header="Web development can change the worldWeb development can "
          />
          <NewsCard
            img="/homepage/polish-square.svg"
            date="October 19, 2022"
            header="Web development can change the worldWeb development can "
          />
        </Flex>
        <Flex mt={16} justifyContent={"space-around"}>
          <OutlineButton text={"Latest News"} marginx={0} marginy={4} />
        </Flex>
      </Box>
    </div>
  );
}
