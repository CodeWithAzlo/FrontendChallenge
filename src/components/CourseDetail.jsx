import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Badge, Button } from "@chakra-ui/react";
import "./coursedetail.css";

const CourseDetails = () => {
  const { id } = useParams();

  // Sample course data
  const courses = [
    {
      id: "1",
      imageSrc: "https://via.placeholder.com/300x200.png?text=Python+Course+1",
      heading: "The Complete Python Bootcamp from zero to hero...",
      description: "Jorse Portiya, Peter Training",
      rating: "$74.99",
      costDetails: "Detailed information about the course and its benefits.",
    },
    {
      id: "2",
      imageSrc: "https://via.placeholder.com/300x200.png?text=Course+Image+2",
      heading: "Another Bootcamp of Coding",
      description: "Al Sweigert",
      rating: "$40.98",
      costDetails: "Detailed information about the course and its benefits.",
    },
    {
      id: "3",
      imageSrc: "https://via.placeholder.com/300x200.png?text=Course+Image+3",
      heading: "100 Days of Bootcamp of Python",
      description: "Dr. Angila",
      rating: "$78.76",
      costDetails: "Detailed information about the course and its benefits.",
    },
    {
      id: "4",
      imageSrc: "https://via.placeholder.com/300x200.png?text=Course+Image+4",
      heading: "Python For Data Science",
      description: "Ed Young",
      rating: "$49.00",
      costDetails: "Detailed information about the course and its benefits.",
    },
  ];

  //if course id not maching //
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <Text>Course not found</Text>;
  }

  return (
    <section className="course-detail-container">
      <div className="course-info">
        <h1 className="course-heading">{course.heading}</h1>
        <p className="course-description">Created By: {course.description}</p>
      </div>

      <Box className="course-card" p="6">
        <Image
          src={course.imageSrc}
          alt={course.heading}
          className="course-image"
        />
        <Box mt="4">
          <Text fontSize="30px" fontWeight="bold" mb="2">
            {course.heading}
          </Text>
          <Text fontSize="20px" color="gray.600" mb="3">
            {course.description}
          </Text>
          <Badge colorScheme="green" fontWeight="bold" fontSize="25px">
            {course.rating}
          </Badge>
          <Text fontSize="20px" mt="4">
            {course.costDetails}
          </Text>{" "}
          <Button colorScheme="teal" variant="solid" mt="4">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default CourseDetails;
