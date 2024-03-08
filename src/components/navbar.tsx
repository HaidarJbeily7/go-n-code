"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
}

const Links = [
  "Home",
  "About Us",
  "Services",
  "portfolio",
  "Blog",
  "Contact Us",
];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
      fontWeight={600}
      color="background: #1F242C;
      "
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  return (
    <>
      <Box
        bg={useColorModeValue("transparent", "transparent")}
        px={4}
        mx={32}
        my={16}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <img src="/homepage/logo.svg" alt="GoNCode Logo" />
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
              px={14}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Button
              leftIcon={<img src="/homepage/contactus/call.svg" />}
              colorScheme="teal"
              variant="solid"
              sx={{
                background:
                  "linear-gradient(353.45deg, #FFA500 -88.34%, rgba(255, 165, 0, 0) 413.5%)",
                rounded: "100px",
              }}
              _hover={{
                background:
                  "linear-gradient(353.45deg, #FFA500 -88.34%, rgba(255, 165, 0, 0) 413.5%)",
              }}
            >
              +9090 8080 4044
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
