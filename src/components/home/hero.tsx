import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import OutlineButton from "./home-components/outline-button";

export default function Hero() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "radial-gradient(#FFA50026, #F8F9FC)",
      }}
    >
      <Navbar />
      <Box>
        <Flex justifyContent={"space-between"} my={20} mx={28}>
          <Box maxW={"45%"}>
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={"50px"}
              lineHeight={"78px"}
              color={"#393536"}
            >
              Elevate Your Digital Presence with{" "}
              <span className="text-[#FFA500]">GoNCode's</span> Innovative IT
              Strategies.
            </Heading>
            <Text
              fontWeight={400}
              fontSize={"20px"}
              lineHeight={"30px"}
              color={"#949494"}
              mt={8}
            >
              Empowering Enterprises, Startups, and Small Businesses with
              Advanced Technology Solutions.
            </Text>

            <OutlineButton text={"View More"} marginx={16} marginy={16} />
            <img src={"/homepage/polish-circle.svg"} />
          </Box>
          <Box>
            <img
              height={650}
              width={650}
              src="https://s3-alpha-sig.figma.com/img/4512/1120/0a6711c61aab038c1b299d8ed1c6e6d5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iegloTwjJyTSpz-GeliOdWA3agDruued1XTXvK4MVCsv4hy1OgbKMIK-~wgXGEu92ooLfpik8390ra2Syu75u4pvIdIebGcJXgHC3YI685Qtzrhld-ihafep58y~rxNZk1QgQhG0Nqnx-EKA5CT9oWtsPtuXt-fhJRuK0HttlhwDsEsEwQkPTrZv5QbRTgr8h9qiUR~IZLWyQLrluvGw42kRhfFP-jnHL0qk0jPu5uFwHizvNwk3J~NmIctZcxSjpYdMbvYbcTONptMcpeOJRuJ42fbVJZxfIxSye3k7jwk1SOzrJMqa0f9sSyyCT27RQMthaE6TginAhKss2huqJA__"
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
