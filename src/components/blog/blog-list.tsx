import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import BlogCard from "./blog-card";
import BlogCardGrid from "./blog-card-grid";

export default function BlogList() {
  return (
    <div
      className="flex  flex-col bg-[#FDFDFDFD] mt-6"
      style={{
        background: "#FDFDFDFD",
      }}
    >
      <Box mb={52} mx={{ base: 2, md: 8, lg: 20 }}>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          textAlign={"center"}
          gap={16}
        >
          <Heading
            fontWeight={700}
            fontSize={"50px"}
            color={"#393536"}
            display={{ base: "none", lg: "block" }}
          >
            Blogs
          </Heading>

          <Text
            fontWeight={[600, 700]}
            fontSize={{ base: "35px", md: "40px", lg: "50px" }}
            color={"#393536"}
            maxW={{ base: "100%", md: "70%" }}
          >
            Every Thing You Need To Know About Programming, Design And{" "}
            <span className="text-[#FFA500]">IT solution </span>
          </Text>
        </Flex>

        <BlogCardGrid />
      </Box>
    </div>
  );
}
