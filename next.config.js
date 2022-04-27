/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["es-CL"],
    defaultLocale: "es-CL",
  },
  experimental: {
    scrollRestoration: false,
  },
};
