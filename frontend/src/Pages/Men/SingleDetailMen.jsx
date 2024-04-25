import {
  Box,
  Text,
  List,
  Grid,
  Image,
  Stack,
  VStack,
  Button,
  Heading,
  useToast,
  Skeleton,
  ListItem,
  Container,
  SimpleGrid,
  StackDivider,
} from "@chakra-ui/react";
import axios from "axios";
import "../../styles/SingleCard.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MdLocalShipping } from "react-icons/md";

const SingleDetailMen = () => {
  const { id } = useParams();
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("user-token");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://calm-tutu-bass.cyclic.app/men/${id}`
      );
      const data1 = response.data.mens;
      setData(data1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
      toast({
        title: "Error fetching product details",
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("SingleMenData: ", data);

  // --------------------- data added to cart --------------------------
  const handleCartAdd = (el) => {
    const CartDataObj = {
      userID: userID,
      productID: id,
      title: el.title,
      price: Number(el.price),
      img1: el.img1,
      img2: el.img2,
      img3: el.img3,
      img4: el.img4,
      image: el.image,
      category: el.category,
      actualPrice: Number(el.actualPrice),
    };

    if (userID === undefined || userID === null) {
      toast({
        title: "Please Login First",
        status: "error",
        isClosable: true,
      });
    } else {
      axios
        .post(`https://calm-tutu-bass.cyclic.app/cart/add`, CartDataObj, {
          headers: {
            Authorization: `${token}`,
          },
        })
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
    }
  };

  return (
    <Box>
      {loading ? (
        <Stack>
          <Skeleton height="100px" />
          <Skeleton height="110px" />
          <Skeleton height="125px" />
        </Stack>
      ) : (
        <Container maxW={"90%"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Grid
              rowGap={"-30px"}
              columnGap={"10px"}
              gridTemplateColumns={"auto auto"}
            >
              <Box className="img-hover-zoom">
                <Image
                  className="hoverimage"
                  rounded={"md"}
                  alt={"product image"}
                  src={data.img1}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Box>
              <Box className="img-hover-zoom">
                <Image
                  className="hoverimage"
                  rounded={"md"}
                  alt={"product image"}
                  src={data.img2}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Box>
              <Box className="img-hover-zoom">
                <Image
                  className="hoverimage"
                  rounded={"md"}
                  alt={"product image"}
                  src={data.img3}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Box>
              <Box className="img-hover-zoom">
                <Image
                  className="hoverimage"
                  rounded={"md"}
                  alt={"product image"}
                  src={data.img4}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Box>
            </Grid>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {data.title}
                </Heading>
                <Text color={"gray.700"} fontWeight={300} fontSize={"2xl"}>
                  ${data.price} USD Inclusive of all taxes
                </Text>
                <Text
                  as="del"
                  color={"gray.700"}
                  fontWeight={300}
                  fontSize={"xl"}
                >
                  ${data.actualPrice}
                </Text>{" "}
                <span>Save ₹ 1500 (50.02%)</span>
                <Text />
                <Text color={"#ff8800"} fontWeight={300}>
                  ★★★★☆
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray.400"} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text color={"gray.500"} fontSize={"2xl"} fontWeight={"300"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={"lg"}>
                    Keep your look simple yet stylish by wearing this graceful
                    perky A-line piece designed with embroidery on the surface.
                    The outfit boasts a round neck, three-quarter sleeves, and a
                    curved hemline. Style with a pair of jhumkas and bangles and
                    you are good to go.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"yellow.400"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Embroidered</ListItem>
                      <ListItem>Hand wash only</ListItem>{" "}
                      <ListItem>Pure Cotton</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Kurta</ListItem>
                      <ListItem>Round Neck</ListItem>
                      <ListItem>Casual</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"yellow.400"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Net Quantity:
                      </Text>{" "}
                      1
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Occasion:
                      </Text>{" "}
                      Casual
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Product:
                      </Text>{" "}
                      Kurta
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Design:
                      </Text>{" "}
                      Embroidered
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Fabric:
                      </Text>{" "}
                      Cotton
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Model Wears:
                      </Text>{" "}
                      Size S, has Height 5'7",Chest 33",and Waist 28"
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Country of Origin:
                      </Text>{" "}
                      India
                    </ListItem>
                  </List>
                </Box>
              </Stack>

              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={"#ff8800"}
                color={"gray.900"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={() => handleCartAdd(data)}
              >
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </Box>
  );
};

export default SingleDetailMen;
