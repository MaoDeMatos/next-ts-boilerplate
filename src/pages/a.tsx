import { GetStaticProps, NextPage } from "next";

import Example from "@/components/Example";
import { Page } from "@/components/Layout/Page";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const A: NextPage = () => {
  return (
    <Page>
      <Example text="A" />
      <div style={{ height: "150vh" }}></div>
      <Example text="A" />
    </Page>
  );
};

export default A;
