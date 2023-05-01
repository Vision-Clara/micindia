import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";
import "@fontsource/montserrat";
import customTheme from "@/theme/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
