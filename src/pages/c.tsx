import { GetStaticProps, NextPage } from "next";

import Example from "@/components/Example";
import { Page } from "@/components/Layout/Page";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const C: NextPage = () => {
  return (
    <Page>
      <Example text="C" />
    </Page>
  );
};

export default C;
