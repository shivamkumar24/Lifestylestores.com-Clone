import React, { useState } from "react";
import Slider from "react-slick";
import Image1 from "../../Assets/SliderImage1.jpg";
import Image2 from "../../Assets/SliderImage2.gif";
import Image3 from "../../Assets/SliderImage3.jpg";
import Image4 from "../../Assets/SliderImage4.gif";
import Image5 from "../../Assets/SliderImage5.jpg";
import Image6 from "../../Assets/SliderImage6.jpg";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HomeSlider = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState([]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <Box
      height={"500px"}
      width={"90%"}
      margin={"auto"}
      overflow={"hidden"}
      position={"relative"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        top={top}
        zIndex={2}
        left={side}
        borderRadius="full"
        position="absolute"
        aria-label="left-arrow"
        colorScheme="messenger"
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        top={top}
        zIndex={2}
        right={side}
        borderRadius="full"
        position="absolute"
        aria-label="right-arrow"
        colorScheme="messenger"
        transform={"translate(0%, -50%)"}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"xl"}
            position="relative"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default HomeSlider;
