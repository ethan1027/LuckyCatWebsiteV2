import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import {
  Flex,
  Box,
  chakra,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

import CatIcon from "@/components/Feature/CatIcon";

const propTypes = {
  attributes: PropTypes.shape({
    testimonials: PropTypes.shape({
      testimonials: PropTypes.array,
      tagline: PropTypes.string,
      taglineEmp: PropTypes.string,
      tagDesc: PropTypes.string,
    }),
  }).isRequired,
};

const SectionTestimonials = ({
  attributes: {
    testimonials: { testimonials, tagline, taglineEmp, tagDesc },
  },
}) => {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      px={6}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      id="testimonials"
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={20}
          textTransform={"uppercase"}
          color={useColorModeValue("brand.600", "brand.500")}
        >
          {tagline}
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          {taglineEmp}
        </chakra.h1>
        <chakra.h2
          margin={"auto"}
          width={"70%"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          {tagDesc}
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <Fade bottom key={index}>
            <TestimonialCard {...cardInfo} index={index} />
          </Fade>
        ))}
      </SimpleGrid>
      <Box>
        <Icon
          viewBox="0 0 40 35"
          mt={14}
          boxSize={14}
          color={useColorModeValue("secondary.500", "secondary.400")}
        >
          <CatIcon />
        </Icon>
      </Box>
    </Flex>
  );
};

SectionTestimonials.propTypes = propTypes;

export default SectionTestimonials;
