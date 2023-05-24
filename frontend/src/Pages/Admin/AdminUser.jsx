import {
  Td,
  Tr,
  Th,
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
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
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const AdminUser = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [userData, setTotalUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // ------------------------ Get User Data --------------------
  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://calm-tutu-bass.cyclic.app/user/`
      );
      const data1 = response.data.users;
      setTotalUsers(data1);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  console.log(userData);

  useEffect(() => {
    getUser();
  }, []);

  // ------------------------- Delete User ----------------------
  const deleteUser = async (user_id) => {
    const id = user_id;

    axios
      .delete(`https://calm-tutu-bass.cyclic.app/user/delete/${id}`)
      .then((res) => {
        toast({
          title: res.data.msg,
          status: "success",
          isClosable: true,
        });
      })
      .catch((e) =>
        toast({
          title: e.message,
          status: "error",
          isClosable: true,
        })
      );
    window.location.reload();
  };

  // ----------------------- Add New Admin -------------------
  const NewUserData = {
    name: name,
    email: email,
    phone: Number(phone),
    password: password,
    address: address,
  };

  const AddNewUser = () => {
    axios
      .post(`https://calm-tutu-bass.cyclic.app/user/register`, NewUserData)
      .then((res) => {
        toast({
          title: res.data.msg,
          status: "success",
          isClosable: true,
        });
      })
      .catch((e) =>
        toast({
          title: e.message,
          status: "error",
          isClosable: true,
        })
      );
  };

  const handleUserRegistrationForm = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      NewUserData.name === "" ||
      NewUserData.email === "" ||
      NewUserData.phone === "" ||
      NewUserData.password === "" ||
      NewUserData.address === ""
    ) {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else if (NewUserData.phone.length !== 10) {
      toast({
        title: "Please fill valid phone number",
        status: "warning",
        isClosable: true,
      });
    } else if (!NewUserData.email.match(mailformat)) {
      toast({
        title: "Please fill valid email address",
        status: "warning",
        isClosable: true,
      });
    } else {
      sessionStorage.setItem("signupuser", JSON.stringify(NewUserData));
    }
  };

  const CallSignUpFunction = () => {
    AddNewUser();
    handleUserRegistrationForm();
  };

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack spacing={8} w={{ base: "90%", md: "40%" }} py={12} px={6}>
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              color={"saddlebrown "}
            >
              Add New User
            </Heading>
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
                  Add User
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Stack w={"90%"}>
          <TableContainer fontWeight={"bold"}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Address</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userData.map((el) => {
                  return (
                    <Tr key={el._id}>
                      <Td>{el._id}</Td>
                      <Td>{el.name}</Td>
                      <Td>{el.email}</Td>
                      <Td>{el.phone}</Td>
                      <Td>{el.address}</Td>
                      <Td>
                        <Button
                          color={"white"}
                          bgColor={"red"}
                          fontWeight={"bold"}
                          onClick={() => deleteUser(el._id)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Flex>
    </>
  );
};

export default AdminUser;
