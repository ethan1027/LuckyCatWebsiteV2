import {
  Box,
  Container,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaTelegram,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";
import SocialButton from "../SocialButton/SocialButton";
import { attributes } from "@/content/home.md";

const Footer = () => {
  const { twitterUrl, telegramUrl, redditUrl, discordUrl } = attributes.footer;
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {new Date().getFullYear()} LuckyCat. All rights reserved</Text>

        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={twitterUrl}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Telegram"} href={telegramUrl}>
            <FaTelegram />
          </SocialButton>
          <SocialButton label={"Reddit"} href={redditUrl}>
            <FaRedditAlien />
          </SocialButton>
          <SocialButton label={"Discord"} href={discordUrl}>
            <FaDiscord />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
