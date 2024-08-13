import React, { useState } from 'react';
import { Box, Image, Text, Badge, Button } from '@chakra-ui/react';
import './Card2.css'; 

const Card = ({ id, imageSrc, heading, description, rating, costDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      maxW="300px"
      m="4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Anchor tag for image */}
      <a href={`/course/${id}`}>
        <Image src={imageSrc} alt={heading} boxSize="full" objectFit="cover" />
      </a>

      {/* Anchor tag for heading and description */}
      <Box p="4">
        <a href={`/course/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Text fontSize="25px" fontWeight="bold" mb="2">
            {heading}
          </Text>
          <Text fontSize="15px" color="gray.600" mb="3">
            {description}
          </Text>
        </a>
        <Badge colorScheme="green" fontWeight="bold" fontSize="20px">
          {rating}
        </Badge>
      </Box>

      {/* Popup */}
      {isHovered && (
        <Box
          className="popup"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p="4"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          zIndex="1" 
        >
          <Text fontSize="30px" fontWeight="bold" mb="2">
            {heading}
          </Text>
          <Text fontSize="16px" mb="2">
            {costDetails}
          </Text>
          <Button className='pop-btn' colorScheme="teal" variant="solid" width="full">
            Add to Cart
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Card;
