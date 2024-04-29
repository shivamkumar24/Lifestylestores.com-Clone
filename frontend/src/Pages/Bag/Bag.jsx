import axios from "axios";
import Card from "../../Components/Card";
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Stack,
  Select,
  Button,
  Skeleton,
  useToast,
} from "@chakra-ui/react";

const Bag = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const getData = async (page, order, category) => {
    try {
      const response = await axios.get(
        `https://calm-tutu-bass.cyclic.app/bag?sort=price&order=${order}&category=${category}&page=${page}`
      );
      const data1 = response.data.bags;
      setData(data1);
    } catch (error) {
      console.log("Error: ", error);
      toast({
        title: "Error fetching product data",
        status: "error",
        isClosable: true,
      });
    }
  };

  const sortChange = () => {
    const value = document.getElementById("sortBy").value;
    setOrder(value);
  };

  const categoryChange = () => {
    const value = document.querySelector("#categoryBy").value;
    setCategory(value);
  };

  useEffect(() => {
    getData(page, order, category);
  }, [page, order, category]);

  console.log("BagData: ", data);

  return (
    <Box>
      {data.length === 0 ? (
        <Stack>
          <Skeleton height="100px" />
          <Skeleton height="110px" />
          <Skeleton height="125px" />
        </Stack>
      ) : (
        <>
          <Flex margin={"10px auto 25px auto"}>
            <Select
              id="sortBy"
              width={"20%"}
              margin={"auto"}
              onChange={sortChange}
              placeholder="Filter By Price"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>

            <Select
              id="categoryBy"
              width={"20%"}
              margin={"auto"}
              onChange={categoryChange}
              placeholder="Filter By Category"
            >
              <option value="Wallets">Wallets</option>
              <option value="Handbags">Handbags</option>
            </Select>
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
            {data.map((el) => (
              <Card key={el._id} {...el} type={"bag"} />
            ))}
          </Grid>

          {/* ----------------- Pagination ----------------- */}
          <Flex justifyContent={"center"}>
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Previous
            </Button>
            <Button disabled>{page}</Button>
            <Button
              disabled={data.length < 12}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Bag;
