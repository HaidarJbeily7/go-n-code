import { Box, Text, Flex } from "@chakra-ui/react";
import ProjectGrid from "./home-components/project-grid";
import OutlineButton from "./home-components/outline-button";
import NewsCard from "./home-components/news-card";
import NewsCardGrid from "./home-components/news-card";

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
      <Box
        mx={{ base: 0, md: 12, lg: 20 }}
        my={16}
        h={"100%"}
        textAlign={{ base: "center", md: "start" }}
      >
        <Text
          fontWeight={[600, 700]}
          fontSize={{ base: "35px", md: "40px", lg: "50px" }}
          lineHeight={"60px"}
          color={"#393536"}
          mb={16}
          whiteSpace={"break-spaces"}
        >
          Leading{"\n"}The <span className="text-[#FFA500]">Digital </span>
          Revolution
        </Text>

        <NewsCardGrid />

        <Flex mt={16} justifyContent={"space-around"}>
          <OutlineButton text={"Latest News"} marginx={0} marginy={4} />
        </Flex>
      </Box>
    </div>
  );
}
