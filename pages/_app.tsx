import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Other tags like title, meta can also go here */}
        <link rel="icon" href="/assets/ah.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
