# NextJS + Typescript portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- NodeJS >= 16

> ❗ Due to how Webpack resolves imports, you **CANNOT** use Windows, or it will break `stitches.config.ts` import from `twin.macro` (at least, at the time of writing).
>
> ❗ Use WSL 2 ([Windows Subsystem for Linux](https://wikipedia.org/wiki/Windows_Subsystem_for_Linux)) if you need to start the app locally

## Getting Started

### `yarn dev`

- Run the development server.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
