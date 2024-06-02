import React from "react";
import "@fontsource/montserrat";
import customTheme from "@/theme/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppPropsWithLayout } from "@/types";
import Layout from "@/components/layout/user/Layout";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
