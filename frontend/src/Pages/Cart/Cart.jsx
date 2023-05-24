import axios from "axios";
import Card from "../../Components/Card";
import { Box, Button, Flex, Grid, Heading, useToast } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const toast = useToast();
  const [loaded, setLoaded] = useState(false);
  const [cartData, setCartData] = useState([]);
  const token = sessionStorage.getItem("user-token");

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

      const data1 = response.data.cartData;
      console.log(data1);
      setCartData(data1);
    } catch (error) {
      console.log("Cart Data fetching Error: ", error);
    }
  };

  useEffect(() => {
    getCartData();
    if (!loaded) {
      setLoaded(true);
      const pageRelaod = setTimeout(() => {
        window.location.reload();
      }, 100);

      clearTimeout(pageRelaod);
    }
  }, []);

  // ---------------------- Delete cart item -----------------------
  const handleDelete = async (data) => {
    const id = data._id;

    axios
      .delete(`https://calm-tutu-bass.cyclic.app/cart/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
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
    <Box style={{ padding: "20px" }}>
      <Heading>Cart Items: {cartData.length}</Heading>
      <Grid
        width={"80%"}
        margin={"auto"}
        justifyContent="space-between"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        columnGap="20px"
      >
        {cartData.map((el) => (
          <Flex flexDirection={"column"} key={el._id}>
            <Card key={el._id} {...el} type={"bag"} />
            <Button
              onClick={() => handleDelete(el)}
              marginLeft={"22px"}
              bgColor={"red.700"}
              color={"whitesmoke"}
              fontWeight={"bold"}
              cursor={"pointer"}
            >
              Delete
            </Button>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Cart;
