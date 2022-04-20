import PropTypes from "prop-types";
import { chakra, VisuallyHidden, useColorModeValue } from "@chakra-ui/react";

const propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

SocialButton.propTypes = propTypes;

export default SocialButton;
