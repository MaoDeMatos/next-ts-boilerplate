import tw from "twin.macro";

export const Page = tw.div`flex flex-col justify-center items-center gap-8 py-12 px-16`;

export const PageTitle = tw.h1`text-7xl leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary`;

export const PageSubTitle = tw.h2`text-4xl font-bold`;

export const ResponsiveFixedContainer = tw.div`fixed z-10 flex flex-col sm:flex-row gap-6`;
