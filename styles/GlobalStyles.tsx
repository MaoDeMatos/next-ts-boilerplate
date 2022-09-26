import { globalCss } from "@stitches/react";
import tw, { globalStyles, theme } from "twin.macro";

// const heroBg =
//   "radial-gradient(circle at 15% 50%, var(--colors-violet4), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, var(--colors-cyan4), rgba(255, 255, 255, 0) 25%)";

const customStyles = {
  "html, body, body > div:first-of-type, div#__next, div#__next > div": {
    ...tw`h-full`,
  },
  body: {
    WebKitTapHighlightColor: theme`colors.gray.300`,
    ...tw`antialiased bg-base-100 text-base-content`,
  },
  "::selection": {
    ...tw`bg-secondary text-secondary-content`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
