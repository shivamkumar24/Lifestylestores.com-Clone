import {
  Box,
  Flex,
  Text,
  Link,
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

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const SignupData = {
    name: name,
    email: email,
    phone: Number(phone),
    password: password,
    address: address,
  };

  const AddNewUser = () => {
    axios
      .post(`https://calm-tutu-bass.cyclic.app/user/register`, SignupData)
      .then((res) => {
        toast({
          title: res.data.msg,
          status: "success",
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((e) =>
        toast({
          title: e.message,
          status: "error",
          isClosable: true,
        })
      );
  };

  const handleUserSignupForm = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      SignupData.name === "" ||
      SignupData.email === "" ||
      SignupData.phone === "" ||
      SignupData.password === "" ||
      SignupData.address === ""
    ) {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else if (SignupData.phone.length !== 10) {
      toast({
        title: "Please fill valid phone number",
        status: "warning",
        isClosable: true,
      });
    } else if (!SignupData.email.match(mailformat)) {
      toast({
        title: "Please fill valid email address",
        status: "warning",
        isClosable: true,
      });
    } else {
      localStorage.setItem("signupuser", JSON.stringify(SignupData));
    }
  };

  const CallSignUpFunction = () => {
    AddNewUser();
    handleUserSignupForm();
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
              SignUp
            </Heading>

            <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.600"}>
              Welcome to OutFit Store ✌️
            </Text>
          </Stack>

          <Box
            p={8}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
          >
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel>phone</FormLabel>
                <Input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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

              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={CallSignUpFunction}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#df9018"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SignUp;
