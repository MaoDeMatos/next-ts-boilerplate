import { Head, Html, Main, NextScript } from "next/document";

// import Script from "next/script";
import { getCssText } from "../stitches.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(()=>{const e=localStorage.getItem("theme-storage"),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=t?"dracula":"light",r=document.documentElement;if(!e)return r.setAttribute("data-theme",a),void localStorage.setItem("theme-storage",JSON.stringify({state:{currentTheme:"system",isDarkMode:t}}));const{state:s}=JSON.parse(e);"system"===s.currentTheme?r.setAttribute("data-theme",a):r.setAttribute("data-theme",s.currentTheme)})();',
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        {/* <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          src="./headerScript.min.js"
        /> */}
      </body>
    </Html>
  );
}
