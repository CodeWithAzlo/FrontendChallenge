import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
import CardGrid from "./CardGrid";

const Slider = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000} 
        showStatus={false}
        showThumbs={false}
        showArrows={true}
      >
        <Box position="relative" w="full" h="100vh">
          <Image
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
            h="full"
            w="full"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="20%"
            left="10%"
            color="black"
            bg="white"
            p="20"
            borderRadius="20px"
            maxWidth="80%"
          >
            <Text fontSize="38px" fontWeight="bold" mb="2">
              Learning that gets you
            </Text>
            <Text fontSize="lg">
              Skills for your present <br />
              (and your future). Get started with us.
            </Text>
          </Box>
        </Box>

        <Box position="relative" w="full" h="100vh">
          <Image
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg"
            h="full"
            w="full"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="20%"
            left="10%"
            color="black"
            bg="white"
            p="20px"
            borderRadius="20px"
            maxWidth="80%"
          >
            <Text fontSize="38px" fontWeight="bold" mb="2">
              Skills that drive you forward
            </Text>
            <Text fontSize="lg">
              Technology and the world of work change fast — with
              <br /> us, you’re faster. Get the skills to achieve goals
              <br /> and stay competitive.
            </Text>
            <Stack direction="row" spacing={4}>
              <Button className="leftbtn">White Button</Button>
              <Button className="rightbtn">Black Button</Button>
            </Stack>
          </Box>
        </Box>
      </Carousel>
      <CardGrid />
    </>
  );
};

export default Slider;
