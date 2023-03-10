import { QueryClient, QueryClientProvider } from "react-query";

import StoreComponent from "@/store/store";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreComponent>
        <Component {...pageProps} />
      </StoreComponent>
    </QueryClientProvider>
  );
}
