import { useTranslation } from "next-i18next";
import Link from "next/link";
import tw, { styled } from "twin.macro";

import { ResponsiveFixedContainer } from "./Page";

const LanguageButton = styled("button", {
  ...tw`h-6 w-6 rounded-full border border-base-content text-sm transition-all`,
  ...tw`ring-0 ring-transparent ring-offset-4 ring-offset-base-100`,
  ...tw`[&.active]:(ring-2 ring-secondary)`,
});

const languagesList = ["en", "fr"] as const;

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <ResponsiveFixedContainer tw="right-10 bottom-12">
      {languagesList.map((value, idx) => (
        <Link key={idx} href="/" locale={value}>
          <LanguageButton
            type="button"
            title={t(`language.switchTo-${value}`)}
            className={i18n.language === value ? "active" : ""}
          >
            {value}
          </LanguageButton>
        </Link>
      ))}
    </ResponsiveFixedContainer>
  );
};
