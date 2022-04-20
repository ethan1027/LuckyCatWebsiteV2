import PropTypes from "prop-types";
import { Flex, Box, chakra, useColorModeValue } from "@chakra-ui/react";
import CatIcon from "./CatIcon";

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Feature = ({ title, children }) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          bg={useColorModeValue("brand.500", "brand.500")}
          color={useColorModeValue("secondary.400", "secondary.500")}
        >
          <CatIcon fontSize="3xl" />
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color={useColorModeValue("gray.900", "gray.200")}
        >
          {title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

Feature.propTypes = propTypes;

export default Feature;
