/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
