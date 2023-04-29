// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundation styles overrieds
import fonts from "./foundations/font";

const overrides = {
  layerStyles: {
    base: {
      bg: "blue.500",
      color: "white",
    },
  },
  fonts,
  styles,
  components: {},
};

export default extendTheme(overrides);
