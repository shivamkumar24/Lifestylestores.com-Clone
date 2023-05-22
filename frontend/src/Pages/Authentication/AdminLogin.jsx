import {
  Box,
  Flex,
  Text,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  FormLabel,
  InputGroup,
  FormControl,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const AdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const AdminLoginData = {
    email: email,
    password: password,
  };

  const CheckAdmin = () => {
    axios
      .post(`https://calm-tutu-bass.cyclic.app/admin/login`, AdminLoginData)
      .then((res) => {
        console.log(res);
        toast({
          title: res.data.msg,
          status: "success",
          isClosable: true,
        });
        sessionStorage.setItem("admin-token", res.data.token);
        sessionStorage.setItem("admin-details", JSON.stringify(res.data.admin));
        navigate("/admin");
        window.location.reload();
      })
      .catch((e) =>
        toast({
          title: "Invalid Credentials",
          status: "error",
          isClosable: true,
        })
      );
  };

  const handleAdminLoginForm = () => {
    if (AdminLoginData.email === "" || AdminLoginData.password === "") {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else {
      sessionStorage.setItem("loginuser", JSON.stringify(AdminLoginData));
    }
  };

  const CallAdminLoginFunction = () => {
    CheckAdmin();
    handleAdminLoginForm();
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        backgroundImage={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf92GKTYc1k5BNpApxHinSFKnIXNU9wI9rWyibtoBH_bgmWuVBg5SFKoareRSb7jBlLFo&usqp=CAU"
        }
      >
        <Stack spacing={8} w={{ base: "90%", md: "40%" }} py={12} px={6}>
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              color={"saddlebrown "}
            >
              Admin
            </Heading>

            <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.600"}>
              Welcome back again to OutFit Store ✌️
            </Text>
          </Stack>

          <Box
            p={8}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={CallAdminLoginFunction}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#df9018"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AdminLogin;
