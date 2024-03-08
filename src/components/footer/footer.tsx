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
      <Flex justifyContent={"center"}>
        <Container as={Stack} maxW={"6xl"} py={10} m={16} mt={24}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={16}
            justifyContent={"space-around"}
          >
            <Stack align={"flex-start"} spacing={4}>
              <ListHeader>
                <img src="/homepage/logoLight.svg" />
              </ListHeader>
              <Box fontWeight={500} fontSize={"16px"} mt={1}>
                <Text>Dubai, UAE</Text>
                <Text>Mon-Sat: 8:00 AM – 9:00 PM</Text>
              </Box>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Box as="a" href={"#"}>
                  (+888) 123 456 765
                </Box>
              </Stack>
              <Box as="a" href={"#"}>
                infoname@mail.com
              </Box>
              <Flex gap={2}>
                <img src="/footer/facebook.svg" />
                <img src="/footer/linkedin.svg" />
                <img src="/footer/instagram.svg" />
                <img src="/footer/whatsapp.svg" />
              </Flex>
            </Stack>
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>
                <Text fontSize={"20px"} fontWeight={600} mb={4}>
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
            <Stack align={"flex-start"} spacing={6}>
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
        <Flex justify={"space-between"} mx={16} my={4}>
          <Text pt={1} fontSize={"sm"} textAlign={"center"}>
            © Yoursitename 2023 | All Rights Reserved
          </Text>
          <Flex gap={4}>
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
