import "twin.macro";

import { Page, PageTitle } from "./Layout/Page";
import { Button } from "./shared/Buttons";
import { CustomLink } from "./shared/CustomLink";

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  subTitle?: string;
  buttonText: string;
}

export const ErrorPage = ({
  statusCode,
  title,
  subTitle,
  buttonText,
}: ErrorPageProps) => {
  return (
    <Page tw="h-full">
      <div
      // tw="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary"
      >
        {statusCode && <PageTitle tw="text-9xl">{statusCode}</PageTitle>}
        {title && <h2 tw="text-2xl font-bold">{title}</h2>}
        {subTitle && <p tw="text-xl">{subTitle}</p>}
      </div>

      <CustomLink href={"/"}>
        <Button type={"gradient"}>{buttonText}</Button>
      </CustomLink>
    </Page>
  );
};
