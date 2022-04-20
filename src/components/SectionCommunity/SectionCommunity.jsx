import PropTypes from "prop-types";
import {
  Flex,
  useColorModeValue,
  chakra,
  Box,
  Link as ChakraLink,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaTelegram,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";

const propTypes = {
  attributes: PropTypes.shape({
    community: PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
    }),
    footer: PropTypes.shape({
      twitterUrl: PropTypes.string,
      telegramUrl: PropTypes.string,
      redditUrl: PropTypes.string,
      discordUrl: PropTypes.string,
    }),
  }).isRequired,
};

const SocialButton = ({ icon, href }) => (
  <ChakraLink href={href} isExternal>
    <IconButton
      backgroundColor={useColorModeValue("brand.500", "brand.500")}
      color={useColorModeValue("secondary.300", "secondary.500")}
      _hover={{
        backgroundColor: useColorModeValue("brand.600", "brand.600"),
        color: useColorModeValue("secondary.500", "secondary.600"),
      }}
      _active={{
        backgroundColor: useColorModeValue("brand.700", "brand.700"),
        color: useColorModeValue("secondary.600", "secondary.700"),
      }}
      icon={icon}
      size="lg"
      fontSize="32px"
    />
  </ChakraLink>
);

SocialButton.propTypes = {
  icon: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

const SectionCommunity = ({
  attributes: {
    community: { heading, subheading },
    footer: { twitterUrl, telegramUrl, redditUrl, discordUrl },
  },
}) => {
  return (
    <Flex
      justify="center"
      bg={useColorModeValue("gray.100", "gray.700")}
      w="full"
      px={4}
      mt={12}
      id="community"
    >
      <Box
        w={{ base: "full", md: "75%", lg: "50%" }}
        px={4}
        py={20}
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.span
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "gray.100")}
          mb={6}
        >
          <chakra.span
            display="block"
            textAlign={{ base: "center", md: "left" }}
          >
            {heading}
          </chakra.span>
          <chakra.span
            fontSize={{ base: "2xl", sm: "3xl" }}
            display="block"
            color={useColorModeValue("gray.600", "gray.400")}
            textAlign={{ base: "center", md: "left" }}
          >
            {subheading}
          </chakra.span>
        </chakra.span>

        <SimpleGrid mt={8} spacing={6} columns={{ base: 2, md: 4 }}>
          <Flex justifyContent="center" alignItems="center">
            <SocialButton icon={<FaTwitter />} href={twitterUrl} />
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <SocialButton icon={<FaTelegram />} href={telegramUrl} />
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <SocialButton icon={<FaRedditAlien />} href={redditUrl} />
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <SocialButton icon={<FaDiscord />} href={discordUrl} />
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

SectionCommunity.propTypes = propTypes;

export default SectionCommunity;
