import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const ASlide = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      {children}
    </Flex>
  );
};
export default ASlide;
