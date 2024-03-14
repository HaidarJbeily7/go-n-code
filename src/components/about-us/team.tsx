import { Box, Flex, Text } from "@chakra-ui/react";
import TeamCard from "./about-us-components/team-card";

export default function Team() {
  return (
    <div
      className="flex flex-col bg-[#F8F9FC]"
      style={{
        background: "#FFFFFF",
      }}
    >
      <Box
        mt={{ base: 4, md: 8, lg: 12 }}
        mb={{ base: 52, md: 52, lg: 60 }}
        mx={2}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text
            fontWeight={[600, 700]}
            fontSize={{ base: "35px", md: "48px" }}
            color={"#333333"}
          >
            Meet Our <span className="text-[#FFA500]">Great</span> Team
          </Text>
          <Text
            fontWeight={400}
            fontSize={{ base: "15px", md: "16px" }}
            color={"#666666"}
            whiteSpace={"break-spaces"}
          >
            Roles in our company are distributed among specialists and{"\n"}
            professionals with unlimited expertise.
          </Text>
          <Flex
            gap={8}
            mt={{ base: 8, md: 20 }}
            flexDir={{ base: "column", md: "row" }}
          >
            <TeamCard
              img="/about-us/team1.png"
              title="web developer"
              name="Tiger Chen"
            />
            <TeamCard
              img="/about-us/team2.png"
              title="web developer"
              name="Tiger Chen"
            />
            <TeamCard
              img="/about-us/team3.png"
              title="web developer"
              name="Tiger Chen"
            />
            <TeamCard
              img="/about-us/team4.png"
              title="web developer"
              name="Tiger Chen"
            />
          </Flex>
        </Flex>
      </Box>
      <Box position="relative">
        <div
          style={{
            position: "absolute",
            bottom: -50,
            right: 1,
            zIndex: 0,
          }}
        >
          <img src={"/homepage/polish-circle.svg"} />
        </div>
      </Box>
    </div>
  );
}
