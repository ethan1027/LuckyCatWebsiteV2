import "../../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return router.asPath.startsWith("/admin") ? (
    <Component {...pageProps} />
  ) : (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
