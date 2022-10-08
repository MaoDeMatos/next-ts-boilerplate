import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import "twin.macro";

import { Page, PageTitle } from "@/components/Layout/Page";

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
    </Page>
  );
};

export default Home;
