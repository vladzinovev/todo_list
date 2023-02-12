import StoreComponent from "@/store/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

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
