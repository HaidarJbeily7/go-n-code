import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import AchievementCard from "./home-components/achievement-card";
import HomeContactForm from "./home-components/contactus-form";

export default function HomeContactUs() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFDFD]">
      <Box position={"relative"}>
        <div
          style={{
            position: "absolute",
            top: 1,
            right: 1,
            zIndex: 0,
          }}
        >
          <img src="/homepage/contactus/top-bg-contactus.svg" />
        </div>
      </Box>
      <Box mt={16} mb={40} zIndex={2}>
        <Flex justifyContent={"space-evenly"}>
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
        <Flex mx={12} justifyContent={"space-evenly"}>
          <img
            width={656}
            height={728}
            src="/homepage/contactus/home-contact-us.gif"
          />
          <HomeContactForm />
        </Flex>
      </Box>
      <Box position={"relative"}>
        <div
          style={{
            position: "absolute",
            bottom: 50,
            right: 1,
            zIndex: 0,
          }}
        >
          <img src="/homepage/contactus/bottom-bg-contactus.svg" />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 1,
            zIndex: 0,
          }}
        >
          <img src="/homepage/contactus/bottom-bg2-contactus.svg" />
        </div>
      </Box>
    </div>
  );
}
