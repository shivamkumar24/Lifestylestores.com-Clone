import React from "react";
import { Box, Heading, Text, Image, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Card = (el) => {
  const navigate = useNavigate();
  // console.log(el.type);

  const handleClick = (id) => {
    navigate(`/${el.type}/${id}`);
  };

  return (
    <Box
      width={"100%"}
      margin="20px"
      padding="12px"
      textAlign="center"
      zIndex={1}
      overflow={"hidden"}
      boxShadow={"2xl"}
      borderRadius={"20px"}
      backgroundColor={"#fff"}
    >
      <Image
        src={el.image}
        alt={"image"}
        roundedTop="lg"
        borderRadius={"20px"}
        style={{
          height: "220px",
          width: "80%",
          display: "flex",
          margin: "auto",
        }}
      />
      <Flex gap={"5px"} textAlign={"center"} justifyContent={"center"}>
        <Heading paddingTop={"8px"} size="md">
          ₹{el.price}
        </Heading>
        <Text as="del" fontSize={"13px"} paddingTop={"10px"}>
          ₹{el.actualPrice}
        </Text>
      </Flex>
      <Text
        paddingTop={"3px"}
        alignItems={"center"}
        fontSize={"14px"}
        fontWeight={500}
      >
        {el.title}
      </Text>

      <Button
        width="100%"
        padding="10px"
        marginTop={"10px"}
        color={"#fff"}
        fontSize={"18px"}
        textAlign={"center"}
        backgroundColor={"#ff8800"}
        onClick={() => handleClick(el._id)}
        _hover={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
        }}
      >
        See More Details ...
      </Button>
    </Box>
  );
};

export default Card;
