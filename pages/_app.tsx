import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import "twin.macro";

import Layout from "@/components/Layout";

import globalStyles from "../styles/GlobalStyles";

const RouteLoader = () => {
  return (
    <div tw="h-full w-full flex justify-center items-center">Loading...</div>
  );
};

NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }: AppProps) {
  // const isLoading = true;
  const [isLoading, setIsLoading] = useState(false);
  globalStyles();

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
      NProgress.done(false);
    });

    Router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, [Router]);

  return (
    <>
      <Head>
        <title>Mao De Matos</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="description" content="Mao De Matos. Web developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* {isLoading ? <RouteLoader /> : null} */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
