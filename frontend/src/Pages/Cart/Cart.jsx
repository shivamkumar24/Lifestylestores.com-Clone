import {
  Box,
  Flex,
  Grid,
  Image,
  Stack,
  Button,
  Heading,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";
import CartGif from "../../Assets/CartGif.gif";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [total, setTotal] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("user-token");

  const getCartData = async () => {
    let amount = 0;
    try {
      setLoading(true);
      const response = await axios.get(
        "https://calm-tutu-bass.cyclic.app/cart",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data1 = response.data.cartData;
      data1.map((el) => (amount += el.price));
      setCartData(data1);
      setTotal(amount);
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
    getCartData();
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

  const callPayment = () => {
    if (cartData.length === 0) {
      toast({
        title: "Your Cart is Empty.",
        status: "error",
        isClosable: true,
      });
    } else {
      navigate("/payment");
    }
  };

  if (loading) {
    <Stack>
      <Skeleton height="100px" />
      <Skeleton height="110px" />
      <Skeleton height="125px" />
    </Stack>;
  } else if (cartData.length === 0) {
    return (
      <Box style={{ padding: "20px" }}>
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
        >
          <Heading>Cart Items: {cartData.length}</Heading>
          <Heading>Total Amount: ₹ {total}</Heading>
          <Button colorScheme="teal" variant="outline" onClick={callPayment}>
            Proceed to Payment
          </Button>
        </Flex>
        <Box margin={{ base: "12px", md: "25px" }}>
          <Image
            src={CartGif}
            alt="Empty-Cart"
            display={"block"}
            margin={"auto"}
            height={"auto"}
            width={{ base: "90%", md: "50%" }}
          />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box style={{ padding: "20px" }}>
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
        >
          <Heading>Cart Items: {cartData.length}</Heading>
          <Heading>Total Amount: ₹ {total}</Heading>
          <Button colorScheme="teal" variant="outline" onClick={callPayment}>
            Proceed to Payment
          </Button>
        </Flex>
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
  }
};

export default Cart;
