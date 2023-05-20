import axios from "axios";
import "../../styles/SingleCard.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

const SingleDetailBag = () => {
  const { id } = useParams();
  const toast = useToast();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://calm-tutu-bass.cyclic.app/bag/${id}`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res.bags);
        setData(res.bags);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const handleCartAdd = () => {
    // write code here for product added to the cart
  };

  return (
    <Box>
      {loading === true ? (
        <Heading>Loading ......</Heading>
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
                onClick={handleCartAdd}
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

export default SingleDetailBag;
