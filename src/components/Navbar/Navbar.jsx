import PropTypes from "prop-types";
import {
  chakra,
  Flex,
  Image as ChakraImage,
  HStack,
  VStack,
  Button,
  Box,
  IconButton,
  CloseButton,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Heading,
  Collapse,
} from "@chakra-ui/react";
import Link from "next/link";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  {
    name: "Project",
    to: "whyluckycat",
  },
  {
    name: "Tokenomics",
    to: "tokenomics",
  },
  {
    name: "How to Buy",
    to: "howtobuy",
  },
  {
    name: "Testimonials",
    to: "testimonials",
  },
  {
    name: "Community",
    to: "community",
  },
];

const MenuItem = ({ children, to, onClose }) => {
  return (
    <ScrollLink
      activeClass="navbar-active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <Button
        variant="ghost"
        onClick={onClose}
        color={useColorModeValue("gray.800", "gray.100")}
      >
        {children}
      </Button>
    </ScrollLink>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.900");
  const { toggleColorMode } = useColorMode();
  const mobileNav = useDisclosure();

  return (
    <chakra.header
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      position="fixed"
      top={0}
      zIndex={10}
      alignItems="center"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <Link href="/" passHref>
            <Flex as="a" alignItems="center">
              <ChakraImage src="/luckycat-new.png" h={8} />

              <Heading fontSize="xl" fontWeight="bold" ml="2">
                LuckyCat Token
              </Heading>
            </Flex>
          </Link>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color={useColorModeValue("secondary.500", "secondary.400")}
            display={{ base: "none", md: "inline-flex" }}
          >
            <Button onClick={toggleColorMode} size="sm">
              {useColorModeValue(<MoonIcon />, <SunIcon />)}
            </Button>

            {navItems.map(({ name, to }) => (
              <MenuItem to={to} key={name} onClose={mobileNav.onClose}>
                {name}
              </MenuItem>
            ))}

            {/* <Button colorScheme="brand" size="sm">
              Get Started
            </Button> */}
          </HStack>

          <Box
            display={{ base: "inline-flex", md: "none" }}
            alignItems="center"
          >
            <Button onClick={toggleColorMode} size="sm">
              {useColorModeValue(<MoonIcon />, <SunIcon />)}
            </Button>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
            <Collapse in={mobileNav.isOpen} animateOpacity={true}>
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display="flex"
                flexDirection="column"
                p={2}
                pb={4}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex={10}
              >
                <Box
                  w="full"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={3}
                >
                  <Link href="/" passHref>
                    <Flex
                      as="a"
                      alignItems="center"
                      onClick={mobileNav.onClose}
                    >
                      <ChakraImage src="/luckycat-new.png" h={8} />

                      <Heading fontSize="xl" fontWeight="bold" ml="2">
                        LuckyCat
                      </Heading>
                    </Flex>
                  </Link>
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                </Box>

                {navItems.map(({ name, to }) => (
                  <MenuItem to={to} key={name} onClose={mobileNav.onClose}>
                    {name}
                  </MenuItem>
                ))}
                {/* <Button colorScheme="blue" size="sm">
                  Get Started
                </Button> */}
              </VStack>
            </Collapse>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
