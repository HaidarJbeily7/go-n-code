"use client";

import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  DrawerOverlay,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  name: string;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ lg: "none" }}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", sm: "none", md: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("transparent", "transparent")}
          className="backdrop-blur-sm"
        >
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        display={{ base: "flex", md: "flex", lg: "none" }}
        onOpen={onOpen}
      />
      <Box ml={{ base: 0 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      borderRight="1px"
      //   bg={useColorModeValue("transparent", "transparent")}
      bg={"#FDFDFD"}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "80%", md: "60%" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" mx="8" alignItems={"center"} justifyContent="flex-end">
        {/* <img src="/homepage/logo.svg" alt="GoNCode Logo" /> */}

        {/* <CloseButton display={{ base: "flex" }} onClick={onClose} /> */}
        <IconButton
          variant="outline"
          justifyContent="flex-end"
          display={{ base: "flex" }}
          border={0}
          w={40}
          h={40}
          _hover={{ bg: "#ffffff" }}
          onClick={onClose}
          aria-label="close menu"
          icon={<img src="/homepage/close-sidebar.svg" />}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: string;
  href: string;
}
const NavItem = ({ children, href, ...rest }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Box
      as="a"
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        justifyContent={"center"}
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={isActive ? "#FFA500" : "#1F242C"}
        borderBottom={isActive ? "1px solid" : "none"}
        rounded={0}
        {...rest}
      >
        <Text
          fontWeight={400}
          fontSize={"25px"}
          color={isActive ? "#FFA500" : "#1F242C"}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <img src="/homepage/logo.svg" alt="GoNCode Logo" />

      <IconButton
        variant="outline"
        border={0}
        _hover={{ bg: "#ffffff" }}
        onClick={onOpen}
        aria-label="open menu"
        icon={<img src="/homepage/slidebar-icon.svg" />}
      />
    </Flex>
  );
};
