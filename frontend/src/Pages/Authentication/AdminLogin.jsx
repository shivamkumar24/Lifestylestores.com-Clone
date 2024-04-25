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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin } from "../../Redux/Auth/auth.action";

const AdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { admin, isError } = useSelector((store) => store.auth);

  const AdminLoginData = {
    email: email,
    password: password,
  };

  const handleAdminLoginForm = () => {
    localStorage.clear();
    if (AdminLoginData.email === "" || AdminLoginData.password === "") {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else {
      dispatch(adminLogin(AdminLoginData));
      checkUserDatastatus();
    }
  };

  const checkUserDatastatus = () => {
    if (admin !== null) {
      toast({
        title: admin.msg,
        status: "success",
        isClosable: true,
      });
      localStorage.setItem("admin-token", admin.token);
      localStorage.setItem("admin-details", JSON.stringify(admin.admin));
      navigate("/admin");
      window.location.reload();
    } else if (isError) {
      toast({
        title: "Invalid Credentials",
        status: "error",
        isClosable: true,
      });
    }
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
                  onClick={handleAdminLoginForm}
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
