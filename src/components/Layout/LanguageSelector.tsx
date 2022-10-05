import { useTranslation } from "next-i18next";
import Link from "next/link";
import tw, { styled } from "twin.macro";

import frFlag from "@/assets/Flag_of_France.svg";
import ukFlag from "@/assets/Flag_of_the_UK.svg";

import { CustomImage } from "../shared/CustomImage";
import { ResponsiveFixedContainer } from "./Page";

const LanguageButton = styled("button", {
  ...tw`relative h-6 w-6 text-sm transition-all`,
  ...tw`rounded-full overflow-hidden border border-base-content`,
  ...tw`ring-0 ring-transparent ring-offset-4 ring-offset-base-100`,
  ...tw`[&.active]:(ring-2 ring-secondary)`,
});

const languagesList = [
  { lang: "en", image: ukFlag },
  { lang: "fr", image: frFlag },
] as const;

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <ResponsiveFixedContainer tw="right-8 bottom-8">
      {languagesList.map(({ lang, image }, idx) => (
        <Link key={idx} href="/" locale={lang}>
          <LanguageButton
            type="button"
            title={t(`language.${lang}.switch`)}
            className={i18n.language === lang ? "active" : ""}
          >
            <CustomImage src={image} alt={t(`language.${lang}.flagAlt`)} />
          </LanguageButton>
        </Link>
      ))}
    </ResponsiveFixedContainer>
  );
};
