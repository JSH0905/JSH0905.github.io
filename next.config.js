/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production"
    ? {
        basePath: "/JSH0905.github.io",
        assetPrefix: "/JSH0905.github.io",
      }
    : {}),
};

module.exports = nextConfig;
