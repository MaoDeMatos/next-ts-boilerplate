import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import "twin.macro";

import { Page, PageTitle } from "@/components/Page";

import { makeStaticTranslationProps } from "../helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const Home: NextPage = () => {
  const cards = [
    {
      title: "Documentation →",
      url: "https://nextjs.org/docs",
      content: "Find in-depth information about Next.js features and API.",
    },
    {
      title: "Learn →",
      url: "https://nextjs.org/learn",
      content: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      title: "Examples →",
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      content: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      title: "Deploy →",
      url: "https://vercel.com/new",
      content:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  const { t } = useTranslation();

  return (
    <Page>
      <PageTitle>
        {`${t("language.current")} - ${t("global.welcome")} `}
        <a
          href="https://nextjs.org"
          tw="transition-all text-secondary hocus:underline"
        >
          Next.js
        </a>
        !
      </PageTitle>

      <div tw="transition-colors mockup-code">
        <pre data-prefix="$">
          <code>Get started by editing</code>
        </pre>
        <pre data-prefix=">" tw="text-warning">
          <code>pages/index.tsx</code>
        </pre>
      </div>

      <div tw="flex flex-col w-full sm:(w-auto flex-row) items-center justify-center flex-wrap max-w-3xl">
        {cards.map((element, idx) => (
          <a
            key={idx}
            href={element.url}
            tw="transition-colors m-4 p-6 text-left border border-base-300 rounded-xl max-w-xs hocus:(text-secondary border-secondary)"
          >
            <h2 tw="mb-4 font-semibold text-2xl">{element.title}</h2>
            <p tw="text-xl">{element.content}</p>
          </a>
        ))}
      </div>
    </Page>
  );
};

export default Home;
