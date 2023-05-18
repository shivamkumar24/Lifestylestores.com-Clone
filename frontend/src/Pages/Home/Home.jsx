import React from "react";
import Benefit from "./Benefit";
import MenStore from "./MenStore";
import KidStore from "./KidStore";
import HomeSlider from "./HomeSlider";
import WomenStore from "./WomenStore";
import { Link } from "react-router-dom";
import MidSeasonDealsSlider from "./MidSeasonDealsSlider";
import { Box, Text, Progress, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bgColor={"#fdfdfd"} mb={{ base: "50px", md: "100px" }}>
      <Box>
        <Progress
          hasStripe
          value={100}
          isAnimated
          height="40px"
          colorScheme="orange"
        />
        <Text
          color={"white"}
          position="absolute"
          fontWeight={"bold"}
          fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
          left={{ base: "5%", sm: "27%", md: "30%", lg: "40%" }}
          top={{ base: "70px", sm: "70px", md: "100px", lg: "80px" }}
        >
          New Arrivals !! First time on discount - up to 30% off
        </Text>
      </Box>

      {/* Home Slider */}
      <HomeSlider />

      {/* Second Section */}
      <Box width="90%" margin="25px auto">
        <Image
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-28APR23.gif"
          alt="Home page gif"
          width="100%"
          objectFit="cover"
          borderRadius={"20px"}
        />
      </Box>

      {/*  Benefit Section  */}
      <Benefit />

      {/* Mid Season Deals Section */}
      <Box width={"90%"} margin="auto">
        <Text
          width={{ base: "135px", sm: "200px", md: "200px", lg: "270px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"bold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Mid-Season Deals
        </Text>
        <MidSeasonDealsSlider />
      </Box>

      {/* Women Store */}
      <Box width={"90%"} margin="auto">
        <Text
          width={{ base: "100px", sm: "155px", md: "155px", lg: "225px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"bold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Women's Store
        </Text>
        <Link to="/women">
          <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
            <Image
              width="100%"
              borderRadius={"20px"}
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-PromoWidget24-Desk-Banner1-25Apr23.jpg"
            />
          </Box>
          <WomenStore />
        </Link>
      </Box>

      {/* Men Store */}
      <Box width={"90%"} margin="auto">
        <Text
          width={{ base: "100px", sm: "155px", md: "155px", lg: "225px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"bold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Men's Store
        </Text>
        <Link to="/men">
          <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
            <Image
              width="100%"
              borderRadius={"20px"}
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-25Apr2023.jpg"
            />
          </Box>
          <MenStore />
        </Link>
      </Box>

      {/* Kid Store */}
      <Box width={"90%"} margin="auto">
        <Text
          width={{ base: "100px", sm: "155px", md: "155px", lg: "225px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"bold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 2, sm: 3, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Kid's Store
        </Text>
        <Link to="/kid">
          <Box marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }}>
            <Image
              width="100%"
              borderRadius={"20px"}
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget26-Desk-Banner1-25Apr23.jpg"
            />
          </Box>
          <KidStore />
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
