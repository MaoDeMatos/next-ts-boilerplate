import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

import { getCssText } from "../stitches.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          src="./headerScript.min.js"
        />
      </body>
    </Html>
  );
}
