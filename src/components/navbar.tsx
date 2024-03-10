"use client";

import { Box, Flex, HStack, useColorModeValue, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}
const Links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

const NavLink = ({ children, href }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;

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
      href={href}
      fontWeight={600}
      color={isActive ? "#FFA500" : "#1F242C"}
      borderBottom={isActive ? "2px solid" : "none"}
      borderRadius={0}
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
                <NavLink key={link.name} href={link.path}>
                  {link.name}
                </NavLink>
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
