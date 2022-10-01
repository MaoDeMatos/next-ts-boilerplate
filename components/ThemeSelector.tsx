import { useEffect } from "react";
import tw, { styled } from "twin.macro";

import {
  themes,
  useChangeTheme,
  useCurrentTheme,
} from "@/helpers/hooks/useCurrentTheme";

const ThemeButton = styled("button", {
  ...tw`h-6 w-6 rounded-full border border-base-content transition-all`,
  ...tw`ring-0 ring-transparent ring-offset-4 ring-offset-base-100`,
  ...tw`[&.active]:(ring-2 ring-secondary)`,
  variants: {
    theme: {
      system: tw`bg-transparent`,
      light: tw`bg-white`,
      dracula: tw`bg-indigo-400`,
      autumn: tw`bg-red-600`,
      forest: tw`bg-emerald-600`,
      aqua: tw`bg-blue-400`,
      cyberpunk: tw`bg-yellow-300`,
      pastel: tw`bg-rose-200`,
    },
  },
});

export function ThemeSelector() {
  const { currentTheme } = useCurrentTheme();
  const changeTheme = useChangeTheme();

  const setSystemTheme = (e?: MediaQueryListEvent) => {
    e?.preventDefault();
    if (currentTheme === "system") changeTheme("system");
  };

  // Change theme when system theme updates
  useEffect(
    () => {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");

      mq.addEventListener("change", setSystemTheme);
      return () => mq.removeEventListener("change", setSystemTheme);
    },
    // You need this dependency or the listener will never update current theme value
    [currentTheme]
  );

  return (
    <div tw="fixed left-10 bottom-12 flex gap-6">
      <ThemeButton
        type="button"
        title="Activate system (default) color theme"
        className={currentTheme === "system" ? "active" : ""}
        theme={"system"}
        onClick={() => changeTheme("system")}
      >
        <div tw="w-full h-0.5 bg-base-content -rotate-45" />
      </ThemeButton>

      {themes.map((theme) => (
        <ThemeButton
          type="button"
          title={`Activate ${theme} color theme`}
          className={theme === currentTheme ? "active" : ""}
          key={theme}
          theme={theme}
          onClick={() => changeTheme(theme)}
        />
      ))}
    </div>
  );
}
