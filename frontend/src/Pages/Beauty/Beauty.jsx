import axios from "axios";
import Card from "../../Components/Card";
import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Select, Button, Heading } from "@chakra-ui/react";

const Beauty = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("price");
  const [order, setOrder] = useState("asc");
  const [category, setCategory] = useState("Skincare");
  const [page, setPage] = useState(1);

  const getData = async (page, sort, order, category) => {
    try {
      const response = await axios.get(
        `https://calm-tutu-bass.cyclic.app/beauty?sort=${sort}&order=${order}&category=${category}&page=${page}`
      );
      const data1 = response.data.beauties;
      setData(data1);
    } catch (error) {
      console.log("Error: ", error);
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
    getData(page, sort, order, category);
    if (!loaded) {
      setLoaded(true);
      const pageRelaod = setTimeout(() => {
        window.location.reload();
      }, 100);

      clearTimeout(pageRelaod);
    }
  }, [page, sort, order, category, loaded]);

  console.log(data);

  return (
    <Box>
      {data === [] ? (
        <Heading>Loading ......</Heading>
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
              <option value="Lipstick">Lipstick</option>
              <option value="Skincare">Skincare</option>
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
              <Card key={el._id} {...el} type={"beauty"} />
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

export default Beauty;
