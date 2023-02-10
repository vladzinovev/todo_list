import StoreComponent from "@/store/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreComponent>
      <Component {...pageProps} />
    </StoreComponent>
  );
}
