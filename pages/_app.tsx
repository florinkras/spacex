import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/Layout/theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
