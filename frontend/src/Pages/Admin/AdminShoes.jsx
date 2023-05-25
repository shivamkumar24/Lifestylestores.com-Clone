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
  FormControl,
  useColorModeValue,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const AdminShoes = () => {
  const toast = useToast();
  const [shoesData, setShoesData] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [actualPrice, setActualPrice] = useState(null);

  // ------------------------ Get Shoes Data --------------------
  const getShoes = async () => {
    try {
      const response = await axios.get(
        `https://calm-tutu-bass.cyclic.app/shoes/`
      );

      const data1 = response.data.shoes;
      setShoesData(data1);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  console.log(shoesData);

  useEffect(() => {
    getShoes();
  }, []);

  // ------------------------- Delete Shoes ----------------------
  const deleteShoes = async (user_id) => {
    const id = user_id;

    axios
      .delete(`https://calm-tutu-bass.cyclic.app/shoes/delete/${id}`)
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

  // ----------------------- Add New Shoes -------------------
  const NewShoesData = {
    title: title,
    price: price,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    image: image,
    category: category,
    actualPrice: actualPrice,
  };

  const AddNewShoes = () => {
    axios
      .post(`https://calm-tutu-bass.cyclic.app/shoes/add`, NewShoesData)
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

  return (
    <div id="shoes">
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
              Add New Shoes
            </Heading>
          </Stack>

          <Box
            p={8}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
          >
            <Stack spacing={4}>
              <FormControl id="firstTitle" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl id="price" isRequired>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl id="img1" isRequired>
                <FormLabel>Img1</FormLabel>
                <Input
                  type="text"
                  value={img1}
                  onChange={(e) => setImg1(e.target.value)}
                />
              </FormControl>

              <FormControl id="img2" isRequired>
                <FormLabel>Img2</FormLabel>
                <Input
                  type="text"
                  value={img2}
                  onChange={(e) => setImg2(e.target.value)}
                />
              </FormControl>

              <FormControl id="img3" isRequired>
                <FormLabel>Img3</FormLabel>
                <Input
                  type="text"
                  value={img3}
                  onChange={(e) => setImg3(e.target.value)}
                />
              </FormControl>

              <FormControl id="img4" isRequired>
                <FormLabel>Img4</FormLabel>
                <Input
                  type="text"
                  value={img4}
                  onChange={(e) => setImg4(e.target.value)}
                />
              </FormControl>

              <FormControl id="image" isRequired>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </FormControl>

              <FormControl id="category" isRequired>
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </FormControl>

              <FormControl id="actualPrice" isRequired>
                <FormLabel>Actual-Price</FormLabel>
                <Input
                  type="text"
                  value={actualPrice}
                  onChange={(e) => setActualPrice(e.target.value)}
                />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={AddNewShoes}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#df9018"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Add Shoes
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
                  <Th>Title</Th>
                  <Th>Price</Th>
                  <Th>Img1</Th>
                  <Th>Img2</Th>
                  <Th>Img3</Th>
                  <Th>Img4</Th>
                  <Th>Image</Th>
                  <Th>Category</Th>
                  <Th>Actual-Price</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {shoesData.map((el) => {
                  return (
                    <Tr key={el._id}>
                      <Td>{el._id}</Td>
                      <Td>{el.title}</Td>
                      <Td>{el.price}</Td>
                      <Td>{el.img1}</Td>
                      <Td>{el.img2}</Td>
                      <Td>{el.img3}</Td>
                      <Td>{el.img4}</Td>
                      <Td>{el.image}</Td>
                      <Td>{el.category}</Td>
                      <Td>{el.actualPrice}</Td>
                      <Td>
                        <Button
                          color={"white"}
                          bgColor={"red"}
                          fontWeight={"bold"}
                          onClick={() => deleteShoes(el._id)}
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

export default AdminShoes;
