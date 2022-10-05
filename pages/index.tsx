import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import "twin.macro";

import { Page, PageTitle } from "@/components/Page";

import { makeStaticTranslationProps } from "../helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <PageTitle>👋 {`${t("global.welcome")} `}</PageTitle>

      <div tw="transition-colors mockup-code">
        <pre data-prefix="$">
          <code>Get started by editing</code>
        </pre>
        <pre data-prefix=">" tw="text-warning">
          <code>pages/index.tsx</code>
        </pre>
      </div>

      <Link href="/test" tw="bg-accent">
        <button type="button" tw="underline text-accent">
          Test
        </button>
      </Link>
    </Page>
  );
};

export default Home;
