import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import BlogCard from "./blog-card";

export default function BlogList() {
  return (
    <div
      className="flex  flex-col bg-[#FDFDFDFD] mx-20 mt-6"
      style={{
        background: "#FDFDFDFD",
      }}
    >
      <Box mb={32}>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          textAlign={"center"}
          gap={16}
        >
          <Heading fontWeight={700} fontSize={"50px"} color={"#393536"}>
            Blogs
          </Heading>

          <Text
            fontWeight={700}
            fontSize={"50px"}
            color={"#393536"}
            maxW={"70%"}
          >
            Every Thing You Need To Know About Programming, Design And{" "}
            <span className="text-[#FFA500]">IT solution </span>
          </Text>
        </Flex>
        <Flex flexDir={"column"} mt={16} mb={32} gap={12}>
          <Flex justifyContent={"space-around"} gap={4}>
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the worldWeb development can "
            />
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world Web development"
            />
          </Flex>
          <Flex justifyContent={"space-around"} gap={4}>
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
          </Flex>
          <Flex justifyContent={"space-around"} gap={4}>
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
            <BlogCard
              img="/homepage/polish-square.svg"
              date="October 19, 2022"
              header="Web development can change the world"
            />
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
