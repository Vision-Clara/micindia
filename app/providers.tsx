"use client";
import customTheme from "@/theme/index";

import { ChakraProvider } from "@chakra-ui/react";
import StyledJsxRegistry from "./registry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={customTheme}>
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </ChakraProvider>
  );
}
