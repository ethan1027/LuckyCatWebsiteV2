import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { Box, useColorModeValue, chakra, Stack } from "@chakra-ui/react";
import Feature from "@/components/Feature/Feature";

const propTypes = {
  attributes: PropTypes.shape({
    tokenomics: PropTypes.shape({
      title: PropTypes.string,
      tagline: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

const Tokenomics = ({
  attributes: {
    tokenomics: { title, tagline, description, items },
  },
}) => {
  return (
    <Box
      py={12}
      mt={4}
      mb={10}
      px={3}
      bg={useColorModeValue("white", "gray.800")}
      rounded="xl"
      id="tokenomics"
    >
      <Fade>
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600", "brand.400")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {title}
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900", "gray.100")}
            >
              {tagline}
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              {description}
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              {items.map((item) => (
                <Fade key={item.title} bottom>
                  <Feature title={item.title}>{item.description}</Feature>
                </Fade>
              ))}
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

Tokenomics.propTypes = propTypes;

export default Tokenomics;
