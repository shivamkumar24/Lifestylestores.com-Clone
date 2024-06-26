import {
  Box,
  Menu,
  Flex,
  Text,
  Image,
  Input,
  Button,
  HStack,
  Popover,
  useToast,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SideBar from "./Sidebar";
import Logo from "../Assets/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag, BsPerson, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [cartDataLength, setCartDataLength] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [userName, setUserName] = useState("User");
  const [adminStatus, setAdminStatus] = useState("Admin");

  const token = localStorage.getItem("user-token");
  const adminToken = localStorage.getItem("admin-token");

  const getUserData = () => {
    if (token !== null) {
      const user = localStorage.getItem("user-details");
      const parsedUser = JSON.parse(user);
      let user_names = parsedUser?.name;
      let user_name = user_names !== null && user_names?.split(" ");
      setUserName(user_name[0]);
    }
    if (adminToken !== null) {
      setUserName("Admin");
    }
  };

  const getCartData = async () => {
    try {
      const response = await axios.get(
        "https://calm-tutu-bass.cyclic.app/cart",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data1 = response?.data?.cartData;
      setCartDataLength(data1.length);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    token === null ? setIsAuth(false) : setIsAuth(true);
    adminToken !== null
      ? setAdminStatus("Admin Sign Out")
      : setAdminStatus("Admin");
  }, [token, adminToken]);

  useEffect(() => {
    getCartData();
    getUserData();
    if (!loaded) {
      setLoaded(true);
      const pageRelaod = setTimeout(() => {
        window.location.reload();
      }, 100);

      clearTimeout(pageRelaod);
    }
  }, []);

  const userLogout = () => {
    localStorage.clear();
    navigate("/login");
    setUserName("user");
  };

  const handleAdmin = () => {
    if (adminToken) {
      localStorage.clear();
      navigate("/adminLogin");
      setAdminStatus("Admin");
    } else {
      navigate("/adminLogin");
    }
  };

  return (
    <Box
      position={"sticky"}
      zIndex={"100"}
      bg="#f7f8f7"
      width="100%"
      padding="10px"
      display="flex"
      justifyContent="space-around"
      boxShadow=" 0px 7px 7px -5px rgba(170, 159, 170, 0.2)"
    >
      {/* ---------------------- Sidebar ---------------------- */}
      <Box display={{ lg: "none" }}>
        <SideBar />
      </Box>

      {/* --------------------------- Logo --------------------------- */}
      <Link to="/">
        <Image
          src={Logo}
          alt="logo"
          margin={"auto"}
          width={{ base: "90%", sm: "60%", md: "60%", lg: "60%" }}
          height={{ base: "2rem", md: "100%" }}
          // border="1px solid green"
        />
      </Link>

      {/* --------------------------- Nav-Items ------------------------ */}
      <Box
        // width="35%"
        display={{ base: "none", lg: "block" }}
        // border="1px solid red"
      >
        <Flex
          gap={5}
          pos="relative"
          align="center"
          fontWeight="bold"
          // border="1px solid red"
          justify={"space-around"}
          fontSize="17px"
          display={{ base: "none", lg: "Flex" }}
          height={{ base: "3.2rem", md: "3.2rem" }}
        >
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/kid">Kids</Link>
          <Link to="/shoes">Shoes</Link>
          <Link to="/beauty">Beauty</Link>
        </Flex>
      </Box>

      {/* -------------------------- SearchBar ------------------------ */}
      <Box
        display={{ base: "none", lg: "block" }}
        // border="1px solid green"
      >
        <Box
          borderRadius={"md"}
          pos="relative"
          marginTop="10px"
          // border="1px solid red"
        >
          <HStack>
            <InputGroup>
              <InputLeftElement children={<BsSearch color="gray.300" />} />
              <Input
                type="text"
                width="400px"
                outline="none"
                value={searchQuery}
                placeholder="What are you looking for?"
                backgroundColor={"#ffffff"}
                _focus={{
                  boxShadow: "none",
                  border: "1px solid #f89f17",
                  outline: "none",
                }}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </InputGroup>
            <Link to={`/search/${searchQuery}`}>
              <Button colorScheme={"teal"} onClick={() => setSearchQuery("")}>
                Search
              </Button>
            </Link>
          </HStack>
        </Box>
      </Box>

      {/* -------------------------- user profile & cart ----------------------- */}
      <Flex
        gap={{ base: "0.5rem", md: "1.5rem" }}
        align="center"
        width={{ base: "25%", md: "10%" }}
        // border="1px solid red"
      >
        <Popover>
          <Menu>
            <MenuButton>
              <BsPerson fontSize={"1.3rem"} />
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem color="pink.400">Hey, {userName}</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Order History</MenuItem>
                <MenuItem>My Address</MenuItem>
                <MenuItem>Payments</MenuItem>
                <MenuItem>Reviews</MenuItem>
                <MenuItem onClick={handleAdmin}>{adminStatus}</MenuItem>
              </MenuGroup>

              {isAuth === true ? (
                <MenuItem
                  _hover={{ backgroundColor: "pink" }}
                  backgroundColor="#fdb852"
                  onClick={() => {
                    userLogout();
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
                  Sign Out
                </MenuItem>
              ) : (
                <MenuItem
                  _hover={{ backgroundColor: "pink" }}
                  backgroundColor="#fdb852"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Popover>
        <Link to="#">
          <Flex flexDir={"column"} align={"center"}>
            <Text>
              <AiOutlineHeart fontSize={"1.3rem"} />
            </Text>
          </Flex>
        </Link>

        <Link to="/cart">
          <Flex flexDir={"column"} align={"center"} pos="relative">
            <Text>
              <BsBag fontSize={"1.3rem"} />
            </Text>
            <Box
              justify={"center"}
              align="center"
              pos={"absolute"}
              top="-5px"
              right="-12px"
              width="20px"
              height="20px"
              color="white"
              borderRadius={"50%"}
              bg="#d53f8c"
            >
              <Text>{cartDataLength}</Text>
            </Box>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
