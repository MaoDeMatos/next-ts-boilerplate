const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack: (config) => {
    // Needed to use `tw` prop in sub directories
    config.resolve.preferRelative = true;
    return config;
  },
};

module.exports = nextConfig;
