import { GetStaticProps, NextPage } from "next";

import Example from "@/components/Example";
import { Page } from "@/components/Layout/Page";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const B: NextPage = () => {
  return (
    <Page>
      <Example text="B" />
      <div style={{ height: "150vh" }}></div>
      <Example text="B" />
    </Page>
  );
};

export default B;
