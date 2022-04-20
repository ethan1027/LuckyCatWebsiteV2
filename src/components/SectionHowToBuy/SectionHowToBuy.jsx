import PropTypes from "prop-types";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  StackDivider,
  Flex,
  useColorModeValue,
  Tag,
  useClipboard,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const propTypes = {
  attributes: PropTypes.shape({
    banner: PropTypes.shape({
      address: PropTypes.string,
    }),
    howToBuy: PropTypes.shape({
      tagline: PropTypes.string,
      steps: PropTypes.array,
      youtube: PropTypes.string,
    }),
  }).isRequired,
};

const HowToBuy = ({
  attributes: {
    banner: { address },
    howToBuy: { tagline, steps, youtube },
  },
}) => {
  const { hasCopied, onCopy } = useClipboard(address);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} py={8} mb={2} px={3}>
      <Fade>
        <Container maxW={"7xl"} py={12} id="howtobuy">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Heading>{tagline}</Heading>

              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                {steps.map((step, index) => (
                  <Flex key={index} align="center">
                    <Tag size="lg" colorScheme="brand" border="1px" mr={4}>
                      {index + 1}
                    </Tag>
                    <Text fontWeight={600} maxW="80%">
                      {step.description}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
            <Flex
              flexDir="column"
              justifyContent="center"
              alignContent="center"
              w="100%"
            >
              <Box
                bg={useColorModeValue("brand.300", "brand.700")}
                px={4}
                py={2}
                mb={4}
                rounded="md"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                maxWidth="100%"
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
              >
                <Text
                  fontWeight="medium"
                  marginEnd="2"
                  fontSize="md"
                  w={{ base: "100%", sm: "auto" }}
                >
                  Contract Address:
                </Text>

                <Tag
                  colorScheme="gray"
                  onClick={onCopy}
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  maxWidth="100%"
                  _hover={{ cursor: "pointer" }}
                >
                  {hasCopied ? "Copied" : address}
                </Tag>
              </Box>

              <Flex alignItems="center">
                <iframe
                  width="560"
                  height="315"
                  src={youtube}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Container>
      </Fade>
    </Box>
  );
};

HowToBuy.propTypes = propTypes;

export default HowToBuy;
