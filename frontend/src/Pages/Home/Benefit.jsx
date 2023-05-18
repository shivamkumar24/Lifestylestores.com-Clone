import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";

const Benefit = () => {
  return (
    <>
      <Box width={"90%"} margin="auto">
        <Text
          fontWeight={"bold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          borderBottomColor={"#f89f17"}
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          width={{ base: "100px", sm: "150px", md: "150px", lg: "190px" }}
        >
          Our Benefits
        </Text>

        <Flex marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }} gap="20px">
          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
          </Box>

          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg" />
          </Box>

          <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg" />
          </Box>
        </Flex>
      </Box>

      <Box width="90%" margin="25px auto">
        <Image
          width="100%"
          objectFit="cover"
          borderRadius={"20px"}
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-ModularBlocks5-12May2023.jpg"
        />
      </Box>
    </>
  );
};

export default Benefit;
