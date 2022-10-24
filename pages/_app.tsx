import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { MyContextProvider } from "../context/ContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContextProvider>
  );
}

export default MyApp;
