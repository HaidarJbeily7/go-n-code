import { Box, Flex, Text } from "@chakra-ui/react";
import TeamCard from "./about-us-components/team-card";

export default function Team() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#F8F9FC]"
      style={{
        background: "#FFFFFF",
      }}
    >
      <Box my={12}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text fontWeight={700} fontSize={"48px"} color={"#333333"}>
            Meet Our <span className="text-[#FFA500]">Great</span> Team
          </Text>
          <Text
            fontWeight={400}
            fontSize={"16px"}
            color={"#666666"}
            whiteSpace={"break-spaces"}
          >
            Roles in our company are distributed among specialists and{"\n"}
            professionals with unlimited expertise.
          </Text>
          <Flex gap={8} mt={20}>
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
