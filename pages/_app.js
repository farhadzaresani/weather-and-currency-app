import AppLayout from "@/components/AppLayout";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";

let theme = createTheme({
  palette: {
    primary: {
      main: "rgba(3, 3, 114, 0.355)",
    },
  },
  mode: "dark",
});

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppLayout />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
