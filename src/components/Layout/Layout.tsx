import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import "twin.macro";

import { HasChildren } from "@/types/GeneralTypes";

import VercelLogo from "../svgs/VercelLogo";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

/**
 * Temporary navbar, to test page transitions
 */
function NavBar() {
  const pages = ["/", "/test", "/test/a", "/test/b", "/test/c"];

  return (
    <nav tw="flex py-8 justify-center items-center gap-4 px-8 border-b border-base-300">
      {pages.map((url) => (
        <Link key={url} href={url} tw="bg-accent">
          <button type="button" tw="underline text-accent">
            {url}
          </button>
        </Link>
      ))}
    </nav>
  );
}

function Footer() {
  return (
    <footer tw="flex py-8 justify-center items-center px-8 border-t border-base-300">
      <div tw="flex justify-center items-center grow">
        Powered by
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          <span tw="sr-only">Logo Vercel</span>
          <VercelLogo tw="h-5 w-20 ml-2" />
        </a>
      </div>
    </footer>
  );
}

export default function Layout({ children }: HasChildren) {
  return (
    <div tw="container flex flex-col ">
      <ThemeSelector />
      <LanguageSelector />

      <NavBar />

      <AnimatePresence
        // initial={false}
        mode="wait"
      >
        <motion.main tw="py-8 px-16 flex-1">{children}</motion.main>
        {/* <main tw="py-8 px-16 flex-1">{children}</main> */}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
