import {
  AnimatePresence,
  Variants,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

// import "twin.macro";
import { HasChildren } from "@/types/GeneralTypes";

import { CustomLink } from "../shared/CustomLink";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

/**
 * Temporary navbar, to test page transitions
 */
function NavBar() {
  const pages = ["/", "/loading", "/a", "/b", "/c"];

  return (
    <nav tw="fixed inset-x-0 bottom-0 w-full flex py-8 justify-center items-center gap-4 px-8">
      {pages.map((url) => (
        <CustomLink key={url} href={url}>
          <button type="button" tw="underline text-accent">
            {url}
          </button>
        </CustomLink>
      ))}
    </nav>
  );
}

const AnimatedPage = styled(motion.main, tw`h-screen overflow-y-auto`);

export default function Layout({ children }: HasChildren) {
  const { pathname } = useRouter();
  // const shouldReduceMotion = useReducedMotion();

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      y: 25,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    out: {
      opacity: 0,
      y: -25,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <AnimatedPage
          tw="h-screen overflow-y-auto"
          variants={
            // shouldReduceMotion ? {} :
            pageVariants
          }
          initial={"initial"}
          animate={"static"}
          exit={"out"}
          transition={{ type: "tween" }}
          key={pathname}
        >
          {children}
        </AnimatedPage>
      </AnimatePresence>

      <ThemeSelector />
      <LanguageSelector />
      <NavBar />
    </>
  );
}
