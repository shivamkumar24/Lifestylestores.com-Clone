import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        size="md"
        _hover={{ bg: "pink" }}
      >
        <GiHamburgerMenu size={"18px"} />
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"pink.600"} fontSize="xl" />
          <DrawerHeader width="78%">
            <Image src={Logo} />
          </DrawerHeader>
          <DrawerBody>
            <DrawerCloseButton />
            <Flex
              justify="center"
              pl="1rem"
              gap="5"
              flexDir={"column"}
              mx="2rem"
              mt="2rem"
            >
              <Link to="/">
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight="bold"
                  transition="0.5s ease"
                  _hover={{
                    borderBottomWidth: "4px",
                    borderBottomColor: "#f89f17",
                    color: "pink.600",
                    fontSize: "1.7rem",
                    webkitTransform: "scale(1.04)",
                    msTransform: "scale(1.02)",
                    transform: "scale(1.02)",
                    transition: " 0.5s ease",
                  }}
                >
                  Home
                </Text>
              </Link>
              <Link to="/women">
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight="bold"
                  transition="0.5s ease"
                  _hover={{
                    borderBottomWidth: "4px",
                    borderBottomColor: "#f89f17",
                    color: "pink.600",
                    fontSize: "1.7rem",
                    webkitTransform: "scale(1.04)",
                    msTransform: "scale(1.02)",
                    transform: "scale(1.02)",
                    transition: " 0.5s ease",
                  }}
                >
                  Womens
                </Text>
              </Link>
              <Link to="/men">
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight="bold"
                  transition="0.5s ease"
                  _hover={{
                    borderBottomWidth: "4px",
                    borderBottomColor: "#f89f17",
                    color: "pink.600",
                    fontSize: "1.7rem",
                    webkitTransform: "scale(1.04)",
                    msTransform: "scale(1.02)",
                    transform: "scale(1.02)",
                    transition: " 0.5s ease",
                  }}
                >
                  Mens
                </Text>
              </Link>
              <Link to="/kid">
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight="bold"
                  transition="0.5s ease"
                  _hover={{
                    borderBottomWidth: "4px",
                    borderBottomColor: "#f89f17",
                    color: "pink.600",
                    fontSize: "1.7rem",
                    webkitTransform: "scale(1.04)",
                    msTransform: "scale(1.02)",
                    transform: "scale(1.02)",
                    transition: " 0.5s ease",
                  }}
                >
                  Kids
                </Text>
              </Link>
              <Link to="/cart">
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight="bold"
                  transition="0.5s ease"
                  _hover={{
                    borderBottomWidth: "4px",
                    borderBottomColor: "#f89f17",
                    color: "pink.600",
                    fontSize: "1.7rem",
                    webkitTransform: "scale(1.04)",
                    msTransform: "scale(1.02)",
                    transform: "scale(1.02)",
                    transition: " 0.5s ease",
                  }}
                >
                  Your Cart
                </Text>
              </Link>
              <Link to="/profile">
                <Text
                  textAlign={"center"}
                  fontSize={"1.5rem"}
                  fontWeight="bold"
                  transition="0.5s ease"
                  _hover={{
                    borderBottomWidth: "4px",
                    borderBottomColor: "#f89f17",
                    color: "pink.600",
                    fontSize: "1.7rem",
                    webkitTransform: "scale(1.04)",
                    msTransform: "scale(1.02)",
                    transform: "scale(1.02)",
                    transition: " 0.5s ease",
                  }}
                >
                  Profile
                </Text>
              </Link>
              <Flex justify={"center"} gap={3}>
                <Button
                  px="2rem"
                  colorScheme={"yellow"}
                  _hover={{ bg: "pink" }}
                >
                  Login
                </Button>
                {/* {isAuth ? (
                  <Link to="/">
                    <Button
                      px="2rem"
                      colorScheme={"yellow"}
                      _hover={{ bg: "pink" }}
                      onClick={() => {
                        dispatch(logout);
                        toast({
                          title: "User Logout Successfully.",
                          description: "Come Back Again Soon",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                          position: "top",
                        });
                      }}
                    >
                      Logout
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button
                      px="2rem"
                      colorScheme={"yellow"}
                      _hover={{ bg: "pink" }}
                    >
                      Login
                    </Button>
                  </Link>
                )} */}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
