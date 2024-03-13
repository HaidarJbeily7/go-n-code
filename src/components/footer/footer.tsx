"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  Button,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import FooterCard from "./footerCard";
import FooterHeader from "./footerHeader";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#393536", "#393536")}
      color={useColorModeValue("#ffffff", "#ffffff")}
      position="relative"
      mt={-12}
    >
      <Box>
        <FooterHeader />
      </Box>
      <Flex
        justifyContent={"center"}
        textAlign={{ base: "center", md: "start" }}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={{ base: 4, md: 12 }}
          m={{ base: 2, md: 8, lg: 16 }}
          mt={{ base: 24, md: 20, lg: 24 }}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 8, md: 8, lg: 16 }}
            justifyContent={"space-around"}
            justifyItems={"center"}
          >
            <Stack align={"flex-start"} spacing={4}>
              <ListHeader>
                <img src="/homepage/logoLight.svg" />
              </ListHeader>
              <Box fontWeight={500} fontSize={"16px"} mt={1} minW={"100%"}>
                <Text>Dubai, UAE</Text>
                <Text>Mon-Sat: 8:00 AM – 9:00 PM</Text>
              </Box>

              <Box as="a" href={"#"} minW={"100%"} mt={2}>
                <Text>(+888) 123 456 765</Text>
              </Box>

              <Box as="a" href={"#"} minW={"100%"}>
                <Text>infoname@mail.com</Text>
              </Box>
              <Flex gap={2} minW={"100%"} justifyContent={"center"}>
                <Box as="a" href="https://www.facebook.com/" target="_blank">
                  <img src="/footer/facebook.svg" />
                </Box>
                <Box as="a" href="https://www.linkedin.com/" target="_blank">
                  <img src="/footer/linkedin.svg" />
                </Box>
                <Box as="a" href="https://www.instagram.com/" target="_blank">
                  <img src="/footer/instagram.svg" />
                </Box>
                <Box as="a" href="https://www.whatsapp.com/" target="_blank">
                  <img src="/footer/whatsapp.svg" />
                </Box>
              </Flex>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }} spacing={2}>
              <ListHeader>
                <Text
                  fontSize={"20px"}
                  fontWeight={600}
                  mb={4}
                  minW={"100%"}
                  textAlign={"center"}
                  alignSelf={"center"}
                >
                  Our services
                </Text>
              </ListHeader>
              <Box
                as="a"
                href={"#"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <img src="/footer/smallArrow.svg" />

                <Text>UI / UX Design</Text>
              </Box>
              <Box
                as="a"
                href={"#"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <img src="/footer/smallArrow.svg" />

                <Text>Graphic Design</Text>
              </Box>
              <Box
                as="a"
                href={"#"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <img src="/footer/smallArrow.svg" />

                <Text>Web Development</Text>
              </Box>
              <Box
                as="a"
                href={"#"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <img src="/footer/smallArrow.svg" />

                <Text>Mobile Development</Text>
              </Box>
              <Box
                as="a"
                href={"#"}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <img src="/footer/smallArrow.svg" />

                <Text>BlockChain Development</Text>
              </Box>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }} spacing={6}>
              <ListHeader>
                <Text fontSize={"20px"} fontWeight={600} mb={1}>
                  Recent blog
                </Text>
              </ListHeader>
              <FooterCard
                imagePath="/footer/rectangle.svg"
                date="January 11, 2023"
                description="The standard chunk of Lorem Ipsum used since the 1500s"
              />
              <FooterCard
                imagePath="/footer/rectangle.svg"
                date="January 11, 2023"
                description="The standard chunk of Lorem Ipsum used since the 1500s"
              />
            </Stack>
          </SimpleGrid>
        </Container>
      </Flex>
      <Box>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "0.5px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
          }}
        ></Flex>
        <Flex
          justify={"space-between"}
          mx={16}
          my={4}
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Text
            pt={1}
            mt={{ base: 4, md: 0 }}
            fontSize={"sm"}
            textAlign={"center"}
          >
            © Yoursitename 2023 | All Rights Reserved
          </Text>
          <Flex
            display={{ base: "flex", md: "none" }}
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "0.5px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
            }}
          ></Flex>
          <Flex
            gap={{ base: 8, md: 4 }}
            flexDir={{ base: "column", md: "row" }}
            mb={{ base: 4, md: 0 }}
          >
            <Button
              color={"#FFFFFF"}
              variant="link"
              fontWeight={500}
              fontSize={"sm"}
            >
              Trams & Condition
            </Button>

            <Button
              color={"#FFFFFF"}
              variant="link"
              fontWeight={500}
              fontSize={"sm"}
            >
              Privacy Policy
            </Button>

            <Button
              color={"#FFFFFF"}
              variant="link"
              fontWeight={500}
              fontSize={"sm"}
            >
              Contact Us
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
