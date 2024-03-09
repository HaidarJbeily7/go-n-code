import { Box, Flex, Text } from "@chakra-ui/react";
import AchievementCard from "./home-components/achievement-card";

export default function HomeContactUs() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFDFD]">
      <Box mt={16}>
        <Flex>
          <AchievementCard
            img="/homepage/contactus/mobile.svg"
            number="200+"
            text="Team Member"
          />
          <AchievementCard
            img="/homepage/contactus/laptop.svg"
            number="100+"
            text="Complete Project"
          />
          <AchievementCard
            img="/homepage/contactus/links.svg"
            number="20+"
            text="Collaboration"
          />
          <AchievementCard
            img="/homepage/contactus/person.svg"
            number="200+"
            text="Happy Client"
          />
        </Flex>
      </Box>
    </div>
  );
}
