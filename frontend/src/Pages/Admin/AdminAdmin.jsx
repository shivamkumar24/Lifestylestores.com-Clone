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

const AdminAdmin = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [adminData, setTotalAdmins] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // ------------------------ Get Admin Data --------------------
  const getAdmin = async () => {
    try {
      const response = await axios.get(
        `https://calm-tutu-bass.cyclic.app/admin/`
      );
      const data1 = response.data.admins;
      setTotalAdmins(data1);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  // ------------------------- Delete Admin ----------------------
  const deleteAdmin = async (admin_id) => {
    const id = admin_id;

    axios
      .delete(`https://calm-tutu-bass.cyclic.app/admin/delete/${id}`)
      .then((res) => {
        if (res.data) {
          toast({
            title: res.data.msg,
            status: "success",
            isClosable: true,
          });
        }
      })
      .catch((e) =>
        toast({
          title: e.message,
          status: "error",
          isClosable: true,
        })
      );
    getAdmin();
  };

  // ----------------------- Add New Admin -------------------
  const NewAdminData = {
    name: name,
    email: email,
    phone: Number(phone),
    password: password,
  };

  const AddNewAdmin = () => {
    axios
      .post(`https://calm-tutu-bass.cyclic.app/admin/register`, NewAdminData)
      .then((res) => {
        if (res.data) {
          toast({
            title: res.data,
            status: "success",
            isClosable: true,
          });
        }
      })
      .catch((e) =>
        toast({
          title: e.message,
          status: "error",
          isClosable: true,
        })
      );
  };

  const handleAdminRegistrationForm = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      NewAdminData.name === "" ||
      NewAdminData.email === "" ||
      NewAdminData.phone === "" ||
      NewAdminData.password === ""
    ) {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else if (NewAdminData.phone.length !== 10) {
      toast({
        title: "Please fill valid phone number",
        status: "warning",
        isClosable: true,
      });
    } else if (!NewAdminData.email.match(mailformat)) {
      toast({
        title: "Please fill valid email address",
        status: "warning",
        isClosable: true,
      });
    } else {
      localStorage.setItem("signupuser", JSON.stringify(NewAdminData));
    }
  };

  const CallSignUpFunction = () => {
    AddNewAdmin();
    handleAdminRegistrationForm();
  };

  return (
    <div id="admin">
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
              Add New Admin
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
                  Add Admin
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
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {adminData.map((el) => {
                  return (
                    <Tr key={el._id}>
                      <Td>{el._id}</Td>
                      <Td>{el.name}</Td>
                      <Td>{el.email}</Td>
                      <Td>{el.phone}</Td>
                      <Td>
                        <Button
                          color={"white"}
                          bgColor={"red"}
                          fontWeight={"bold"}
                          onClick={() => deleteAdmin(el._id)}
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
    </div>
  );
};

export default AdminAdmin;
