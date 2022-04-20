import PropTypes from "prop-types";
import {
  Box,
  Icon,
  chakra,
  Image as ChakraImage,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const propTypes = {
  attributes: PropTypes.shape({
    hero: PropTypes.shape({
      tagline: PropTypes.string,
      taglineEmphasis: PropTypes.string,
      content: PropTypes.string,
      hook: PropTypes.string,
      image: PropTypes.string,
    }),
  }).isRequired,
};

const Hero = ({
  attributes: {
    hero: { tagline, taglineEmphasis, content, hook, image },
  },
}) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "inline", xl: "inline" }}>
                  {tagline}&nbsp;
                </chakra.span>
                <chakra.span
                  display={{ base: "inline", xl: "inline" }}
                  color={useColorModeValue("secondary.500", "secondary.500")}
                >
                  {taglineEmphasis}
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color={useColorModeValue("gray.700", "gray.300")}
              >
                {content}
              </chakra.p>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                fontWeight="bold"
                color={useColorModeValue("secondary.600", "secondary.500")}
              >
                {hook}
              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
                // fontFamily="fantasy"
              >
                <Box rounded="full" shadow="md">
                  <ScrollLink
                    to={"howtobuy"}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <chakra.div
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{ base: "md", md: "lg" }}
                      rounded="md"
                      color={useColorModeValue("gray.700", "gray.800")}
                      bg={useColorModeValue("secondary.400", "secondary.400")}
                      _hover={{
                        cursor: "pointer",
                        bg: useColorModeValue("secondary.500", "secondary.500"),
                      }}
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                    >
                      Buy Now
                    </chakra.div>
                  </ScrollLink>
                </Box>
                {/* <Box mt={[3, 0]} ml={[null, 3]}>
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color={useColorModeValue("brand.700", "brand.800")}
                    bg={useColorModeValue("brand.400", "brand.100")}
                    _hover={{
                      bg: useColorModeValue("brand.500", "brand.200"),
                    }}
                  >
                    Live demo
                  </chakra.a>
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border="solid 1px transparent"
      >
        <ChakraImage
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src={image}
          alt=""
          loading="lazy"
          objectPosition="left"
        />
      </Box>
    </Box>
  );
};

Hero.propTypes = propTypes;

export default Hero;
