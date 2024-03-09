import { Box, Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import AchievementCard from "./home-components/achievement-card";
import ContactUsForm from "./home-components/contactus-form";

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
            width={650}
            height={730}
            src="https://s3-alpha-sig.figma.com/img/b505/bdff/6c30f13b7d7fb733ef4590fa5d62c540?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qordoNMrjZ9LUWUqXD6syHmPyXZwCI0fGvRzUz-iTEMyIv0~YUOs3lsg9zojtM3AZnpCH99gj1IEGt0CWSDeFU86d9rkLOEOKqmz39sOPVmxUgIZVEQwqdMpY7aRFP7XwCNFP3rgn73l7pfQkKdyfXy3Ph~h3h1-w53WCI28ngVgG1dztFQK1Hj25606WIJdUJHFWBSC4-Uiyj3q0~XereN1~DxFyt40Zu3-pJkwBxR2DbJh7cw-fTiXRSXuRYZPaAxpHShAiu2D9avdmrzyt1lsV9CiPQaajYfgyRTiiMbYREoPKNz-VkR88lwGAjEuN7dDBEuV37ovijv6mQy75w__"
          />
          <ContactUsForm />
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
