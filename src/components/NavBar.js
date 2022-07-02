import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as CHLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link, Outlet } from "react-router-dom";
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStores } from "../store";

const Links = ["Side Nav", "Other", "Other"];

const NavLink = ({ children }) => (
  <CHLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </CHLink>
);

const NavBar = observer(() => {
  const { mainStore, userStore } = useStores();

  console.log("MAIN - ", mainStore.test2);
  console.log("USER - ", userStore.test);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleNav = () => {
    mainStore.topNav = !mainStore.topNav;
    mainStore.sideNav = !mainStore.sideNav;
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {/* {Links.map((link) => ( */}
              {/* <NavLink key={link}>{link}</NavLink> */}
              <Link to="/sidenav">
                <GiHamburgerMenu />
              </Link>
              <div onClick={toggleNav}>Side Nav</div>
              {/* ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4} leftIcon={<AddIcon />}>
              Action
            </Button>
            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
});

export default NavBar;
