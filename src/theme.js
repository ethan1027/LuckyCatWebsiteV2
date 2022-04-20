import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FBEAEA",
      100: "#F2C4C4",
      200: "#EA9E9E",
      300: "#E27979",
      400: "#DA5353",
      500: "#D22D2D",
      600: "#A82424",
      700: "#7E1B1B",
      800: "#541212",
      900: "#2A0909",
    },
    secondary: {
      50: "#FFF8E6",
      100: "#FEECB9",
      200: "#FDDF8C",
      300: "#FCD35E",
      400: "#FCC631",
      500: "#FBBA04",
      600: "#C99503",
      700: "#976F02",
      800: "#644A02",
      900: "#322501",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

export default theme;
