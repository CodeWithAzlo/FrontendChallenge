// CardGrid.js
import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Card from './Card';
import Para from './Para';


const CardGrid = () => {
  const cards = [
    //da mehmood khan ma dummy array ke store kare de ta wrla bya backend na sai data sara conect ka
    //nor hum pake sa add ke add kole she ma wrla bas styling barabar kare de
    {
      id: '1',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=Python+Course+1',
      heading: 'The Complete Python Bootcamp from Zero to Hero...',
      description: 'Jorse Portiya, Peter Training',
      updated: 'August 14, 2024',
      rating: '$74.99',
    },
    {
      id: '2',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=Course+Image+2',
      heading: 'Another Bootcamp of Coding',
      description: 'Al Sweigert',
      updated: 'August 14, 2020',
      rating: '$40.98'
    },
    {
      id: '3',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=Course+Image+3',
      heading: '100 Days of Bootcamp of Python',
      description: 'Dr. Angila',
      rating: '$78.76'
    },
    {
      id: '4',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=Course+Image+4',
      heading: 'Python For Data Science',
      description: 'Ed Young',
      rating: '$49.00',
    },
  ];

  return (
    <Box p="2" >
    <Para />
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {cards.slice(0, 4).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageSrc={card.imageSrc}
            heading={card.heading}
            description={card.description}
            rating={card.rating}
          />
        ))}
      </Grid>

      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        swipeable
        className="carousel"
        style={{ marginTop: '20px' }}
      >
        {cards.slice(4).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageSrc={card.imageSrc}
            heading={card.heading}
            description={card.description}
            rating={card.rating}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CardGrid;
