import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Links = ["News Home", "Covid-19", "Ball-tempering", "Racism"];

const NewsNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white">
      <Box
        px={4}
        maxWidth={{
          sm: "100%",
          md: "70%",
        }}
        margin="auto"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                News |
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => {
                return (
                  <NavLink key={link} to={`${link}`}>
                    {link}
                  </NavLink>
                );
              })}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => {
                return (
                  <NavLink key={link} to={`${link}`}>
                    {link}
                  </NavLink>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default NewsNav;
