import "twin.macro";

import { HasChildren } from "@/types/GeneralTypes";

import VercelLogo from "../svgs/VercelLogo";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

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

      <main tw="py-8 px-16 flex-1">{children}</main>

      <Footer />
    </div>
  );
}
